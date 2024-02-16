// import { readFile } from "node:fs";
import * as fs from "node:fs";
import path from "path";

async function handler(req: any, res: any) {
  const { filename } = req.query;
  console.log(filename);
  try {
    const projectRoot = process.cwd();
    //console.log(projectRoot);
    const filePath = path.join(projectRoot, "circuits/src", filename);
    //console.log(filename);
    const data = fs.readFileSync(filePath, "utf-8");
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: "Error reading file" });
  }
}
export default handler;
