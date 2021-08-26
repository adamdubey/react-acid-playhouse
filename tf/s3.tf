################
# S3 Resources
################

resource "aws_s3_bucket" "app_acidplayhouse_s3_bucket" {
  bucket        = local.prefix
  acl           = "public-read"
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

resource "aws_s3_bucket_policy" "app_acidplayhouse_s3_bucket_policy" {
  bucket = aws_s3_bucket.app_acidplayhouse_s3_bucket.id

  policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Action": [
        "s3:GetObject"
        ],
        "Effect": "Allow",
        "Resource": "arn:aws:s3:::${local.prefix}/*",
        "Principal": "*"
      
    }
    ]
}
POLICY  
}