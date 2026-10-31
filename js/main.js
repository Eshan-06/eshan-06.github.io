/* ============================================================
   Eshan Sharma — Portfolio JS
   Edit the DATA objects below to update site content.
   ============================================================ */

const GITHUB_USER = 'Eshan-06';

/* ---------------- Skills ---------------- */
const SKILLS = [
  { icon: '☁', title: 'Multi-Cloud Architecture', tags: ['AWS (EC2, EKS, S3, VPC, IAM, Auto Scaling)', 'Microsoft Azure', 'GCP (GKE)', 'HA & Disaster Recovery'] },
  { icon: '⌘', title: 'IaC & Automation', tags: ['Terraform', 'Terragrunt', 'CloudFormation', 'Ansible', 'Helm', 'GitOps', 'Cloud-Agnostic Patterns'] },
  { icon: '⚙', title: 'CI/CD & Containers', tags: ['Jenkins', 'GitLab CI/CD', 'GitHub Actions (OIDC)', 'Playwright', 'Docker', 'Kubernetes (EKS/GKE/k3s)', 'Release Engineering'] },
  { icon: '🛡', title: 'DevSecOps & Security', tags: ['SAST/DAST', 'VAPT', 'SonarQube', 'Snyk', 'Trivy', 'OWASP ZAP', 'HashiCorp Vault', 'Secrets Management', 'TLS/PKI', 'IAM', 'Zero-Trust'] },
  { icon: '📈', title: 'SRE & Observability', tags: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog', 'Custom Observability (FastAPI + MySQL)', 'Allure Reporting', 'Incident Mgmt', '99.9% Uptime'] },
  { icon: '✓', title: 'Compliance & Cost', tags: ['SOC 2', 'ISO 27001', 'GDPR Readiness', 'Cloud Cost Optimization', 'Auto-Scaling'] },
  { icon: '❯', title: 'Languages & Platforms', tags: ['Bash', 'Python', 'PowerShell', 'SQL/NoSQL', 'Linux', 'Windows Server', 'Agentic AI / ML Platforms'] },
];

/* ---------------- Featured Projects ---------------- */
const PROJECTS = [
  { icon: '�', name: 'WiiZ Monitoring Hub', org: 'Estrel.ai · monitor.wiiz.it', link: '',
    desc: 'Central multi-environment observability platform: FastAPI hub proxy + standalone React dashboard with real-time metrics, logs, executions and error summaries; per-env MySQL monitoring DB with daily partitions, 14-day retention and self-healing maintenance; token-authenticated behind SSL-terminating Nginx.',
    tags: ['Observability', 'FastAPI', 'React', 'MySQL', 'Nginx', 'Docker'] },
  { icon: '🧪', name: 'Test-Automation & Report Hosting', org: 'Estrel.ai', link: '',
    desc: 'Playwright API suite (credential-free contract/isolation gate + authenticated behaviour/security jobs) running nightly via GitHub Actions; Allure reports published to private S3 and served on an EC2 host via AWS SSM through GitHub OIDC + IAM roles — zero stored credentials.',
    tags: ['Playwright', 'GitHub Actions', 'Allure', 'OIDC', 'AWS SSM', 'S3'] },
  { icon: '�🛡', name: 'WiiZ Platform DevSecOps', org: 'Estrel.ai', link: '',
    desc: 'End-to-end platform engineering — Terragrunt IaC (GCP + on-prem k3s), Vault secrets management, Docker build optimization, SQS/S3 claim-check pattern, CSP hardening, multi-environment release automation.',
    tags: ['Terragrunt', 'GCP', 'k3s', 'Vault', 'Docker', 'CSP'] },
  { icon: '☁', name: 'BizUp USA Cloud Infrastructure', org: 'Prismberry', link: '',
    desc: 'Production AWS platform — Terragrunt-managed VPC/RDS/ALB/k3s, self-hosted GitLab CE + CI runners, Keycloak SSO, Milvus vector DB, MinIO, Caddy and Firezone VPN.',
    tags: ['AWS', 'Terragrunt', 'GitLab CE', 'Keycloak', 'Milvus', 'MinIO'] },
  { icon: '🤖', name: 'DevSecOps Auto-Remediation Demo', org: 'Estrel.ai', link: '',
    desc: '3-stage CI/CD pipeline (build → migrate → deploy) to AWS EC2 with real test gates; on failure, error context is extracted and sent to WiiZ agents for automated root-cause analysis and fix proposals.',
    tags: ['CI/CD', 'AWS EC2', 'Agentic AI', 'Auto-remediation'] },
  { icon: '🌐', name: 'Personal Portfolio & GitHub Pages', org: 'Open Source', link: 'https://github.com/Eshan-06',
    desc: 'Responsive portfolio site — pure HTML/CSS/JS, live GitHub repo integration, deployed via GitHub Pages.',
    tags: ['HTML/CSS/JS', 'GitHub Pages', 'GitHub API'] },
];

/* ---------------- Experience ---------------- */
const EXPERIENCE = [
  {
    role: 'DevOps Lead', company: 'Estrel.ai Pvt. Ltd.', date: 'Nov 2025 — Present',
    points: [
      'DevOps Lead on WiiZ, Estrel AI\'s Agentic AI SaaS Operating System — own CI/CD pipelines, cloud infrastructure, and security controls as the platform scales toward multi-cloud enterprise deployment.',
      'Built Terragrunt-based IaC for GCP and on-premises Kubernetes (k3s); deployed HashiCorp Vault, migrating hard-coded API keys to secret-manager lookups.',
      'Own release engineering for the core AI workflow backend (580+ merged PRs): scheduled dev/sandbox/prod builds, rollback/versioning workflows, PR governance; optimized Docker builds (shared base image + pip cache mounts).',
      'Designed and built the platform observability stack (monitor.wiiz.it): FastAPI hub proxy + standalone React dashboard with metrics, logs, executions and error summaries across environments; per-env MySQL monitoring DB with daily partitions, 14-day retention and self-healing maintenance; token-authenticated behind SSL-terminating Nginx.',
      'Built the test-automation & reporting pipeline: Playwright API suite (credential-free contract/isolation gate + authenticated behaviour/security jobs) running nightly via GitHub Actions; Allure reports published to private S3 and served on an EC2 report host via AWS SSM through GitHub OIDC + IAM instance roles — zero stored credentials.',
      'Implemented the Claim-Check Pattern for AWS SQS (payloads >250KB offloaded to S3); built driver-manager service for ODBC/RDBMS connectivity with driver pre-warming and env-driven CORS.',
      'Raised reliability & security: eliminated frame-upload read-timeouts (30s→120s), raised SQL execution timeout 55s→300s; CSP headers, rate limiting, S3 IAM instance-role fallback, pipeline-integrated SAST/DAST/VAPT (SOC 2 / ISO 27001 readiness).',
    ],
  },
  {
    role: 'DevSecOps Engineer', company: 'Prismberry Technologies', date: 'Jun 2024 — Sep 2025',
    points: [
      'Engineered AWS infrastructure for BizUp USA (bizupusa.com) with Terragrunt/Terraform modules: VPC, RDS, ALB, k3s Kubernetes nodes, Route53 DNS and SES email.',
      'Deployed and operated self-hosted platform services: GitLab CE with CI runners, Keycloak SSO, Milvus vector database, MinIO object storage, Caddy reverse proxy, and Firezone VPN.',
      'Architected and deployed a fully automated CI/CD pipeline using Jenkins — 40% faster deployments, multiple daily production releases.',
      'Led monolith → containerized microservices migration on Kubernetes, improving resilience and horizontal scalability.',
      'Automated infrastructure provisioning with Terraform — 30% less manual configuration time, zero config drift.',
      'Integrated SAST, DAST and VAPT into the pipeline — identified and remediated 120+ critical vulnerabilities pre-production.',
    ],
  },
  {
    role: 'Deployment Lead', company: 'Velocis Systems Pvt. Ltd.', date: 'Sep 2022 — Jun 2024',
    points: [
      'Engineered and managed highly available AWS infrastructure (EKS, EC2, Auto Scaling) — sustained 99.9% uptime for mission-critical applications.',
      'Designed standardized CI/CD pipelines for Kubernetes applications — 25% fewer release-related errors.',
      'Established Git branching and versioning conventions across a 10+ person development team.',
    ],
  },
  {
    role: 'Deployment Lead', company: 'Akal Information Systems Ltd.', date: 'May 2022 — Sep 2022',
    points: [
      'Administered core AWS services (EC2, IAM, VPC, S3) and Kubernetes clusters; built initial CI/CD pipeline frameworks for enterprise applications.',
    ],
  },
  {
    role: 'Developer', company: 'SISL Infotech', date: 'Feb 2018 — Apr 2022',
    points: [
      'Developed and maintained Java applications (Tomcat, Nginx, JBoss) on AWS-managed Linux VMs; handled deployments, vulnerability assessments and patching — early cloud/infrastructure operations exposure.',
    ],
  },
  {
    role: 'Assistant Programmer', company: 'Eccentric Infotech', date: 'Jan 2017 — Jan 2018',
    points: [
      'Provided application support and troubleshooting for e-Office Sparrow and eForms portals (Ministry of Health & Family Welfare).',
    ],
  },
];

/* ---------------- Typed hero effect ---------------- */
const TYPED_WORDS = [
  'secure multi-cloud infrastructure.',
  'CI/CD pipelines that ship daily.',
  'Kubernetes platforms at scale.',
  'security into every release.',
];

/* ============================================================ */
(() => {
  'use strict';

  /* nav */
  const nav = document.getElementById('nav');
  const navLinks = document.getElementById('navLinks');
  const navToggle = document.getElementById('navToggle');
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 12), { passive: true });
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
  navLinks.addEventListener('click', e => { if (e.target.tagName === 'A') navLinks.classList.remove('open'); });

  /* typed effect */
  const typedEl = document.getElementById('typed');
  let wi = 0, ci = 0, deleting = false;
  (function type() {
    const word = TYPED_WORDS[wi];
    typedEl.textContent = word.slice(0, ci);
    let delay = deleting ? 32 : 62;
    if (!deleting && ci === word.length) { delay = 1900; deleting = true; }
    else if (deleting && ci === 0) { deleting = false; wi = (wi + 1) % TYPED_WORDS.length; delay = 320; }
    else ci += deleting ? -1 : 1;
    setTimeout(type, delay);
  })();

  /* featured projects */
  const fg = document.getElementById('featuredGrid');
  if (fg) fg.innerHTML = PROJECTS.map(p => `
    <div class="skill-card featured-card reveal">
      <h3><span class="sk-icon">${p.icon}</span>${p.name}${p.org ? ` <span class="fp-org">· ${p.org}</span>` : ''}</h3>
      <p class="fp-desc">${p.desc}</p>
      <div class="skill-tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
      ${p.link ? `<a class="fp-link" href="${p.link}" target="_blank" rel="noopener">View on GitHub →</a>` : ''}
    </div>`).join('');

  /* skills */
  const skillsGrid = document.getElementById('skillsGrid');
  skillsGrid.innerHTML = SKILLS.map(s => `
    <div class="skill-card reveal">
      <h3><span class="sk-icon">${s.icon}</span>${s.title}</h3>
      <div class="skill-tags">${s.tags.map(t => `<span>${t}</span>`).join('')}</div>
    </div>`).join('');

  /* experience */
  const tl = document.getElementById('timeline');
  tl.innerHTML = EXPERIENCE.map(e => `
    <div class="tl-item reveal">
      <div class="tl-head">
        <span class="tl-role">${e.role}</span>
        <span class="tl-co">@ ${e.company}</span>
        <span class="tl-date">${e.date}</span>
      </div>
      <ul class="tl-points">${e.points.map(p => `<li>${p}</li>`).join('')}</ul>
    </div>`).join('');

  /* reveal on scroll */
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => en.isIntersecting && en.target.classList.add('visible'));
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal, .section-title').forEach(el => {
    el.classList.add('reveal'); io.observe(el);
  });

  /* GitHub repos */
  const LANG_COLORS = {
    JavaScript:'#f1e05a', TypeScript:'#3178c6', Python:'#3572A5', Shell:'#89e051',
    HCL:'#844FBA', Dockerfile:'#384d54', HTML:'#e34c26', CSS:'#563d7c',
    Go:'#00ADD8', Java:'#b07219', 'C++':'#f34b7d', C:'#555555', YAML:'#cb171e',
  };
  const grid = document.getElementById('reposGrid');
  fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`)
    .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(repos => {
      const shown = repos.filter(r => !r.fork).slice(0, 6);
      if (!shown.length) {
        grid.innerHTML = `<div class="repos-empty">Repositories coming soon — visit <a href="https://github.com/${GITHUB_USER}" target="_blank" rel="noopener">github.com/${GITHUB_USER}</a></div>`;
        return;
      }
      grid.innerHTML = shown.map(r => `
        <a class="repo-card" href="${r.html_url}" target="_blank" rel="noopener">
          <span class="repo-name">⌥ ${r.name}</span>
          <span class="repo-desc">${r.description || 'No description provided.'}</span>
          <span class="repo-meta">
            ${r.language ? `<span class="repo-lang"><span class="lang-dot" style="background:${LANG_COLORS[r.language] || '#8b98b8'}"></span>${r.language}</span>` : ''}
            <span>★ ${r.stargazers_count}</span>
            <span>⑂ ${r.forks_count}</span>
          </span>
        </a>`).join('');
    })
    .catch(() => {
      grid.innerHTML = `<div class="repos-empty">Couldn't load repositories — visit <a href="https://github.com/${GITHUB_USER}" target="_blank" rel="noopener">github.com/${GITHUB_USER}</a></div>`;
    });
})();
