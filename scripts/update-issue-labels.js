#!/usr/bin/env node

/**
 * GitHub Issue Label Management Script
 * 
 * This script creates standardized labels and applies them to issues
 * in the Better Auth Project repository.
 * 
 * Prerequisites:
 * - GitHub CLI (gh) installed and authenticated
 * - Node.js environment
 * 
 * Usage:
 * node update-issue-labels.js [--create-labels] [--apply-labels]
 */

const { execSync } = require('child_process');

// Standard label definitions
const STANDARD_LABELS = [
  // Priority Labels
  { name: 'critical', color: 'd73a4a', description: 'Critical priority - breaks core functionality or security risks' },
  { name: 'high', color: 'f85149', description: 'High priority - important features or significant bugs' },
  { name: 'medium', color: 'fbca04', description: 'Medium priority - standard features and improvements' },
  { name: 'low', color: '0e8a16', description: 'Low priority - nice-to-have features and minor improvements' },
  
  // Type Labels
  { name: 'bug', color: 'd73a4a', description: 'Something isn\'t working as expected' },
  { name: 'enhancement', color: 'a2eeef', description: 'New feature or improvement to existing functionality' },
  { name: 'security', color: 'b60205', description: 'Security-related issues and vulnerabilities' },
  { name: 'documentation', color: '0075ca', description: 'Documentation improvements or additions' },
  { name: 'maintenance', color: 'fef2c0', description: 'Code cleanup, refactoring, or technical debt' },
  
  // Area Labels
  { name: 'authentication', color: '5319e7', description: 'User login, registration, session management' },
  { name: 'frontend', color: 'c2e0c6', description: 'UI components and client-side functionality' },
  { name: 'backend', color: '8b5cf6', description: 'Server-side logic and APIs' },
  { name: 'ui', color: 'f9d0c4', description: 'User interface design and styling' },
  { name: 'database', color: '6f42c1', description: 'Database schema and data management' },
  { name: 'email', color: 'ff6b6b', description: 'Email functionality and notifications' },
  
  // Difficulty Labels
  { name: 'good first issue', color: '7057ff', description: 'Perfect for newcomers to the project' },
  { name: 'easy', color: '0e8a16', description: 'Simple task, minimal complexity' },
  { name: 'hard', color: 'd73a4a', description: 'Complex task requiring significant experience' },
  
  // Status Labels
  { name: 'in-progress', color: 'ffcc00', description: 'Currently being worked on' },
  { name: 'blocked', color: 'e11d21', description: 'Waiting on external dependencies' },
  { name: 'needs-review', color: '006b75', description: 'Ready for code review' },
  { name: 'ready-to-merge', color: '0e8a16', description: 'Approved and ready for merging' }
];

// Issue label mappings
const ISSUE_LABEL_MAPPINGS = {
  9: ['security', 'enhancement', 'high', 'authentication', 'backend', 'medium'],
  10: ['security', 'enhancement', 'high', 'authentication', 'backend', 'medium'],
  11: ['enhancement', 'medium', 'authentication', 'frontend', 'easy'],
  7: ['enhancement', 'medium', 'authentication', 'backend', 'email', 'hard'],
  6: ['enhancement', 'low', 'ui', 'frontend', 'easy']
};

function runCommand(command, ignoreErrors = false) {
  try {
    const result = execSync(command, { encoding: 'utf8', stdio: 'pipe' });
    return { success: true, output: result.trim() };
  } catch (error) {
    if (ignoreErrors) {
      return { success: false, error: error.message };
    }
    throw error;
  }
}

function createLabels() {
  console.log('🏷️  Creating standard labels...\n');
  
  for (const label of STANDARD_LABELS) {
    const command = `gh label create "${label.name}" --color "${label.color}" --description "${label.description}"`;
    const result = runCommand(command, true);
    
    if (result.success) {
      console.log(`✅ Created label: ${label.name}`);
    } else if (result.error.includes('already exists')) {
      console.log(`ℹ️  Label already exists: ${label.name}`);
    } else {
      console.log(`❌ Failed to create label ${label.name}: ${result.error}`);
    }
  }
  
  console.log('\n✅ Label creation complete!\n');
}

function applyLabelsToIssues() {
  console.log('🔖 Applying labels to issues...\n');
  
  for (const [issueNumber, labels] of Object.entries(ISSUE_LABEL_MAPPINGS)) {
    const labelString = labels.join(',');
    const command = `gh issue edit ${issueNumber} --add-label "${labelString}"`;
    const result = runCommand(command, true);
    
    if (result.success) {
      console.log(`✅ Applied labels to issue #${issueNumber}: ${labels.join(', ')}`);
    } else {
      console.log(`❌ Failed to apply labels to issue #${issueNumber}: ${result.error}`);
    }
  }
  
  console.log('\n✅ Label application complete!\n');
}

function displayCurrentIssues() {
  console.log('📋 Current issues and their labels:\n');
  
  const command = 'gh issue list --state all --limit 50 --json number,title,labels';
  const result = runCommand(command);
  
  if (result.success) {
    const issues = JSON.parse(result.output);
    for (const issue of issues) {
      const labelNames = issue.labels.map(label => label.name).join(', ') || 'No labels';
      console.log(`#${issue.number}: ${issue.title}`);
      console.log(`   Labels: ${labelNames}\n`);
    }
  } else {
    console.log('❌ Failed to fetch issues');
  }
}

function showUsage() {
  console.log(`
GitHub Issue Label Management Script

Usage:
  node update-issue-labels.js [options]

Options:
  --create-labels    Create standard labels in the repository
  --apply-labels     Apply recommended labels to existing issues
  --show-issues      Display current issues and their labels
  --all              Create labels and apply them to issues
  --help             Show this help message

Examples:
  node update-issue-labels.js --create-labels
  node update-issue-labels.js --apply-labels
  node update-issue-labels.js --all
`);
}

// Main execution
function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0 || args.includes('--help')) {
    showUsage();
    return;
  }
  
  console.log('🚀 Better Auth Project - Issue Label Management\n');
  
  // Check if GitHub CLI is available
  const ghCheck = runCommand('gh --version', true);
  if (!ghCheck.success) {
    console.log('❌ GitHub CLI (gh) is not installed or not in PATH');
    console.log('Please install GitHub CLI: https://cli.github.com/');
    process.exit(1);
  }
  
  if (args.includes('--show-issues')) {
    displayCurrentIssues();
  }
  
  if (args.includes('--create-labels') || args.includes('--all')) {
    createLabels();
  }
  
  if (args.includes('--apply-labels') || args.includes('--all')) {
    applyLabelsToIssues();
  }
  
  console.log('🎉 Issue labeling process complete!');
  console.log('\nNext steps:');
  console.log('1. Review the applied labels in GitHub');
  console.log('2. Adjust any labels as needed');
  console.log('3. Use the ISSUE_LABELING_GUIDE.md for future reference');
}

if (require.main === module) {
  main();
}

module.exports = {
  STANDARD_LABELS,
  ISSUE_LABEL_MAPPINGS,
  createLabels,
  applyLabelsToIssues,
  displayCurrentIssues
};