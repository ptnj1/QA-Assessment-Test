export const createUserProfilePageTestData = {
  // Error Messages
  errorMessageText: 'Please fill all missing mandatory fields',
  emailErrorMessageText: "Please include an '@' in the email address",
  passwordMismatchErrorMessageText: "Passwords do not match",
  nameAlphaError: "First name and Last name should only contain alphabetical characters",
  phoneError: "Phone number must be numerical and max 10 digits",
  urlError: "Please enter a valid URL",

  // Valid Test Data (Full Profile)
  validUser: {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    password: "Password123!",
    gender: "male",
    dob: "1990-01-01",
    phone: "1234567890",
    address: "123 Main St, Apt 1",
    linkedin: "https://www.linkedin.com/in/johnsmith",
    github: "https://github.com/johnsmith"
  },

  // Invalid Test Data
  invalidName: "John123",
  invalidEmail: "invalid-email",
  invalidPhone: "1234567890111",
  invalidUrl: "not-a-url"
};