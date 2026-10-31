# Generates Eshan_Sharma_Resume_BEST.docx — ATS-safe, single column, real work history.
from docx import Document
from docx.shared import Pt, Inches, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_TAB_ALIGNMENT
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

doc = Document()
for s in doc.sections:
    s.top_margin = Inches(0.5); s.bottom_margin = Inches(0.5)
    s.left_margin = Inches(0.6); s.right_margin = Inches(0.6)

style = doc.styles['Normal']
style.font.name = 'Calibri'; style.font.size = Pt(10.5)
style.paragraph_format.space_after = Pt(2)

DARK = RGBColor(0x22, 0x22, 0x22)
ACCENT = RGBColor(0x0B, 0x3D, 0x42)

def para(text='', bold=False, size=10.5, color=DARK, space_after=2, align=None):
    p = doc.add_paragraph()
    r = p.add_run(text); r.bold = bold; r.font.size = Pt(size); r.font.color.rgb = color
    p.paragraph_format.space_after = Pt(space_after)
    if align: p.alignment = align
    return p

def heading(text):
    p = doc.add_paragraph()
    r = p.add_run(text); r.bold = True; r.font.size = Pt(11.5); r.font.color.rgb = ACCENT
    p.paragraph_format.space_before = Pt(8); p.paragraph_format.space_after = Pt(3)
    pPr = p._p.get_or_add_pPr(); pbdr = OxmlElement('w:pBdr')
    b = OxmlElement('w:bottom'); b.set(qn('w:val'), 'single'); b.set(qn('w:sz'), '6'); b.set(qn('w:color'), '0B3D42')
    pbdr.append(b); pPr.append(pbdr)
    return p

def bullet(text):
    p = doc.add_paragraph(style='List Bullet')
    r = p.add_run(text); r.font.size = Pt(10.5); r.font.color.rgb = DARK
    p.paragraph_format.space_after = Pt(2)
    return p

def job(role, company, date, bullets):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(6); p.paragraph_format.space_after = Pt(1)
    # keep job heading glued to its first bullet (no orphan at page break)
    p._p.get_or_add_pPr().append(OxmlElement('w:keepNext'))
    p.paragraph_format.tab_stops.add_tab_stop(Inches(7.3), WD_TAB_ALIGNMENT.RIGHT)
    r = p.add_run(f'{role} | {company}'); r.bold = True; r.font.size = Pt(11); r.font.color.rgb = DARK
    r2 = p.add_run(f'\t{date}'); r2.bold = True; r2.font.size = Pt(10); r2.font.color.rgb = ACCENT
    for b in bullets: bullet(b)

