import { connectDB } from '@/lib/mongodb';
import Post from '@/models/post';
import User from '@/models/user';
import { createSchema, createYoga } from 'graphql-yoga';

const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type User {
      _id: ID!
      name: String
      email: String
      # at: String
      # profilePic: String
    }

    type Post {
      _id: ID!
      from: String
      to: String
      endDate: String
      authorID: String
    }

    # input NewPostInput {
    #   from: String
    #   to: String
    #   endDate: String
    # }

    type Query {
      getUserByEmail(email: String): User
      getPosts: [Post!]!
    }

    type Mutation {
      addPost(from: String, to: String, endDate: String, authorID: String): Post
    }
  `,
  resolvers: {
    Query: {
      getUserByEmail: async (_, { email }) => {
        await connectDB();
        return User.findOne({ email });
      },
      getPosts: async () => {
        await connectDB();
        return Post.find({});
      },
    },
    Mutation: {
      addPost: async (_: any, args: any) => {
        await connectDB();
        const post = new Post({ ...args });
        await post.save();
        return post;
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
