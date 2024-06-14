import axios from 'axios'
import { Comment, Post, User } from '@/types'

interface PostsResponse {
	posts: Post[];
	totalPages: number;
}

export async function fetchPosts(page: number): Promise<PostsResponse> {
	const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}`);

	const totalCount = parseInt(response.headers['x-total-count'], 10);
	const totalPages = Math.ceil(totalCount / 10);
	return {
		posts: response.data,
		totalPages,
	};
}

export async function fetchPost(id: number): Promise<Post> {
	const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
	return response.data;
}

export async function fetchComments(postId: number): Promise<Comment[]> {
	const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
	return response.data;
}

export async function fetchUser(userId: number): Promise<User> {
	const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
	return response.data;
}
