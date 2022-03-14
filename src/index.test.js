import test from "ava";
import run, { UP, DOWN, ENTER } from "inquirer-test";

const cliPath = __dirname + "/cli.js";

test("press enter", async (t) => {
  const result = await run([cliPath], [ENTER]);
  console.log("result", result);
  t.regex(result, new RegExp("", "g"));
});

test("press down, press enter", async (t) => {
  const result = await run([cliPath], [DOWN, ENTER]);
  t.regex(result, new RegExp("TEST-2", "g"));
});

test("press up, press enter", async (t) => {
  const result = await run([cliPath], [UP, ENTER]);
  t.regex(result, new RegExp("TEST-3", "g"));
});

test("press press up, press down, press enter", async (t) => {
  const result = await run([cliPath], [UP, DOWN, ENTER]);
  t.regex(result, new RegExp("TEST-1", "g"));
});

test("run with data input", async (t) => {
  const result = await run([cliPath], ["input-1", ENTER, "input-2", ENTER]);
  t.regex(result, new RegExp("username: 'input-1', password: 'input-2'", "g"));
});
