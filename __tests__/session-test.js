"use strict";

import SessionStats from "../session-stats.js";

describe("SessionStats", () => {
  it("Should create a new SessionStats object", () => {
    const stats = new SessionStats(72);
    expect(typeof stats).toBe("object");
  });

  it("SessionStats.reviews should return WK reviews", () => {
    const stats = new SessionStats(72);
    expect(stats?.reviews?.length).toBeGreaterThan(0);
  });
});
