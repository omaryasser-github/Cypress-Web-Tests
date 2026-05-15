# Test Planning Document

## 📋 Overview
This document outlines all necessary test scenarios and edge cases for the Cypress E2E Testing project. Only relevant and required scenarios are included to ensure comprehensive coverage without unnecessary redundancy.

---

## 🔐 1. LOGIN FUNCTIONALITY

### ✅ Currently Implemented
- Valid credentials login
- Wrong password handling
- Empty fields submission

### ⚠️ Additional Edge Cases Needed

| # | Test Case | Description | Priority |
|---|-----------|-------------|----------|
| 1.1 | Empty Email Field | Submit login with email empty, password filled | Medium |
| 1.2 | Empty Password Field | Submit login with email filled, password empty | Medium |
| 1.3 | Invalid Email Format | Login with malformed email (e.g., "invalidemail" without @) | Medium |
| 1.4 | Email with Leading/Trailing Spaces | Login with email containing spaces at beginning/end | Low |
| 1.5 | Case Sensitivity Check | Verify login behavior with uppercase/lowercase email variations | Low |

**Rationale**: Email and password field-specific validations ensure robust form handling.

---

## 📝 2. REGISTRATION FUNCTIONALITY

### ✅ Currently Implemented
- Valid complete registration
- Duplicate email rejection
- Invalid data (numbers in city) rejection

### ⚠️ Additional Edge Cases Needed

| # | Test Case | Description | Priority |
|---|-----------|-------------|----------|
| 2.1 | Empty Required Fields | Submit registration form with individual required fields empty | High |
| 2.2 | Invalid Phone Format | Register with invalid phone number (letters, special chars, wrong length) | High |
| 2.3 | Invalid Postal Code | Register with non-numeric postal code or incorrect format | Medium |
| 2.4 | Age Validation (DOB) | Register with invalid/future date of birth or underage user | High |
| 2.5 | Special Characters in Name | Register with special characters in first/last name fields | Medium |
| 2.6 | Password Length Validation | Register with password not meeting minimum length requirements | Medium |
| 2.7 | Maximum Name Length | Register with excessively long first/last name values | Low |

**Rationale**: Comprehensive field validation ensures data integrity and prevents invalid user registrations.

---

## 📧 3. CONTACT US FUNCTIONALITY

### ✅ Currently Implemented
- Valid complete form submission
- Missing individual fields (all 6 required fields tested)
- Message length validation (minimum 50 chars, maximum 200 words)

### ⚠️ Additional Edge Cases Needed

| # | Test Case | Description | Priority |
|---|-----------|-------------|----------|
| 3.1 | Invalid Email Format in Contact Form | Submit with malformed email address | Medium |
| 3.2 | Email with Spaces | Submit with email containing leading/trailing spaces | Low |
| 3.3 | Special Characters in Name Fields | Submit with special characters in first/last name | Low |
| 3.4 | Maximum Name Length | Submit with very long first/last name values | Low |
| 3.5 | Boundary Message Length | Test exact 50 character minimum and 200 word maximum limits | Medium |

**Rationale**: Email validation and boundary testing ensure form robustness and data quality.

---

## 🛒 4. SHOPPING CART FUNCTIONALITY

### ✅ Currently Implemented
- Add single product to cart

### ⚠️ Additional Edge Cases Needed

| # | Test Case | Description | Priority |
|---|-----------|-------------|----------|
| 4.1 | Add Multiple Products | Add multiple different products to cart and verify all are present | High |
| 4.2 | Duplicate Product Addition | Add the same product twice and verify quantity increases | High |
| 4.3 | Remove Product from Cart | Add product then remove it and verify cart updates | High |
| 4.4 | Adjust Product Quantity | Modify quantity of product in cart and verify total updates | High |
| 4.5 | Cart Total Calculation | Verify cart total is correctly calculated with multiple products | High |
| 4.6 | Access Empty Cart | Navigate to cart without any products and verify empty state | Medium |
| 4.7 | Out of Stock Product | Verify behavior when attempting to add unavailable item | Medium |
| 4.8 | Cart Persistence | Verify cart contents persist after page reload/navigation | Medium |
| 4.9 | Proceed to Checkout | Verify checkout button leads to payment/order page | High |

**Rationale**: Complete cart workflow testing ensures proper e-commerce functionality and user experience.

