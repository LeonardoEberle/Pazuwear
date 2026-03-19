variable "project_name" {
  type        = string
  description = "Prefix for resource names and tags"
  default     = "pazuwear"
}

variable "s3_bucket_name" {
  type        = string
  description = "Global S3 bucket name (must be unique in AWS; GitHub workflow assumes this value)"
  default     = "pazuwear"
}

variable "aws_region" {
  type        = string
  description = "Region for S3 (CloudFront is global; ACM for custom TLS is us-east-1 via ARN)"
  default     = "eu-west-1"
}

variable "cloudfront_aliases" {
  type        = list(string)
  description = "Hostnames for this distribution (must match your ACM certificate, e.g. names covered by *.jaogabriel.dev)"
  default     = ["pazuwear.jaogabriel.dev"]
}

variable "acm_certificate_arn" {
  type        = string
  description = "ACM certificate ARN in us-east-1 (required by CloudFront for custom domains)"
  default     = "arn:aws:acm:us-east-1:833983103219:certificate/6c6468cd-61de-49e9-a5ea-7e03ce1d38fa"
}

variable "cloudfront_price_class" {
  type        = string
  description = "CloudFront price class"
  default     = "PriceClass_All"
}
