import { generateRandomIdentifier } from "../did/generate-did";

describe("generateRandomIdentifier", () => {
  it("should generate a string of the specified length", () => {
    const length = 18;
    const id = generateRandomIdentifier(length);
    expect(id).toHaveLength(length);
  });

  it("should generate a string containing only alphanumeric characters", () => {
    const id = generateRandomIdentifier(24);
    expect(id).toMatch(/^[a-z0-9]+$/);
  });
});