---

## 📊 Test Scenarios Summary

### Priority Breakdown

| Priority | Count | Focus Area |
|----------|-------|-----------|
| **High** | 8 | Critical business functionality |
| **Medium** | 10 | Important validations and edge cases |
| **Low** | 5 | Additional robustness checks |
| **Total** | **23** | Additional test cases needed |

### Implementation Status

| Feature | Implemented | Total Needed | Gap |
|---------|-------------|-------------|-----|
| Login | 3 | 8 | 5 |
| Registration | 3 | 10 | 7 |
| Contact Us | 9 | 14 | 5 |
| Shopping Cart | 1 | 10 | 9 |
| **TOTAL** | **16** | **42** | **26** |

---

## 🎯 Implementation Priority Roadmap

### Phase 1: Critical Validations (High Priority)
1. Shopping Cart - Core workflow (add, remove, quantity, checkout)
2. Registration - Required field validation and age checking
3. Login - Empty field specific validations
4. Contact Us - Email format validation

### Phase 2: Data Validation (Medium Priority)
1. Phone/Postal Code format validation (Registration)
2. Password length validation (Registration)
3. Email boundary testing (All forms)
4. Cart persistence and calculations

### Phase 3: Edge Case Handling (Low Priority)
1. Special character handling in name fields
2. Case sensitivity checks
3. Maximum length boundary tests
4. Space trimming validations

---

## 📝 Testing Strategy Notes

### Data Management
- Maintain test data in `cypress/fixtures/example.json` for consistency
- Create fixture variants for different test scenarios (invalid formats, boundary cases)
- Use meaningful data values that reflect real-world usage

### Command Organization
- Extend custom commands in support files for edge case validation
- Create reusable assertion helpers for common validations
- Keep domain-specific logic in respective support files

### Test Execution
- Group related test cases in logical describe blocks
- Use clear, descriptive test names indicating scenario and expected outcome
- Add comments for complex edge case logic

---

## ✅ Quality Assurance Checklist

Before marking a feature's test suite as complete:

- [ ] All required field validations are tested
- [ ] Invalid format handling is verified for each field type
- [ ] Boundary values (min/max lengths) are tested
- [ ] Error messages are validated and displayed to user
- [ ] Success paths show appropriate confirmations
- [ ] Data persistence is verified (where applicable)
- [ ] Navigation flows are correct after form submission
- [ ] Form reset functionality works properly

---

## 📞 Notes for Implementation

1. **Login**: Focus on field-level validation before form submission
2. **Registration**: Implement comprehensive data validation to prevent invalid user records
3. **Contact Us**: Validate message length boundaries precisely (50 char min, 200 word max)
4. **Shopping Cart**: Ensure mathematical accuracy in totals and proper state management

---

*Test Planning Document - Cypress E2E Testing Framework v7th Edition*

---

## 🚀 CI PIPELINE ARCHITECTURE (PLANNING)

### 1. Workflow Objective
Automate the execution of the entire test suite on every **Pull Request** and **Push to Main** to ensure no regressions are introduced.

### 2. Pipeline Stages

#### **Stage A: Static Analysis & Setup (Fast Failure)**
- **Job**: `lint_and_setup`
- **Actions**: 
  - Setup Node.js (v18 or v20).
  - Install dependencies with `npm ci` (using cache for `node_modules`).
  - Run `tsc` (TypeScript compiler) to check for type errors.
  - *Goal*: Catch syntax errors before starting expensive UI tests.

#### **Stage B: Cypress Execution**
- **Job**: `cypress_run`
- **Actions**:
  - Use `cypress-io/github-action`.
  - **Caching**: Cache the Cypress Binary to save ~1-2 minutes per run.
  - **Browsers**: Run in `headless` Chrome.
  - **Artifacts**: Upload `cypress/screenshots` and `cypress/videos` **only on failure**.

#### **Stage C: Reporting**
- **Job**: `generate_report`
- **Actions**:
  - Aggregate JSON results from the Cucumber preprocessor.
  - Generate a `cucumber-report.html`.
  - Upload report as a GitHub artifact or deploy to GitHub Pages.

### 3. Technical Prerequisites
- Add `scripts` to `package.json`:
  - `"cy:run": "cypress run"`
  - `"cy:open": "cypress open"`
- Define environment variables in GitHub Secrets if needed.

