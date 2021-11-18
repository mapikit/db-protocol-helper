/* eslint-disable @typescript-eslint/no-var-requires */
const getFileGetterFunction = (path : string, fileNameAndFormat : string) : () => Promise<unknown> => {
  return async () : Promise<unknown> => {
    const pathLib = await import("path");
    const fileLib = await import("fs");
    const resolvedPath = pathLib.resolve(path, fileNameAndFormat);
    const isJs = fileNameAndFormat.endsWith(".js") || fileNameAndFormat.endsWith(".json");

    const fileResult = isJs ? await import(resolvedPath)
      : await fileLib.promises.readFile(resolvedPath, "utf-8");
    return fileResult;
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
