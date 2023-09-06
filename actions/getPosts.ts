'use server';

import { PostRquest } from '@/components/List/ListBody/ListBody';
import { gql, grafbase } from '@/lib/grafbase';

const GetPosts = gql`
  query GetPosts {
    getPosts {
      _id
      from
      to
    }
  }
`;

export const getAllPosts = async (): Promise<PostRquest> => {
  return await grafbase.request(GetPosts);
};
