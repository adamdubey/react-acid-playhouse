################
# S3 Resources
################

resource "aws_s3_bucket" "app_acidplayhouse_s3_bucket" {
    bucket = "${local.prefix}"
    acl = "public-read"
    force_destroy = true

    website {
        index_document = "index.html"
        error_document = "index.html"
    }

    versioning {
      enabled = true
    }

    tags = local.common_tags
  
}