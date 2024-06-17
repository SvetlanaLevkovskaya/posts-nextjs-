'use client'

import { FC } from 'react'

import styles from './PostDetails.module.scss'

import { CommentList } from '@/app/posts/[id]/_components/CommentList/CommentList'
import { Comment, Post, User } from '@/types'

type PostDetailsProps = {
  post: Post
  user: User
  comments: Comment[]
}

export const PostDetails: FC<PostDetailsProps> = ({ post, user, comments }) => {
  return (
    <div className={styles.postDetailsWrapper}>
      <div className={styles.titleWrapper}>
        <h1>{post.title}</h1>
        <p>Author: {user.username}</p>
      </div>
      <p>{post.body}</p>
      <CommentList comments={comments} />
    </div>
  )
}
