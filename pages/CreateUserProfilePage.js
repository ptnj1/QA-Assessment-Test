import { config } from '../config';

export class CreateUserProfilePage {
  constructor(page) {
    this.page = page;
    // Mandatory Selectors
    this.firstNameField = 'input[name="firstName"]';
    this.lastNameField = 'input[name="lastName"]';
    this.emailField = 'input[name="email"]';
    this.passwordField = 'input[name="password"]';
    this.confirmPasswordField = 'input[name="confirmPassword"]';
    this.submitButton = 'input[type="submit"]';

    // Optional Selectors
    this.genderRadio = (value) => `input[value="${value}"]`;
    this.dobField = 'input[name="dob"]';
    this.phoneField = 'input[name="phone"]';
    this.addressField = 'textarea[name="address"], input[name="address"]';
    this.linkedinField = 'input[name="linkedin"]';
    this.githubField = 'input[name="github"]';
  }

  async navigateTo() {
    await this.page.goto(config.baseUrl);
  }

  async fillMandatoryFields(user) {
    await this.page.fill(this.firstNameField, user.firstName);
    await this.page.fill(this.lastNameField, user.lastName);
    await this.page.fill(this.emailField, user.email);
    await this.page.fill(this.passwordField, user.password);
    await this.page.fill(this.confirmPasswordField, user.password);
  }

  async fillOptionalFields(user) {
    if (user.gender) await this.page.check(this.genderRadio(user.gender));
    if (user.dob) await this.page.fill(this.dobField, user.dob);
    if (user.phone) await this.page.fill(this.phoneField, user.phone);
    if (user.address) await this.page.fill(this.addressField, user.address);
    if (user.linkedin) await this.page.fill(this.linkedinField, user.linkedin);
    if (user.github) await this.page.fill(this.githubField, user.github);
  }

  async clickSubmit() {
    await this.page.click(this.submitButton);
  }

  // Helper for negative testing individual fields
  async fillField(selector, value) {
    await this.page.fill(selector, value);
  }
}
