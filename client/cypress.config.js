const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // This is where you can implement node event listeners
      on("before:browser:launch", (browser = {}, launchOptions) => {
        // Customize browser launch options if needed
        return launchOptions;
      });

      on("task", {
        // You can create custom tasks for specific needs
        log(message) {
          console.log(message);
          return null;
        },
      });
    },
    baseUrl: "http://localhost:3000", // Set the base URL for your tests
   // Optional: set default viewport width
    // You can add more settings here as needed
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
