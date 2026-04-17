# Cypress E2E Testing Framework

A comprehensive **End-to-End (E2E) Testing Framework** built with **Cypress 15.14.0** for automated testing of web application features. This project ensures robust validation of critical user workflows including authentication, registration, contact forms, and e-commerce functionality.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Running Tests](#running-tests)
- [Test Coverage](#test-coverage)
- [Architecture & Best Practices](#architecture--best-practices)
- [Fixtures & Test Data](#fixtures--test-data)
- [Custom Commands](#custom-commands)
- [Contributing](#contributing)

---

## 🎯 Overview

This testing framework provides automated validation of core web application features through a modular, maintainable architecture. Each test suite is organized with feature-specific support files, custom commands, and centralized test data management.

**Key Technologies:**
- Cypress 15.14.0
- JavaScript (ES6+)
- Node.js

---

## 📁 Project Structure

```
SW-Testing-Cypress/
├── cypress.config.js                # Cypress configuration
├── package.json                      # Project dependencies
├── .gitignore                        # Git ignore file
├── TestPlanning.md                   # Test planning & edge cases documentation
├── WORKFLOW.md                       # Detailed workflow documentation
├── README.md                         # This file
│
└── cypress/
    ├── e2e/                          # End-to-end test specifications
    │   ├── login.cy.js               # Authentication tests
    │   ├── registration.cy.js        # User registration tests
    │   ├── contactUs.cy.js           # Contact form validation tests
    │   ├── addToCart.cy.js           # Shopping cart functionality tests
    │   └── spec.cy.js                # Sample/general test specifications
    │
    ├── fixtures/                     # Test data & configuration
    │   └── example.json              # Centralized test data & URLs
    │
    └── support/                      # Helper functions & custom commands
        ├── commands.js               # Cypress custom commands
        ├── e2e.js                    # E2E support configuration
        ├── loginSupport.js           # Login test helper functions
        ├── registrationSupport.js    # Registration test helpers
        ├── contactUsSupport.js       # Contact form test helpers
        └── addToCartSupport.js       # Shopping cart test helpers
```

---

## ✨ Features

### 🔐 Authentication Testing
- Valid/invalid login credentials validation
- Empty field handling and error messages
- Password verification
- Fixture-based test data management

### 📝 User Registration Testing
- Complete registration workflow validation
- Form field validation (email, phone, postal code, DOB)
- Duplicate email rejection
- Invalid data detection

### 📧 Contact Form Testing
- Multi-field form submission validation
- Required field enforcement
- Email format validation
- Message length constraints (50 char minimum, 200 word maximum)
- Dropdown/Select element testing

### 🛒 Shopping Cart Testing
- Product addition to cart
- Cart interaction and updates
- E-commerce workflow validation
- Cart state management

### 🏗️ Modular Architecture
- **Reusable Custom Commands**: Standardized element selectors (`.email()`, `.password()`, `.firstName()`, etc.)
- **Feature-Specific Support Files**: Organized helper functions per feature
- **DRY Principle**: Eliminates code duplication across tests
- **Centralized Test Data**: Single source of truth in `fixtures/example.json`

---

## 🔧 Prerequisites

Before running the project, ensure you have:

- **Node.js** (v14.0.0 or higher)
- **npm** (v6.0.0 or higher)
- **Git** (for version control)

---

## 📥 Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd SW-Testing-Cypress
```

### 2. Install Dependencies
```bash
npm install
```

This will install Cypress 15.14.0 and all required dependencies specified in `package.json`.

### 3. Verify Installation
```bash
npx cypress --version
```

---

## ▶️ Running Tests

### Open Cypress Test Runner
```bash
npm run cypress:open
# or
npx cypress open
```

### Run All Tests in Headless Mode
```bash
npx cypress run
```

### Run Specific Test File
```bash
npx cypress run --spec "cypress/e2e/login.cy.js"
```

### Run Tests with Specific Browser
```bash
npx cypress run --browser chrome
npx cypress run --browser firefox
```

### Generate Test Report
```bash
npx cypress run --reporter json
```

---

## 📊 Test Coverage

| Feature | Test File | Status | Coverage |
|---------|-----------|--------|----------|
| **Login** | `login.cy.js` | ✅ Active | Valid credentials, invalid passwords, empty fields |
| **Registration** | `registration.cy.js` | ✅ Active | Form validation, duplicate detection, data integrity |
| **Contact Form** | `contactUs.cy.js` | ✅ Active | All required fields, message validation, submissions |
| **Shopping Cart** | `addToCart.cy.js` | ✅ Active | Product additions, cart interactions |

For detailed test planning and edge cases, refer to [TestPlanning.md](TestPlanning.md).

---

## 🏛️ Architecture & Best Practices

### Test File Pattern
All test files follow a standardized structure:
```javascript
describe("Feature Name", () => {
    before(function () {
        cy.fixture("example").then(function (data) {
            globalThis.data = data
        })
    })

    beforeEach(function () {
        cy.visit(data.urlKey)
        cy.title().should('eq', data.expectedTitle)
    })

    it("Test Case Description", function () {
        // Test implementation
    })
})
```

### Key Principles
- **Fixture-Based Testing**: Centralized test data in `example.json`
- **Custom Commands**: Encapsulate common operations for reusability
- **Before Hooks**: Establish consistent test state before each test
- **Feature Isolation**: Each feature has dedicated test and support files
- **Assertion Clarity**: Clear, descriptive assertions for maintainability

---

## 📦 Fixtures & Test Data

### example.json Structure
Test data is centralized in `cypress/fixtures/example.json` and includes:
- **URLs**: Application endpoints for each feature
- **Expected Titles**: Page title assertions
- **User Data**: Valid/invalid credentials for testing
- **Form Data**: Sample inputs for registration and contact forms

Example usage in tests:
```javascript
cy.visit(data.urlKey)
cy.email().type(data.emailValid)
cy.password().type(data.passwordCorrect)
```

---

## ⚙️ Custom Commands

Custom commands extend Cypress functionality for common operations:

### Available Commands
- `cy.email()` - Select email input field
- `cy.password()` - Select password input field
- `cy.firstName()` - Select first name input field
- `cy.lastName()` - Select last name input field
- `cy.phone()` - Select phone number input field
- `cy.submitButton()` - Select form submit button

### Usage Example
```javascript
cy.email().type("test@example.com")
cy.password().type("securePassword123")
cy.submitButton().click()
```

Commands are defined in:
- `cypress/support/commands.js` (global commands)
- Feature-specific support files for specialized operations

---

## 🤝 Contributing

### Guidelines for Contributors
1. Follow the existing test file structure and naming conventions
2. Use custom commands for element selection to maintain DRY principles
3. Add test data to `fixtures/example.json` instead of hardcoding
4. Write descriptive test case names that clearly indicate what is being tested
5. Create feature-specific support files for helper functions
6. Update [TestPlanning.md](TestPlanning.md) when adding new test scenarios
7. Ensure all tests pass before submitting changes

### Adding New Tests
1. Create new test file in `cypress/e2e/` with naming pattern: `featureName.cy.js`
2. Create corresponding support file: `cypress/support/featureNameSupport.js`
3. Add fixture data to `cypress/fixtures/example.json`
4. Document test cases in [TestPlanning.md](TestPlanning.md)

---

## 📚 Additional Resources

- [Cypress Official Documentation](https://docs.cypress.io)
- [TestPlanning.md](TestPlanning.md) - Detailed test scenarios and edge cases
- [WORKFLOW.md](WORKFLOW.md) - Technical implementation details

---

## 📄 License

This project is part of the SW-Testing initiative. All rights reserved.

---

**Last Updated**: April 2026  
**Cypress Version**: 15.14.0  
**Status**: ✅ Active Development
