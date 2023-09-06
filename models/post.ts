import { Schema, model, models } from 'mongoose';

const postSchema = new Schema(
  {
    from: {
      type: String,
      required: [true, 'From value is required'],
    },
    to: {
      type: String,
      required: [true, 'To value is required'],
    },
    authorID: {
      type: String,
      required: [true, 'Author ID is required'],
    },
    endDate: {
      type: String,
      required: [true, 'EndDate is required'],
    },
  },
  { timestamps: true }
);

const Post = models.Post || model('Post', postSchema);

export default Post;
