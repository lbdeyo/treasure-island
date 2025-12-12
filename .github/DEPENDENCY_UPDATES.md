# Automated Dependency Updates

This repository is configured with automated dependency updates to ensure security patches and bug fixes are applied promptly.

## 🤖 Dependabot Configuration

### What it does:
- **Weekly Updates**: Checks for dependency updates every Monday at 9 AM EST
- **Security Updates**: Creates PRs immediately when security vulnerabilities are detected
- **Grouped Updates**: Related packages are grouped together to reduce PR noise
- **Auto-assignment**: PRs are automatically assigned to repository maintainers

### Update Groups:
- **Next.js**: All Next.js related packages
- **React**: React and React DOM packages
- **Sanity**: All Sanity CMS related packages
- **Dev Dependencies**: Development tools and type definitions

### Configuration File:
- Location: `.github/dependabot.yml`
- Customizable: Update schedules, groupings, and ignored packages

## 🔄 GitHub Actions Workflows

### 1. CI Workflow (`.github/workflows/ci.yml`)
**Triggers**: Pull requests, pushes to main branch
**Purpose**: Ensures dependency updates don't break the application

**What it does:**
- Runs on multiple Node.js versions (18.x, 20.x)
- Installs dependencies and runs linting
- Builds the application to catch build errors
- Performs security audit checks
- Auto-approves and merges safe Dependabot PRs (patch updates)

### 2. Security Updates Workflow (`.github/workflows/security-updates.yml`)
**Triggers**: Daily schedule, manual trigger, security advisories
**Purpose**: Proactive security monitoring and alerting

**What it does:**
- Daily security audit scans
- Creates GitHub issues for detected vulnerabilities
- Generates outdated packages reports
- Provides actionable remediation steps

## 🚨 Security Update Process

### Immediate Security Updates:
1. **Detection**: Dependabot detects security vulnerability
2. **PR Creation**: Automatic PR created with security fix
3. **CI Testing**: Automated tests run on the PR
4. **Review**: Manual review recommended for security updates
5. **Merge**: Deploy immediately after approval

### Regular Updates:
1. **Weekly Scan**: Every Monday, Dependabot checks for updates
2. **Grouped PRs**: Related packages updated together
3. **Auto-merge**: Patch updates auto-merge if tests pass
4. **Manual Review**: Minor/major updates require manual approval

## 📋 Manual Actions Required

### Initial Setup:
1. **Enable Dependabot**: Go to repository Settings → Security & analysis → Enable Dependabot alerts and security updates
2. **Configure Branch Protection**: Require PR reviews and status checks
3. **Update Usernames**: Replace "bendeyo" in `.github/dependabot.yml` with actual maintainer usernames

### Ongoing Maintenance:
- **Review Security PRs**: Always review security-related updates manually
- **Monitor CI Failures**: Investigate and fix any failing automated tests
- **Update Ignore Lists**: Add packages to ignore list if needed
- **Adjust Schedules**: Modify update frequency based on project needs

## 🛠️ Customization Options

### Dependabot Settings:
```yaml
# Change update frequency
schedule:
  interval: "daily" # or "weekly", "monthly"

# Limit number of open PRs
open-pull-requests-limit: 5

# Ignore specific packages
ignore:
  - dependency-name: "package-name"
    versions: ["1.x"]
```

### GitHub Actions:
- **Node.js Versions**: Modify matrix in CI workflow
- **Auto-merge Rules**: Adjust conditions for automatic merging
- **Security Thresholds**: Change audit levels and vulnerability handling

## 📊 Monitoring and Alerts

### GitHub Notifications:
- **PR Creation**: Automatic notifications for new dependency PRs
- **Security Issues**: Immediate alerts for security vulnerabilities
- **CI Failures**: Notifications when automated tests fail

### Security Tab:
- View all security advisories
- Track vulnerability remediation
- Monitor dependency security status

## 🔧 Troubleshooting

### Common Issues:

**Dependabot PRs not created:**
- Check repository settings for Dependabot enablement
- Verify `.github/dependabot.yml` syntax
- Check for ignored packages or version constraints

**CI failures on dependency updates:**
- Review build logs for breaking changes
- Check for peer dependency conflicts
- Update code to accommodate new package versions

**Auto-merge not working:**
- Verify GitHub Actions permissions
- Check branch protection rules
- Ensure CI workflow passes

### Manual Commands:
```bash
# Check for outdated packages
npm outdated

# Update specific package
npm update package-name

# Security audit
npm audit
npm audit fix

# Install latest versions
npm install package-name@latest
```

## 📞 Support

For issues with automated updates:
1. Check GitHub Actions logs
2. Review Dependabot logs in repository insights
3. Consult GitHub documentation for Dependabot and Actions
4. Create an issue in this repository for project-specific problems

---

*Last updated: December 2024*
