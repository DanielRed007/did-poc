export const generateDIDDocument = () => {
  return {
    "@context": [
      "https://www.w3.org/ns/did/v1",
      "https://w3id.org/security/suites/ed25519-2020/v1",
    ],
    id: "did:example:123456789abcdefghi",
    authentication: [
      {
        id: "did:example:123456789abcdefghi#keys-1",
        type: "Ed25519VerificationKey2020",
        controller: "did:example:123456789abcdefghi",
        publicKeyMultibase: "zH3C2AVvLMv6gmMNam3uVAjZpfkcJCwDwnZn6z3wXmqPV",
      },
    ],
  };
};
