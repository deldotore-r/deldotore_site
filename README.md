# 📂 Cloud & DevOps Lab - deldotore.com

[![Deploy Website](https://github.com/deldotore-r/deldotore_site/actions/workflows/deploy.yml/badge.svg)](https://github.com/deldotore-r/deldotore_site/actions)

Este repositório hospeda meu site pessoal e serve como um laboratório prático de **Engenharia de Plataforma** e **Automação de Infraestrutura**.

## 🏗️ Arquitetura da Solução
A solução foi desenhada para ser 100% serverless, focando em alta disponibilidade e baixo custo:
* **Hosting:** Amazon S3 (Static Website Hosting).
* **Distribuição Global:** Amazon CloudFront (CDN) com terminação SSL/TLS.
* **Segurança:** IAM Policies restritas e Headers de segurança via Edge Computing.

## ⚙️ Esteira de CI/CD (GitHub Actions)
O pipeline automatizado garante que a infraestrutura reflita o estado do código em tempo real:
1.  **Sincronização:** `aws s3 sync` para atualização inteligente dos ativos.
2.  **Invalidação:** Purge automático do cache do CloudFront via AWS CLI.
3.  **Segurança:** Autenticação via GitHub Secrets para proteção de chaves IAM.

## 🔬 Laboratórios e Estudos Ativos (2026)
Além da infraestrutura deste site, utilizo este ecossistema para homologar práticas de:
* **Orquestração:** Criação de DAGs complexas com **Apache Airflow**.
* **Containers:** Virtualização e padronização de ambientes com **Docker**.
* **Escalabilidade:** Gerenciamento de workloads em **Kubernetes (K8s)**.
* **IaC:** Evolução de módulos de **Terraform** para provisionamento multi-region.

## 📈 Melhorias Futuras
- [ ] Implementar OIDC para autenticação GitHub <-> AWS (sem chaves estáticas).
- [ ] Adicionar testes de infraestrutura (Terratest).
- [ ] Implementar monitoramento de custos (FinOps) via AWS Budgets.

---
📫 **Contato:** [LinkedIn](https://www.linkedin.com/in/reinaldo-del-dotore/)
