import { isDbProtocol } from "is-db-protocol";
import { buildFullPackageDescription } from "meta-function-helper/dist/src/build-full-package-description";

/**
 * Validates the DB protocol configuration - Throws if failed.
 * The `config` param can be a protocol with pathes to the functions
 * @param config The object to be validated
 */
export const validateDbProtocolConfiguration = async (config : object) : Promise<void> => {
  const protocolConfig = config as Record<string, unknown>;

  if (protocolConfig.packageDetails !== undefined) {
    await buildFullPackageDescription(protocolConfig.packageDetails);
  }
};
