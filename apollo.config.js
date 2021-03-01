module.exports = {
  client: {
    service: {
      name: "tinyTODO",
      url: "http://localhost:8080/graphql",
    },
    includes: ["./src/**/*.ts", "./src/**/*.tsx", "./pages/**/*.tsx"],
    clientOnlyDirectives: ["connection", "type"],
    clientSchemaDirectives: ["client"],
  },
};
