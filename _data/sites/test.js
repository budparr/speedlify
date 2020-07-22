module.exports = {
  name: "test", // optional, falls back to object key
  description: "Test Sites",
  options: {
    frequency: 60 * 23, // 24 hours
    // Use "run" if the sites don’t share assets on the same origin
    //           and we can reset chrome with each run instead of
    //           each site in every run (it’s faster)
    // Use "site" if sites are all on the same origin and share assets.
    freshChrome: "run",
  },
  urls: ["https://www.11ty.dev/", "https://www.11ty.dev/docs/getting-started"],
};
