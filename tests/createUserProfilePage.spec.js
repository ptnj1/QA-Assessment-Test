import { test } from "@playwright/test";
import { CreateUserProfilePage } from "../pages/CreateUserProfilePage";
import { createUserProfilePageTestData as data } from "../fixtues/createUserProfileTestData";
import { ReusableFunctions } from "../utils/ReusableFunctions";

let userPage;
let utils;

test.describe("User Profile Creation - Functional Validation", () => {
  test.beforeEach(async ({ page }) => {
    userPage = new CreateUserProfilePage(page);
    utils = new ReusableFunctions(page);
    await userPage.navigateTo();
  });

  test("Verify Creation of user profile with mandatory fields only", async () => {
    await userPage.fillMandatoryFields(data.validUser);
    await userPage.clickSubmit();
    // Add assertion for success page/message here
  });

  test("Verify Creation of user profile with all fields (Mandatory + Optional)", async () => {
    await userPage.fillMandatoryFields(data.validUser);
    await userPage.fillOptionalFields(data.validUser);
    await userPage.clickSubmit();
  });

  test("Verify Mandatory Fields Validation", async () => {
    await utils.triggerActionAndVerifyDialog(
      userPage.clickSubmit(),
      data.errorMessageText
    );
  });

  test("Verify Validation for  First Name alphabetical constraint", async () => {
    await userPage.fillMandatoryFields(data.validUser);
    await userPage.fillField(userPage.firstNameField, data.invalidName);
    await utils.triggerActionAndVerifyDialog(
      userPage.clickSubmit(),
      data.nameAlphaError
    );
  });

  test("Verify Validation for Password Mismatch", async () => {
    await userPage.fillMandatoryFields(data.validUser);
    await userPage.fillField(userPage.confirmPasswordField, "WrongPass123");
    await utils.triggerActionAndVerifyDialog(
      userPage.clickSubmit(),
      data.passwordMismatchErrorMessageText
    );
  });

  test("Verify Validation for Phone Number length/type", async () => {
    await userPage.fillMandatoryFields(data.validUser);
    await userPage.fillField(userPage.phoneField, data.invalidPhone);
    await utils.triggerActionAndVerifyDialog(
      userPage.clickSubmit(),
      data.phoneError
    );
  });

});