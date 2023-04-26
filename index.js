const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/type-defs");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`API IS RUNNING :  http://localhost:${url}`);
});
