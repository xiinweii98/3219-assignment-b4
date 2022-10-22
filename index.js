const axios = require("axios");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

// function that fetches all CS4k Semester 2 modules in NUSMODs and their corresponding prerequisites.
app.get("/", async (req, res) => {
  // get data
  const url = "https://api.nusmods.com/v2/2022-2023/moduleInfo.json";
  const resp = await axios({
    method: "GET",
    url: url,
  });
  const modules = resp.data;
  const filter = "CS";
  const filtered1 = modules.filter((module) =>
    module.moduleCode.includes(filter)
  );
  const filtered2 = filtered1.map((modules) => {
    wants = {};
    wants["moduleCode"] = modules.moduleCode;
    wants["moduleTitle"] = modules.title;
    wants["description"] = modules.description;
    return wants;
  });

  res.status(200).send(filtered2);
});

app.listen("8000", function () {
  console.log("Running CS3219 Assignment B4 on port " + 8000);
});

exports.filterData = app;
