import { fetchPosts } from '@/app/services/clientApi'
import PostList from '@/components/PostList/PostList'
import Link from 'next/link'
import { NavLayout } from '@/components/Layouts/NavLayout'
import { getAuth } from '@/app/providers/getAuth'
import { Button } from '@/components/ui'

export default async function PostsPage({ searchParams }: { searchParams: { page: string } }) {
	const page = parseInt(searchParams.page) || 1
	const { posts, totalPages } = await fetchPosts(page)

	const { isAuth } = getAuth()

	return (
		<NavLayout isAuth={ isAuth }>
			<div className="flex flex-col gap-6 w-full">

				<h1>Posts</h1>
				<PostList posts={ posts } />

				<div className="flex gap-2 justify-end">
					<Button color="neon" disabled={ page <= 1 } size="m" type='square'>
						<Link href={ `/?page=${ page - 1 }` }>{'<'}</Link>
					</Button>

					<Button color="neon" disabled={ page >= totalPages } size="m" type='square'>
						<Link href={ `/?page=${ page + 1 }` }>{'>'}</Link>
					</Button>

				</div>
			</div>
		</NavLayout>
	)
}
