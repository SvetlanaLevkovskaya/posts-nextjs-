import { getAuth } from '@/app/providers/getAuth'
import { NavLayout } from '@/components/Layouts/NavLayout'
import { fetchComments, fetchPost, fetchUser } from '@/app/services/clientApi'
import { PostDetails } from '@/app/posts/[id]/_components/PostDetails/PostDetails'


export default async function PostPage({ params }: { params: { id: number } }) {
	const { id } = params
	const post = await fetchPost(id)
	const comments = await fetchComments(id)
	const user = await fetchUser(post.userId)

	const { isAuth } = getAuth()

	return (

		<NavLayout isAuth={ isAuth }>
			{ isAuth && <PostDetails post={ post } user={ user } comments={ comments } /> }
		</NavLayout>
	)
}
