import { expect } from "@playwright/test";

export class ReusableFunctions {
  constructor(page) {
    this.page = page;
  }
  async triggerActionAndVerifyDialog(triggerAction, expectedMessage) {
    // 1. Set up the listener first
    const dialogPromise = this.page.waitForEvent('dialog');
    
    // 2. Execute the action (click submit)
    await triggerAction;

    // 3. Wait for the dialog to appear and verify
    const dialog = await dialogPromise;
    expect(dialog.message()).toContain(expectedMessage);
    await dialog.dismiss();
  }
}