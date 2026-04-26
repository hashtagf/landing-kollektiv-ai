import fs from "fs";
import path from "path";

const repoRoot = path.resolve(__dirname, "..", "..");
const railwayConfig = JSON.parse(
  fs.readFileSync(path.join(repoRoot, "railway.json"), "utf8"),
);

describe("railway.json", () => {
  it("uses NIXPACKS as the builder", () => {
    expect(railwayConfig.build.builder).toBe("NIXPACKS");
  });

  // Regression guard: when buildCommand runs `npm ci`, Nixpacks's cache mounts
  // on /app/node_modules/.cache make the directory un-unlinkable and `npm ci`
  // fails with EBUSY. The install must happen in Nixpacks's own install layer.
  it("does not run npm ci in buildCommand (EBUSY against /app/node_modules/.cache mount)", () => {
    expect(railwayConfig.build.buildCommand).not.toMatch(/npm\s+ci/);
  });

  it("builds with `npm run build`", () => {
    expect(railwayConfig.build.buildCommand).toBe("npm run build");
  });

  it("starts on the assigned PORT", () => {
    expect(railwayConfig.deploy.startCommand).toBe(
      "npm start -- -p ${PORT:-3000}",
    );
  });

  it("has the /api/health healthcheck wired up", () => {
    expect(railwayConfig.deploy.healthcheckPath).toBe("/api/health");
  });
});
