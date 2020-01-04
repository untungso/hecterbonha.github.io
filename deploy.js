var ghpages = require("gh-pages");

var callback = function() {
  console.log("Deployed motherfucker!");
};

ghpages.publish(
  "out",
  {
    branch: "master",
    repo: "https://github.com/hecterbonha/hecterbonha.github.io.git",
  },
  callback
);
