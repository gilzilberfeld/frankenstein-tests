import { expect, request } from "@playwright/test";
import { API_GET_ALL } from "./consts";

export async function lastSavedEntryShouldInclude(info: any, promotions: boolean) {
  const apiRequestContext = await request.newContext();
  const response = await apiRequestContext.get(API_GET_ALL);
  const json = await response.json();

  const expectedEntry = { info, promotions };
  expect(json.registrants[json.registrants.length - 1]).toStrictEqual(expectedEntry);
}
