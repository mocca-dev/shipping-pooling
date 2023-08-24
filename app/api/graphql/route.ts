import { connectDB } from '@/lib/mongodb';
import User from '@/models/user';
import { createSchema, createYoga } from 'graphql-yoga';

const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type User {
      _id: ID!
      fullname: String
      email: String
      # at: String
      # profilePic: String
    }

    type Query {
      getUserByEmail(email: String): User
    }
  `,
  resolvers: {
    Query: {
      getUserByEmail: async (_, { email }) => {
        await connectDB();
        return User.findOne({ email });
      },
    },
  },
});

const { handleRequest } = createYoga({
  graphqlEndpoint: '/graphql',
  schema,
  fetchAPI: {
    Request,
    Response,
  },
});

export { handleRequest as GET, handleRequest as POST };
