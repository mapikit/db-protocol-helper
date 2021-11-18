import { error } from "chalk-formatting";
import { ValidationErrors } from "errors";
import { BuiltDbProtocolDefinition } from "types";
import { valid } from "semver";
import { isMetaFunction } from "meta-function-helper/dist/src/is-meta-function";

// eslint-disable-next-line max-lines-per-function
export function isDbProtocol (input : object) : asserts input is BuiltDbProtocolDefinition {
  const dbProtocolLikeConfig = input as BuiltDbProtocolDefinition;

  if (typeof dbProtocolLikeConfig.protocolName !== "string") {
    throw Error(error(ValidationErrors.MissingProtocolName));
  }

  if (valid(dbProtocolLikeConfig.version) === null) {
    throw Error(error(ValidationErrors.VersionNotSemVer));
  }

  if (typeof dbProtocolLikeConfig.description !== "string") {
    throw Error(error(ValidationErrors.MissingProtocolDescription));
  }

  if (typeof dbProtocolLikeConfig.entrypoint !== "string") {
    throw Error(error(ValidationErrors.MissingEntrypoint));
  }

  if (typeof dbProtocolLikeConfig.className !== "string") {
    throw Error(error(ValidationErrors.MissingClassName));
  }

  if (dbProtocolLikeConfig.packageDetails !== undefined) {
    if (!Array.isArray(dbProtocolLikeConfig.packageDetails.functionsDefinitions)) {
      throw Error(error(ValidationErrors.FunctionDefinitionsNotArray));
    }

    dbProtocolLikeConfig.packageDetails.functionsDefinitions.forEach((functionDef) => {
      isMetaFunction(functionDef, true);
    });
  }
};
