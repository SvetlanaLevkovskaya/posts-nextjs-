import { fetchPosts } from '@/app/services/clientApi'
import { NavLayout } from '@/components/Layouts/NavLayout'
import { getAuth } from '@/app/providers/getAuth'
import PostsContent from '@/app/(home)/_components/PostContent/PostContent'



export default async function PostsPage({ searchParams }: { searchParams: { page: string } }) {
	const page = parseInt(searchParams.page) || 1
	const { posts, totalPages } = await fetchPosts(page)

	const { isAuth } = getAuth()

	return (
		<NavLayout isAuth={ isAuth }>
			{ isAuth && (<PostsContent posts={ posts } page={ page } totalPages={ totalPages } />) }
		</NavLayout>
	)
}
