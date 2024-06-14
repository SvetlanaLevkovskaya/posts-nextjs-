import { cookies } from 'next/headers'

export function getAuth() {
	const username = cookies().get('username')?.value

	console.log('username', username)
	const isAuth = !!username

	return { username, isAuth }
}
