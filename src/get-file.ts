/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line max-lines-per-function
const getFileGetterFunction = (path : string, fileNameAndFormat : string) : () => Promise<unknown> => {
  return async () : Promise<unknown> => {
    const pathLib = await import("path");
    const fileLib = await import("fs");
    const resolvedPath = pathLib.resolve(path, fileNameAndFormat);
    const isJs = fileNameAndFormat.endsWith(".js") || fileNameAndFormat.endsWith(".json");

    if (isJs) {
      const importedData = await import(resolvedPath)
        .catch((err) => {
          throw Error(err + " -- The file is probably not a valid JS or JSON file");
        });
      return importedData;
    }

    return fileLib.promises.readFile(resolvedPath, "utf-8");;
  };
};

export const getDescriptorFileContent = async (path : string) : Promise<string> => {
  const getter = getFileGetterFunction(path, "db-protocol.json");
  const result = await getter();

  return result as string;
};

export const getClassConstructor = async (path : string, fileName : string, mainExport : string) : Promise<unknown> => {
  const usedFileName = fileName.endsWith(".js") ? fileName : `${fileName}.js`;
  const getter = getFileGetterFunction(path, usedFileName);
  const classFile = await getter();

  return classFile[mainExport];
};
