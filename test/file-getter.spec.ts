import { getClassConstructor, getDescriptorFileContent } from "../src/get-file";
import { expect } from "chai";

describe("File Getters", () => {
  // Relative to the execution location, NOT TO THIS FILE
  const testFilesLocation = "./test/test-files";

  it("Json Configuration Getter - gets file content properly", async () => {
    const result = await getDescriptorFileContent(testFilesLocation);
    const fileContent = await import("./test-files/db-protocol.json");

    expect(result).to.be.deep.eq(fileContent);
  });

  it("Class Getter - Gets the correct class (js format specified)", async () => {
    const validationParam = "n19oenvzc9vc0ui4n5109b8n1";
    const newable = await getClassConstructor(
      testFilesLocation, "example-class.js", "MainClass") as new (...args) => unknown;

    const creation = (param : string) : void => { new newable(param); };

    expect(creation.bind({}, validationParam)).to.not.throw();
    expect(creation.bind({}, "")).to.throw();
  });
});
