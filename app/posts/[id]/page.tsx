import CommentList from '@/components/CommentList/CommentList'
import { getAuth } from '@/app/providers/getAuth'
import { NavLayout } from '@/components/Layouts/NavLayout'
import { fetchComments, fetchPost, fetchUser } from '@/app/services/clientApi'


export default async function PostPage({ params }: {params: {id: number}}) {
  const { id } = params;
  const post = await fetchPost(id);
  const comments = await fetchComments(id);
  const user = await fetchUser(post.userId);

	const { isAuth } = getAuth()

  return (
		<NavLayout isAuth={isAuth}>
			<div className="flex flex-col gap-6 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48">
				<div className='flex flex-col xl:flex-row xl:justify-between gap-2 xl:gap-10'>
					<h1>{ post.title }</h1>
					<p className='text-gray-4 flex justify-end flex-shrink-0'>Author: { user.username }</p>
				</div>

				<p>{ post.body }</p>

				<CommentList comments={ comments } />
			</div>
		</NavLayout>
	);
}
