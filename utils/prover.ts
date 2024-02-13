// @ts-ignore
import { NoirBrowser } from "./../utils/noir/noirBrowser";

// // Add an event listener for the message event
onmessage = async (event) => {
  try {
    console.log(event.data);
    const { input } = event.data;

    function changeValues(a: string) {
      const val = a[0] == "-" ? a.substring(1) : a;
      return val;
    }
    const input_2 = {
      c1: {
        real: {
          sign: input.A[0] == "-",
          value: changeValues(input.A),
        },
        imag: {
          sign: input.B[0] == "-",
          value: changeValues(input.B),
        },
      },
      c2: {
        real: {
          sign: input.C[0] == "-",
          value: changeValues(input.C),
        },
        imag: {
          sign: input.D[0] == "-",
          value: changeValues(input.D),
        },
      },
      out_sub: input.subAns,
      out_mul: input.mulAns,
      out_div: input.divAns,
    };
    console.log(input_2);
    // const input_2 = Object.entries(input).reduce((newObj, [key, value]) => {
    //   //changed format a bit
    //   newObj[key] = (value as number).toString();
    //   return newObj;
    // }, {});

    const noir = new NoirBrowser();
    await noir.compile();
    const proof = await noir.createProof({ input: input_2 });
    console.log(input_2);
    postMessage(proof);
  } catch (err) {
    console.log(err);
    postMessage(err);
  } finally {
    close();
  }
};
