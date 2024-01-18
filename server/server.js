const express = require("express");
const app = express();
const data = {
  altitude: 0,
  his: 0,
  ADI: 0,
};

const inputData = () => {
  const input = require("prompt-sync")({ sigint: true }); //sigint in order to let the user exit with Cntl + c
  data.altitude = Number(input("altitude : "));
  data.his = Number(input("HIS : "));
  data.ADI = Number(input("ADI : "));
  if (!dataGood()) {
    console.log("not good values try again");
    inputData();
  }
};

const dataGood = () => {
  if (isNaN(data.altitude) || isNaN(data.his) || isNaN(data.ADI)) return false;
  if (data.altitude < 0 || data.altitude > 3000) return false;
  if (data.his < 0 || data.his > 360) return false;
  if (data.ADI == 100 || data.ADI == 0 || data.ADI == -100) return true;
  return false;
};

inputData();

app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );
  res.status(200).json(data);
});

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
