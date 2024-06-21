import type { Metadata } from 'next'

import { NavLayout } from '@/components/Layouts/NavLayout'

import { PostDetails } from '@/app/posts/[id]/_components'
import { getAuth } from '@/app/providers/getAuth'
import { fetchComments, fetchPost, fetchUser } from '@/app/services/clientApi'
import { Params } from '@/types'


export async function generateMetadata({ params }: Params): Promise<Metadata> {
  return { title: `Post ${params.id}` }
}

export default async function PostPage({ params }: Params) {
  const { id } = params
  const post = await fetchPost(id)
  const comments = await fetchComments(id)
  const user = await fetchUser(post.userId)

  const { isAuth } = getAuth()

  return (
    <NavLayout isAuth={isAuth}>
      {isAuth && <PostDetails post={post} user={user} comments={comments} />}
    </NavLayout>
  )
}
