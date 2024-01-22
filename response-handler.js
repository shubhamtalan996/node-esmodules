import fs from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export const responseHandler = (req, res, next) => {
  //   fs.readFile("my-page.html", "utf8", (err, data) => {
  //     res.send(data);
  //   });
  res.sendFile(path.join(__dirname, "my-page.html"));
};

// module.exports = responseHandler;
