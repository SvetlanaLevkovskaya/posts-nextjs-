'use client'

import { FC } from 'react'

import styles from './CommentCard.module.scss'

import { CommentContent } from '@/app/posts/[id]/_components/CommentContent/CommentContent'
import { CommentIcons } from '@/app/posts/[id]/_components/CommentIcons/CommentIcons'
import LikeButton from '@/app/posts/[id]/_components/LikeButton/LikeButton'
import { Comment } from '@/types'


type CommentCardProps = {
  comment: Comment
}

export const CommentCard: FC<CommentCardProps> = ({ comment }) => {
  return (
    <li className={styles.commentCard}>
      <div className={styles.likeButtonWrapper}>
        <LikeButton commentId={comment.id} />
      </div>
      <CommentContent body={comment.body} email={comment.email} />
      <CommentIcons commentId={comment.id} />
    </li>
  )
}
