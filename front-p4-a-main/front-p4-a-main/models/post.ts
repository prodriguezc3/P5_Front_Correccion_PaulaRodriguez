import Comment from "./comments.ts";

interface Post {
  _id: string;
  title: string; //Cambiar titulo por title, contenido por content, etc...
  content: string;
  author: string;
  cover: string;
  likes: number;
  createdAt: Date; //Cambiar created_at por createdAt
  updated_at: Date;
  comments: Comment[];
}

export default Post;
