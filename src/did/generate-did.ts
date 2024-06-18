import { generateMultibaseKey } from "./multibase";

export const getContextUrls = (): string[] => {
  return [
    "https://www.w3.org/ns/did/v1",
    "https://w3id.org/security/suites/ed25519-2020/v1",
  ];
};

export const generateRandomIdentifier = (length: number): string => {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export const generateDecentralizedID = (
  method: string,
  identifierLength: number
): string => {
  const prefix = "did";
  const identifier = generateRandomIdentifier(identifierLength);
  return `${prefix}:${method}:${identifier}`;
};

export const generateDIDDocument = () => {
  return {
    "@context": getContextUrls(),
    id: generateDecentralizedID("entertainment", 24),
    authentication: [
      {
        id: generateDecentralizedID("id", 48),
        type: "Ed25519VerificationKey2020",
        controller: generateDecentralizedID("controller", 48),
        publicKeyMultibase: generateMultibaseKey(),
      },
    ],
  };
};
