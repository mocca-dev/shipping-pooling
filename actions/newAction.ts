'use server';

import { gql, grafbase } from '@/lib/grafbase';
import Post from '@/models/post';

export type User = {
  _id: string;
  name: string;
  email: string;
  profileImg: string;
};

export type Post = {
  _id: string;
  from: string;
  to: string;
  endDate: string;
  authorID: User;
};

const AddPost = gql`
  mutation AddPost(
    $from: String
    $to: String
    $endDate: String
    $authorID: String
  ) {
    addPost(from: $from, to: $to, endDate: $endDate, authorID: $authorID) {
      _id
      from
      to
      authorID {
        _id
      }
      endDate
    }
  }
`;

export const handleNewSubmit = async (formData: FormData, authorID: string) => {
  const from = formData.get('from');
  const to = formData.get('to');
  const endDate = formData.get('endDate');

  try {
    await grafbase.request(AddPost, {
      from,
      to,
      authorID,
      endDate,
    });
  } catch (error) {
    return error;
  }
};
