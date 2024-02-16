// import { readdirSync } from "fs";
import * as fs from "node:fs";
import path from "path";

function handler(req: any, res: any) {
  try {
    console.log(process.cwd());
    const files = fs.readdirSync(path.resolve(process.cwd(), "circuits/src"));
    res.status(200).json({ files });
  } catch (error) {
    console.error("Error reading the directory:", error);
    res.status(500).json({ error: "Error reading the directory" });
  }
}
export default handler;
