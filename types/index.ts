export interface Post {
	userId: number
	id: number
	title: string
	body: string
}

export interface Comment {
	postId: number
	id: number
	name: string
	email: string
	body: string
}

export interface User {
	id: number
	username: string
}

export type FormData = {
	username: string
	password: string
}

export type Params = {
	params: {
		id: number
	}
}
