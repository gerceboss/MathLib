// @ts-ignore
import { NoirBrowser } from "./../utils/noir/noirBrowser";

// // Add an event listener for the message event
onmessage = async (event) => {
  try {
    const { input } = event.data;
    const hexInputObj = Object.entries(input).reduce((newObj, [key, value]) => {
      //changed format a bit
      newObj[key] = value as number;
      return newObj;
    }, {});

    const noir = new NoirBrowser();
    await noir.compile();
    const proof = await noir.createProof({ input: hexInputObj });
    console.log(hexInputObj);
    postMessage(proof);
  } catch (err) {
    console.log(err);
    postMessage(err);
  } finally {
    close();
  }
};
