import { transform } from "../src/index";

const arrowFunctionCode = "() => console.log('testing arrrow function')";

test("transform - no transform expected", () => {
  const userAgent =
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36";
  const code = transform(userAgent, arrowFunctionCode);
  expect(code).toBe("() => console.log('testing arrrow function');");
});

test("transform - arrow function transformed", () => {
  const userAgent =
    "Mozilla/5.0 (Windows NT 5.1; rv:31.0) Gecko/20100101 Firefox/31.0";
  const code = transform(userAgent, arrowFunctionCode);
  expect(code).toBe(
    `(function () {
  return console.log('testing arrrow function');
});`
  );
});
