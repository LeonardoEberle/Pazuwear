output "s3_bucket_name" {
  description = "S3 bucket name (matches var.s3_bucket_name; workflow syncs to this bucket)"
  value       = aws_s3_bucket.site.bucket
}

output "cloudfront_distribution_id" {
  description = "Copy to GitHub secret CLOUDFRONT_DISTRIBUTION_ID for cache invalidation"
  value       = aws_cloudfront_distribution.site.id
}

output "cloudfront_domain_name" {
  description = "CloudFront hostname (create CNAME/ALIAS to this from your DNS)"
  value       = aws_cloudfront_distribution.site.domain_name
}
