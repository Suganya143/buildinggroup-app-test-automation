import { Given, When, Then } from '@wdio/cucumber-framework';
import { buildingGroupPage } from "../page-objects/buildinggroup.page";
import { config } from "../wdio.conf";
import * as commonFunctions from "../commons/common.functions";


Given(/^User navigate to application$/, async () => {
  await commonFunctions.deleteCookies();
  await commonFunctions.open(config.baseUrl);
});

When(/^User navigates to building group dialog box$/, async () => {
  await commonFunctions.waitElementToClick({ element: buildingGroupPage.buildinggroupOption });
  await commonFunctions.clickElement(buildingGroupPage.buildinggroupOption);
});

Then(/^User is in building group dailog box$/, async () => {
});

Then(/^User selects "([^"]*)" building from list$/, async (name: string) => {
});

Then(/^User clicks on remove button$/, async () => {
  await commonFunctions.clickElement(buildingGroupPage.removeButton);
});

When(/^User clicks on ok in building group dialog box$/, async () => {
  await commonFunctions.clickElement(buildingGroupPage.okButton);
});

When(/^User navigates back to building group dialog box$/, async () => {
});

When(/^Verify removed building is not displayed in building group list$/, async () => {
});
