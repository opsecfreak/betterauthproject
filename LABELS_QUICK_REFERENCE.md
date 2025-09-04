# Quick Reference: Issue Labels

This document provides a quick reference for the standardized labeling system used in the Better Auth Project.

## 🎯 Priority Quick Reference

| Label | When to Use | Color |
|-------|-------------|-------|
| 🔴 `critical` | Breaks core functionality, security vulnerabilities | Red |
| 🟠 `high` | Important features, significant bugs | Orange |
| 🟡 `medium` | Standard features and improvements | Yellow |
| 🟢 `low` | Nice-to-have features, minor improvements | Green |

## 🏷️ Type Quick Reference

| Label | When to Use | Color |
|-------|-------------|-------|
| 🐛 `bug` | Something isn't working | Red |
| ✨ `enhancement` | New feature or improvement | Light Blue |
| 🔒 `security` | Security-related issues | Dark Red |
| 📚 `documentation` | Documentation changes | Blue |
| 🧹 `maintenance` | Code cleanup, refactoring | Light Yellow |

## 📍 Area Quick Reference

| Label | When to Use | Color |
|-------|-------------|-------|
| 🔐 `authentication` | Login, registration, sessions | Purple |
| 💻 `frontend` | UI components, client-side | Light Green |
| ⚙️ `backend` | Server-side logic, APIs | Purple |
| 🎨 `ui` | Design, styling | Light Pink |
| 🗄️ `database` | Schema, data management | Dark Purple |
| 📧 `email` | Email functionality | Red |

## 🎚️ Difficulty Quick Reference

| Label | When to Use | Color |
|-------|-------------|-------|
| 🟢 `good first issue` | Perfect for newcomers | Purple |
| 🟢 `easy` | Simple, minimal complexity | Green |
| 🟡 `medium` | Moderate complexity | Yellow |
| 🔴 `hard` | Complex, requires experience | Red |

## 📊 Current Issue Mapping

| GitHub Issue | Local File | Recommended Labels |
|--------------|------------|-------------------|
| [#9](https://github.com/opsecfreak/betterauthproject/issues/9) | ISSUE-1-implement-session-management-in-signin-function.md | `security`, `enhancement`, `high`, `authentication`, `backend`, `medium` |
| [#10](https://github.com/opsecfreak/betterauthproject/issues/10) | ISSUE-2-implement-session-retrieval-in-getsession-function.md | `security`, `enhancement`, `high`, `authentication`, `backend`, `medium` |
| [#11](https://github.com/opsecfreak/betterauthproject/issues/11) | ISSUE-3-create-user-registration-page.md | `enhancement`, `medium`, `authentication`, `frontend`, `easy` |
| [#7](https://github.com/opsecfreak/betterauthproject/issues/7) | ISSUE-4-add-email-verification-flow.md | `enhancement`, `medium`, `authentication`, `backend`, `email`, `hard` |
| [#6](https://github.com/opsecfreak/betterauthproject/issues/6) | ISSUE-5-enhance-ui-ux-for-login-and-protected-pages.md | `enhancement`, `low`, `ui`, `frontend`, `easy` |

## 🚀 Quick Commands

```bash
# Show current issues and their labels
npm run labels:show

# Create all standard labels
npm run labels:create

# Apply recommended labels to issues
npm run labels:apply

# Do everything at once
npm run labels:all
```

## 📝 Label Combinations Examples

### High Priority Security Issue
```
security, bug, critical, authentication, backend
```

### Beginner-Friendly Enhancement
```
enhancement, good first issue, easy, frontend, ui
```

### Complex Feature Request
```
enhancement, medium, hard, backend, authentication, email
```

### Documentation Update
```
documentation, low, easy
```

## 🎯 Contribution Guidelines

1. **Always apply at least 3 labels**: Priority, Type, and Area
2. **Include difficulty for enhancement issues**
3. **Use `security` label for any authentication/authorization work**
4. **Mark appropriate issues as `good first issue`**
5. **Keep labels consistent across similar issues**

For detailed guidelines, see [ISSUE_LABELING_GUIDE.md](ISSUE_LABELING_GUIDE.md).