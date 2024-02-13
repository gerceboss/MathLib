import { readFile } from "node:fs";
import path from "path";

async function handler(req, res) {
  const { filename } = req.query;
  try {
    const projectRoot = process.cwd();
    const filePath = path.join(projectRoot, "circuits/src", filename);
    const data = await readFile(filePath, "utf-8");
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: "Error reading file" });
  }
}
export default handler;
