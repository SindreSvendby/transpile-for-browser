const UaParserJs = require("ua-parser-js");
const babel = require("babel-core");

const userAgentParser = new UaParserJs();

export function transform(userAgent, code) {
  userAgentParser.setUA(userAgent);

  const userAgentInfo = userAgentParser.getResult();
  const { name, version } = userAgentInfo.browser;

  const majorVersion = getMajorVersion(version);
  const browserslistName = name.toLowerCase();

  const browserlistQuery = `${browserslistName} >= ${majorVersion}`;
  const options = getBabelConfig(browserlistQuery);

  const tranformed = babel.transform(code, options);
  return tranformed.code;
}

function getMajorVersion(version) {
  if (version) {
    return version.split(".", 1)[0];
  }
  return "";
}

function getBabelConfig(browserlistQuery) {
  return {
    presets: [
      [
        "env",
        {
          targets: {
            browsers: [browserlistQuery]
          }
        }
      ]
    ]
  };
}

export default transform;
