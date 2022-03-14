const module = require("./module");
const inquirer = require("inquirer");

jest.mock("inquirer");

describe("Module test", () => {
  test("user input", async () => {
    expect.assertions(1);
    inquirer.prompt = jest
      .fn()
      .mockResolvedValue({ email: "some@example.com" });

    await expect(module()).resolves.toEqual({ email: "some@example.com" });
  });
});
