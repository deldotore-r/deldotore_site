# Cloud & DevOps Lab – deldotore.com

[![Deploy Website](https://github.com/deldotore-r/deldotore_site/actions/workflows/deploy.yml/badge.svg)](https://github.com/deldotore-r/deldotore_site/actions)

This repository hosts my personal website and serves as a hands-on lab for **Platform Engineering** and **Infrastructure Automation**.

## Solution Architecture
The solution was designed to be 100% serverless, focusing on high availability and low cost:
- **Hosting:** Amazon S3 (Static Website Hosting).
- **Global Distribution:** Amazon CloudFront (CDN) with SSL/TLS termination.
- **Security:** Restricted IAM policies and security headers via edge computing.

## CI/CD Pipeline (GitHub Actions)
The automated pipeline ensures that the infrastructure reflects the code state in real time:
1. **Synchronization:** `aws s3 sync` for intelligent asset updates.
2. **Invalidation:** Automatic CloudFront cache purge via AWS CLI.
3. **Security:** Authentication via GitHub Secrets to protect IAM credentials.

## Active Labs & Studies (2026)
In addition to this site’s infrastructure, this ecosystem is used to validate and experiment with:
- **Orchestration:** Design of complex DAGs using **Apache Airflow**.
- **Containers:** Environment virtualization and standardization with **Docker**.
- **Scalability:** Workload management with **Kubernetes (K8s)**.
- **IaC:** Evolution of **Terraform** modules for multi-region provisioning.

## Future Improvements
- [ ] Implement OIDC for GitHub ↔ AWS authentication (no static keys).
- [ ] Add infrastructure testing (Terratest).
- [ ] Implement cost monitoring (FinOps) using AWS Budgets.

---
**Contact:** [LinkedIn](https://www.linkedin.com/in/reinaldo-del-dotore/)
