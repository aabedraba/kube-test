data "google_client_config" "default" {}

variable "project_id" {}
variable "region" {}

terraform {
  backend "gcs" {
    bucket = "devrel-341608-tf-state-dev"
    prefix = "terraform/state"
  }
}

resource "google_cloudbuild_trigger" "filename-trigger" {
  name    = "kube-test"
  project = var.project_id
  github {
    name  = "kube-test"
    owner = "aabedraba"
    push {
      branch = "main"
    }
  }

  filename = "cloudbuild.yaml"
}

# GKE cluster
resource "google_container_cluster" "primary" {
  name     = "${var.project_id}-gke"
  location = var.region
  project  = var.project_id

  network    = "default"
  subnetwork = "default"
  ip_allocation_policy {}

  resource_labels = {}

  # Enabling Autopilot for this cluster
  enable_autopilot = true
  vertical_pod_autoscaling {
    enabled = true
  }
}
