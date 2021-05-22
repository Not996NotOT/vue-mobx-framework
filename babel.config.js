module.exports = {
  presets: ["@vue/app"],
  plugins: [
    [
      "import",
      { libraryName: "Antd", libraryDirectory: "es", style: true },
    ],
  ],
};
