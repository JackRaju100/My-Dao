import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x84769DF91304e8820906C2aa94cCE730DDf34A03");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Web3.O learners",
        description: "This NFT will give you access to learn web3.O",
        image: readFileSync("scripts/assets/headband.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();