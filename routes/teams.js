var express = require("express");
var router = express.Router();

/* GET teams listing. */
router.get("/", function(req, res, next) {
  res.json({
    teams: [
      {
        id: 1,
        teamName: "SUPP"
      },
      {
        id: 2,
        teamName: "CSE"
      }
    ]
  });
});

module.exports = router;
