data "google_client_config" "default" {}

terraform {
  backend "gcs" {
    bucket = "aabedraba-com-terraform-tf-state-dev"
    prefix = "terraform/state"
  }
}

variable "project_id" {}
variable "region" {}

# GKE cluster
resource "google_container_cluster" "primary" {
  name     = "${var.project_id}-gke"
  location = var.region
  project  = var.project_id

  network    = "default"
  subnetwork = "default"
  ip_allocation_policy {}

  # Enabling Autopilot for this cluster
  enable_autopilot = true
}
