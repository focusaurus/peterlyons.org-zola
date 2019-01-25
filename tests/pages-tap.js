"use strict";
const { testUri } = require("./utils");

testUri("/", {
  match: ["Peter Lyons", "personal", "Bands", "Oberlin", "Creative Commons"],
  selectors: ["body .content", ".content > header", "nav.site", ".license"]
});
testUri("/bands/", { match: ["Gora Gora Orkestar"] });
testUri("/favorites/", { match: ["Imogen"] });
testUri("/oberlin/", { match: ["Denisov"] });
testUri("/persblog/2007/10/hometown-dracula", { match: ["Sighisoara"] });
testUri("/favicon.ico");
testUri("/favicon.png");
testUri("/humans.txt", { match: ["Netlify"] });
testUri("/rss.xml", { match: ["The Stretch of Vitality"] });
