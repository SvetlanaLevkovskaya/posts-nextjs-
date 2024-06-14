import axios from 'axios';
import { Post, User } from '../../../../types/index';
import CommentList from '../../../../components/CommentList/CommentList';


async function fetchPost(id: number): Promise<Post> {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return response.data;
}

async function fetchComments(postId: number): Promise<Comment[]> {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  return response.data;
}

async function fetchUser(userId: number): Promise<User> {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
  return response.data;
}

export default async function PostPage({ params }: {params: any}) {
  const { id } = params;
  const post = await fetchPost(id);
  const comments = await fetchComments(id);
  const user = await fetchUser(post.userId);

  console.log('post', post)
  console.log('comments', comments)
  console.log('user', user)

  return (
    <>
     {/* <NextSeo title={post.title} description={post.body} />*/}
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <p>Author: {user.username}</p>
        {/*<CommentList comments={comments} />*/}
      </div>
    </>
  );
}