def hyperlink(p, text, url):
    rid = p.part.relate_to(url, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink", is_external=True)
    h = OxmlElement('w:hyperlink'); h.set(qn('r:id'), rid)
    r = OxmlElement('w:r'); rPr = OxmlElement('w:rPr')
    c = OxmlElement('w:color'); c.set(qn('w:val'), '0563C1'); rPr.append(c)
    u = OxmlElement('w:u'); u.set(qn('w:val'), 'single'); rPr.append(u)
    r.append(rPr)
    t = OxmlElement('w:t'); t.set(qn('xml:space'), 'preserve'); t.text = text
    r.append(t); h.append(r); p._p.append(h)

# ---------- HEADER ----------
para('ESHAN SHARMA', bold=True, size=20, align=WD_ALIGN_PARAGRAPH.CENTER, space_after=1)
para('DevOps Lead  |  Multi-Cloud, Kubernetes & DevSecOps', bold=True, size=12, align=WD_ALIGN_PARAGRAPH.CENTER, space_after=2)

cp = doc.add_paragraph(); cp.alignment = WD_ALIGN_PARAGRAPH.CENTER
cp.paragraph_format.space_after = Pt(2)
ICON = 'D:/portfolio/tools/icons/'
IC = Inches(0.115)

def crun(t):
    r = cp.add_run(t); r.font.size = Pt(10); r.font.color.rgb = DARK

def icon(name):
    r = cp.add_run(); r.add_picture(ICON + name + '.png', height=IC)

def spacer(): crun('   ')

crun('Lucknow, India')
crun('   |   ')
icon('phone'); crun(' ')
hyperlink(cp, '+91 7905223208', 'tel:+917905223208')
crun('   |   ')
icon('mail'); crun(' ')
hyperlink(cp, 'eshansharma.lko@gmail.com', 'mailto:eshansharma.lko@gmail.com')
crun('   |   ')
icon('linkedin'); crun(' ')
hyperlink(cp, 'linkedin.com/in/eshan-sharma-66a19ba1', 'https://www.linkedin.com/in/eshan-sharma-66a19ba1/')
crun('   |   ')
icon('github'); crun(' ')
hyperlink(cp, 'github.com/Eshan-06', 'https://github.com/Eshan-06')
crun('   |   ')
icon('globe'); crun(' ')
hyperlink(cp, 'eshan-06.github.io', 'https://eshan-06.github.io/')

# ---------- SUMMARY ----------
heading('PROFESSIONAL SUMMARY')
para('DevOps Lead with 9+ years in IT \u2014 4+ years architecting secure, highly available, multi-cloud '
     'infrastructure (AWS, Azure, GCP) and end-to-end CI/CD for SaaS products, preceded by 5 years of application '
     'development and support. Currently leading DevOps & DevSecOps at Estrel.ai for WiiZ, an Agentic AI SaaS '
     'Operating System, as it scales to multi-cloud enterprise deployment. Track record: 40% faster deployments, '
     '99.9% uptime, 120+ vulnerabilities remediated, monolith-to-microservices migrations on Kubernetes.')

# ---------- COMPETENCIES ----------
heading('TECHNICAL SKILLS')
comps = [
    ('Multi-Cloud Architecture:', 'AWS (EC2, EKS, S3, SQS, VPC, IAM, Auto Scaling, SSM), Microsoft Azure, Google Cloud Platform (GKE), On-Prem Kubernetes (k3s), High Availability & Disaster Recovery'),
    ('IaC & Automation:', 'Terraform, Terragrunt, Ansible, Helm, GitOps, Cloud-Agnostic Deployment Patterns'),
    ('CI/CD & Containers:', 'Jenkins, GitLab CI/CD (self-hosted GitLab CE), GitHub Actions (OIDC federation), Docker, Kubernetes (EKS/GKE/k3s), Release Engineering, Rollback & Versioning'),
    ('DevSecOps & Security:', 'SAST/DAST, VAPT, SonarQube, Snyk, Trivy, OWASP ZAP, HashiCorp Vault, Secrets Management, TLS/PKI, IAM Policy Design, CSP Headers, Zero-Trust'),
    ('SRE & Observability:', 'Prometheus, Grafana, ELK Stack, Custom Observability Platforms (FastAPI + MySQL), Allure Reporting, Incident Management & Root-Cause Analysis, 99.9% Uptime'),
    ('Compliance & Cost:', 'SOC 2, ISO 27001, GDPR Readiness, Cloud Cost Optimization, Auto-Scaling & Workload Resource Optimization'),
    ('Data & Platform Services:', 'Milvus Vector DB, PostgreSQL/MySQL, MinIO, Redis, Keycloak SSO, Nginx/Caddy, AWS SQS/S3 Event Patterns, Playwright'),
    ('Languages & Platforms:', 'Bash, Python, PowerShell, SQL/NoSQL, Linux, Windows Server, Agentic AI / ML Platform Engineering'),
]
for k, v in comps:
    p = doc.add_paragraph()
    r1 = p.add_run(k); r1.bold = True; r1.font.size = Pt(10.5); r1.font.color.rgb = DARK
    r2 = p.add_run(' ' + v); r2.font.size = Pt(10.5); r2.font.color.rgb = DARK
    p.paragraph_format.space_after = Pt(2)

# ---------- EXPERIENCE ----------
heading('PROFESSIONAL EXPERIENCE')

job('DevOps Lead', 'Estrel.ai Pvt. Ltd.', 'Nov 2025 \u2013 Present', [
    'DevOps Lead on WiiZ, Estrel AI\u2019s Agentic AI SaaS Operating System \u2014 own CI/CD pipelines, cloud infrastructure, and security controls as the platform scales toward multi-cloud enterprise deployment; operate production web properties (Next.js) and CV fleet-processing pipelines across dev/test/prod.',
    'Built Terragrunt-based IaC for GCP and on-premises Kubernetes (k3s) \u2014 service accounts/IAM roles, versioned remote state, ingress and Nginx routing; deployed HashiCorp Vault, migrating hard-coded API keys to secret-manager lookups.',
    'Own release engineering for the core AI workflow backend (580+ merged PRs): scheduled dev/sandbox/prod builds, rollback/versioning workflows, PR governance; optimized Docker builds (shared base image + pip cache mounts) cutting build times.',
    'Designed and built the platform observability stack (monitor.wiiz.it): FastAPI hub proxy + standalone React dashboard giving multi-env real-time metrics, logs, executions and error summaries via /monitoring/* APIs; per-environment MySQL monitoring DB with daily partitions, 14-day retention and self-healing maintenance; token-authenticated, served behind SSL-terminating Nginx.',
    'Built the test-automation & reporting pipeline: Playwright API suite (credential-free contract/isolation gate + authenticated behaviour/security jobs) running nightly via GitHub Actions; Allure reports published to a private S3 bucket and served on an EC2 report host, synced via AWS SSM through GitHub OIDC + IAM instance roles \u2014 zero stored credentials.',
    'Implemented the Claim-Check Pattern for AWS SQS (payloads >250KB offloaded to S3 with pointer messages), eliminating large-document workflow failures; built driver-manager service for ODBC/RDBMS connectivity with driver pre-warming and env-driven CORS.',
    'Raised reliability & security: eliminated frame-upload read-timeouts (30s\u2192120s), raised SQL execution timeout 55s\u2192300s; hardened with CSP headers, rate limiting, S3 IAM instance-role fallback and pipeline-integrated SAST/DAST/VAPT (SOC 2 / ISO 27001 readiness).',
])

job('DevSecOps Engineer', 'Prismberry Technologies', 'Jun 2024 \u2013 Sep 2025', [
    'Engineered AWS infrastructure for BizUp USA (bizupusa.com) with Terragrunt/Terraform modules: VPC, RDS, ALB, k3s Kubernetes nodes, Route53 DNS and SES email.',
    'Deployed and operated self-hosted platform services: GitLab CE with CI runners, Keycloak SSO, Milvus vector database, MinIO object storage, Caddy reverse proxy, and Firezone VPN.',
    'Architected and deployed a fully automated CI/CD pipeline using Jenkins, reducing average deployment time by 40% and enabling multiple daily production releases.',
    'Led monolith-to-microservices migration on Kubernetes; automated infrastructure provisioning with Terraform, cutting manual configuration time by 30% and eliminating configuration drift.',
    'Integrated SAST, DAST, and VAPT into the development pipeline, identifying and remediating 120+ critical vulnerabilities before production release.',
])

job('Deployment Lead', 'Velocis Systems Pvt. Ltd.', 'Sep 2022 \u2013 Jun 2024', [
    'Engineered and managed highly available AWS infrastructure leveraging EKS, EC2, and Auto Scaling, sustaining 99.9% uptime for mission-critical applications.',
    'Designed and implemented standardized CI/CD pipelines for Kubernetes applications, reducing release-related errors by 25%.',
    'Established Git branching and versioning conventions that improved code quality and streamlined collaboration across a 10+ person development team.',
])

job('Deployment Lead', 'Akal Information Systems Ltd.', 'May 2022 \u2013 Sep 2022', [
    'Administered core AWS services (EC2, IAM, VPC, S3) and Kubernetes clusters; built initial CI/CD pipeline frameworks to automate build and deployment processes for enterprise applications.',
])

job('Developer', 'SISL Infotech', 'Feb 2018 \u2013 Apr 2022', [
    'Developed and maintained Java applications (Tomcat, Nginx, JBoss) on AWS-managed Linux VMs; handled deployments, vulnerability assessments and patching \u2014 early cloud/infrastructure operations exposure.',
])

job('Assistant Programmer', 'Eccentric Infotech', 'Jan 2017 \u2013 Jan 2018', [
    'Provided application support and troubleshooting for e-Office Sparrow and eForms portals (Ministry of Health & Family Welfare).',
])

# ---------- KEY PROJECTS ----------
heading('KEY PROJECTS')
projects = [
    ('DevSecOps Auto-Remediation Demo (Estrel.ai):', '3-stage CI/CD pipeline (build \u2192 migrate \u2192 deploy) to AWS EC2; on failure, error context is sent to WiiZ agents for automated root-cause analysis and fixes.'),
    ('WiiZ Monitoring Hub & Test-Report Hosting:', 'Central multi-env observability (monitor.wiiz.it) + Playwright/Allure test reports served securely via S3 + SSM + OIDC \u2014 full details in experience.'),
]
for k, v in projects:
    p = doc.add_paragraph()
    r1 = p.add_run('\u2022  ' + k + ' '); r1.bold = True; r1.font.size = Pt(10.5); r1.font.color.rgb = DARK
    r2 = p.add_run(v); r2.font.size = Pt(10.5); r2.font.color.rgb = DARK
    p.paragraph_format.space_after = Pt(2)

# ---------- EDUCATION ----------
heading('EDUCATION')
para('Bachelor of Technology in Electronics & Communication Engineering', bold=True, space_after=0)
para('RD Engineering College (UPTU) \u2014 2014', space_after=0)

doc.save('Eshan_Sharma_Resume.docx')
print('saved Eshan_Sharma_Resume.docx')
