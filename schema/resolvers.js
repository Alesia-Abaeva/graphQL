const { UserList, MovieList } = require("../FakeData");
const _ = require("lodash");

const resolvers = {
  Query: {
    users() {
      return UserList;
    },
    user(__, args) {
      const id = args.id;
      const user = _.find(UserList, { id: Number(id) });

      return user;
    },

    movies() {
      return MovieList;
    },

    movie(__, args) {
      const name = args.name;
      const movie = _.find(MovieList, { name });
      return movie;
    },
  },
};

module.exports = { resolvers };
