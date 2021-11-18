export enum ValidationErrors {
  MissingProtocolName = "DB Protocol description file is missing the \"protocolName\" property as a string",
  VersionNotSemVer = "DB Protocol description file's \"version\" property must be a SemVer string",
  MissingProtocolDescription = "DB Protocol description file is missing the \"description\" property as a string",
  MissingEntrypoint = "DB Protocol description file is missing \"entrypoint\" property as a string",
  MissingClassName = "DB Protocol description file is missing \"className\" property as a string",
  FunctionDefinitionsNotArray = "Functions Definitions must be an array, if present."
};
