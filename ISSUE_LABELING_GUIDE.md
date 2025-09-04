# Issue Labeling Guide

This document defines the standard labeling system for the Better Auth Project to ensure consistent and meaningful categorization of all issues.

## Label Categories

### 1. Priority Labels
- **🔴 critical** - Issues that break core functionality or pose security risks
- **🟠 high** - Important features or significant bugs that should be addressed soon
- **🟡 medium** - Standard features and improvements
- **🟢 low** - Nice-to-have features and minor improvements

### 2. Type Labels
- **🐛 bug** - Something isn't working as expected
- **✨ enhancement** - New feature or improvement to existing functionality
- **🔒 security** - Security-related issues and vulnerabilities
- **📚 documentation** - Documentation improvements or additions
- **🧹 maintenance** - Code cleanup, refactoring, or technical debt

### 3. Area Labels
- **🔐 authentication** - User login, registration, session management
- **💻 frontend** - UI components and client-side functionality
- **⚙️ backend** - Server-side logic and APIs
- **🎨 ui** - User interface design and styling
- **🗄️ database** - Database schema and data management
- **📧 email** - Email functionality and notifications

### 4. Difficulty Labels
- **🟢 good first issue** - Perfect for newcomers to the project
- **🟢 easy** - Simple task, minimal complexity
- **🟡 medium** - Moderate complexity, some experience required
- **🔴 hard** - Complex task requiring significant experience

### 5. Status Labels
- **🚧 in-progress** - Currently being worked on
- **⏳ blocked** - Waiting on external dependencies
- **👀 needs-review** - Ready for code review
- **✅ ready-to-merge** - Approved and ready for merging

## Current Issue Label Recommendations

### Issue #9: Implement Session Management in signIn function
**Current Labels:** enhancement
**Recommended Labels:**
- 🔒 security
- ✨ enhancement  
- 🔴 high
- 🔐 authentication
- ⚙️ backend
- 🟡 medium

**Justification:** This is a security-critical feature for proper authentication flow.

### Issue #10: Implement Session Retrieval in getSession function
**Current Labels:** enhancement
**Recommended Labels:**
- 🔒 security
- ✨ enhancement
- 🔴 high
- 🔐 authentication
- ⚙️ backend
- 🟡 medium

**Justification:** Essential security feature for session validation.

### Issue #11: Create User Registration Page
**Current Labels:** enhancement
**Recommended Labels:**
- ✨ enhancement
- 🟡 medium
- 🔐 authentication
- 💻 frontend
- 🟢 easy

**Justification:** Standard UI component for user registration.

### Issue #7: Add E-mail Verification Flow
**Current Labels:** enhancement
**Recommended Labels:**
- ✨ enhancement
- 🟡 medium
- 🔐 authentication
- ⚙️ backend
- 📧 email
- 🔴 hard

**Justification:** Complex feature involving email integration and verification logic.

### Issue #6: Enhance UI/UX for Login and Protected Pages
**Current Labels:** enhancement
**Recommended Labels:**
- ✨ enhancement
- 🟢 low
- 🎨 ui
- 💻 frontend
- 🟢 easy

**Justification:** UI improvement with lower priority than core functionality.

### Issue #1: Critical Security Vulnerability (CLOSED)
**Current Labels:** Security Vulnerability, High Priority
**Status:** ✅ Already properly labeled

## Implementation Instructions

To apply these labels to GitHub issues:

1. **For Repository Maintainers:**
   - Go to GitHub repository → Issues → Labels
   - Create the standard labels defined above
   - Apply recommended labels to each issue

2. **Using GitHub CLI:**
   ```bash
   # Create labels
   gh label create "critical" --color "d73a4a" --description "Critical priority issues"
   gh label create "high" --color "f85149" --description "High priority issues"
   # ... (continue for all labels)
   
   # Apply labels to issues
   gh issue edit 9 --add-label "security,enhancement,high,authentication,backend,medium"
   gh issue edit 10 --add-label "security,enhancement,high,authentication,backend,medium"
   # ... (continue for all issues)
   ```

3. **Using GitHub API:**
   - Use the REST API to programmatically update issue labels
   - See the included `update-issue-labels.js` script

## Benefits of Proper Labeling

1. **Improved Issue Triage** - Quick identification of critical issues
2. **Better Project Management** - Clear priority and area categorization
3. **Enhanced Contributor Experience** - Easy discovery of suitable tasks
4. **Automated Workflows** - Enable GitHub Actions based on labels
5. **Better Analytics** - Track progress by category and priority

## Maintenance

- Review and update labels quarterly
- Ensure new issues follow labeling guidelines
- Use label templates for consistent application
- Monitor label usage and adjust as needed