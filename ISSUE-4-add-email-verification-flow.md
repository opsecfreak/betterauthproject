---
github_issue: 7
title: "Add E-mail Verification Flow"
labels:
  - enhancement
  - medium
  - authentication
  - backend
  - email
  - hard
priority: medium
type: enhancement
area: authentication
difficulty: hard
---

# Add E-mail Verification Flow

## Description

The `User` model in `prisma/schema.prisma` includes an `emailVerified` field, but there is no implementation for this feature. An e-mail verification flow should be added to ensure that users have verified their e-mail address before they can access certain features.

## Priority: 🟡 Medium
Important for security and user verification, but not blocking core functionality.

## Acceptance Criteria

- [ ] After registration, the user should be sent a verification e-mail
- [ ] The e-mail should contain a unique, secure verification link
- [ ] Upon clicking the link, the `emailVerified` field for the user should be updated in the database
- [ ] Users should not be able to access certain features until their e-mail is verified
- [ ] Verification tokens should have expiration times
- [ ] Users should be able to request new verification e-mails
- [ ] Handle edge cases (expired tokens, already verified users, invalid tokens)

## Technical Requirements

### Email Service Integration
- Choose and integrate email service provider (SendGrid, Nodemailer, etc.)
- Create email templates for verification messages
- Implement secure token generation and validation
- Handle email delivery failures gracefully

### Database Schema
- May require additional fields for verification tokens
- Track verification attempts and timestamps
- Implement token cleanup for expired entries

### Security Considerations
- Generate cryptographically secure verification tokens
- Implement token expiration (recommend 24-48 hours)
- Prevent token reuse and replay attacks
- Rate limiting for verification email requests

## Files to Modify

- `src/lib/auth.ts` - Core verification logic
- `prisma/schema.prisma` - If additional fields are needed
- May require new email service utilities
- New verification page/component

## Files to Create

- `src/app/verify-email/page.tsx` - Email verification page
- `src/lib/email.ts` - Email service utilities
- `src/components/EmailVerificationStatus.tsx` - Status component

## Testing Requirements

- [ ] Unit tests for token generation and validation
- [ ] Integration tests for email sending
- [ ] End-to-end tests for verification flow
- [ ] Security tests for token handling
- [ ] Edge case testing (expired tokens, etc.)

## Dependencies

- Email service provider setup
- Environment configuration for email credentials
- May require additional npm packages

## User Experience Considerations

- Clear messaging about verification requirement
- Easy resend mechanism for verification emails
- Proper error handling and user feedback
- Mobile-friendly verification flow

## Related Issues

- Related to user registration flow (Issue #11)
- May impact protected page access logic

## Labels
`enhancement`, `medium`, `authentication`, `backend`, `email`, `hard`
