'use client'

import { FC } from 'react'

import Link from 'next/link'

import { Button } from '@/ui/index'

import styles from './PostContent.module.scss'

import { PostList } from '@/app/(home)/_components'
import { Post } from '@/types'


interface PostsContentProps {
  posts: Post[]
  page: number
  totalPages: number
}

export const PostsContent: FC<PostsContentProps> = ({ posts, page, totalPages }) => {
  return (
    <div className={styles.postContentWrapper}>
      <h1>Posts</h1>
      <PostList posts={posts} />

      <div className={styles.btnWrapper}>
        <Button color="neon" disabled={page == 1} size="m" type="square">
          <Link href={`/?page=${page - 1}`}>{'<'}</Link>
        </Button>

        <Button color="neon" disabled={page >= totalPages} size="m" type="square">
          <Link href={`/?page=${page + 1}`}>{'>'}</Link>
        </Button>
      </div>
    </div>
  )
}
