@AGENTS.md

## Deploy Configuration (configured by /setup-deploy)
- Platform: Vercel
- Production URL: https://beckomberga-site.vercel.app
- Deploy workflow: auto-deploy on push to master (GitHub → Vercel integration)
- Project name: beckomberga-site (team: zenex789s-projects)
- Merge method: push to master
- Project type: Next.js web app
- Post-deploy health check: https://beckomberga-site.vercel.app

### Custom deploy hooks
- Pre-merge: none
- Deploy trigger: automatic on push to master
- Deploy status: vercel ls --prod
- Health check: https://beckomberga-site.vercel.app
