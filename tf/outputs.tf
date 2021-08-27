output "acidplayhouse_app_bucket_name" {
  value = aws_s3_bucket.app_acidplayhouse_s3_bucket.id
}

output "cloudfront_distribution_id" {
    value = aws_cloudfront_distribution.s3_distribution.id
}