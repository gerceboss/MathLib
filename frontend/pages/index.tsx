import { useRouter } from "next/router";
import { Noir } from "@noir-lang/noir_js";
import {
  BarretenbergBackend,
  flattenPublicInputs,
} from "@noir-lang/backend_barretenberg";
import { CompiledCircuit, ProofData } from "@noir-lang/types";
import { compile, PathToFileSourceMap } from "@noir-lang/noir_wasm";
async function getCircuit(name: string) {
  const res = await fetch(
    new URL("./../../circuits/src/main.nr", import.meta.url)
  );
  const noirSource = await res.text();

  const sourceMap = new PathToFileSourceMap();
  sourceMap.add_source_code("main.nr", noirSource);
  const compiled = compile("main.nr", undefined, undefined, sourceMap);
  return compiled;
}
function Index() {
  const router = useRouter();
  return (
    <>
      <button onClick={() => router.push("/complex")}>Hello</button>
    </>
  );
}

export default Index;
