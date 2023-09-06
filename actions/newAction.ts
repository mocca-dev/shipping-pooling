'use server';

import { gql, grafbase } from '@/lib/grafbase';
import Post from '@/models/post';

type Post = {
  _id: string;
  from: string;
  to: string;
  endDate: string;
  authorID: string;
};

type NewPostRquest = {
  addPost: Post;
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
      authorID
      endDate
    }
  }
`;

export const handleNewSubmit = async (formData: FormData) => {
  const from = formData.get('from');
  const to = formData.get('to');
  const endDate = formData.get('endDate');
  const authorID = '64e4d87d3010a9ddbdb150e9';

  try {
    const { addPost }: NewPostRquest = await grafbase.request(AddPost, {
      from,
      to,
      authorID,
      endDate,
    });
  } catch (error) {
    return error;
  }
};
