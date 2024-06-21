'use client'

import React, { FC } from 'react'

import styles from './CommentCard.module.scss'

import { CommentContent, CommentIcons, LikeButton } from '@/app/posts/[id]/_components'
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
