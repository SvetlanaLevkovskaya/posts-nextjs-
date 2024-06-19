'use client'

import { FC } from 'react'

import styles from './CommentCard.module.scss'

import { CommentContent } from '@/app/posts/[id]/_components/CommentContent/CommentContent'
import { CommentIcons } from '@/app/posts/[id]/_components/CommentIcons/CommentIcons'
import LikeButton from '@/app/posts/[id]/_components/LikeButton/LikeButton'
import { LikeState } from '@/stores/likeStore'
import { Comment } from '@/types'


type CommentCardProps = {
  comment: Comment
  state: LikeState
}

export const CommentCard: FC<CommentCardProps> = ({ comment, state }) => {
  return (
    <li className={styles.commentCard}>
      <div className={styles.likeButtonWrapper}>
        <LikeButton commentId={comment.id} />
      </div>
      <CommentContent body={comment.body} email={comment.email} />
      <CommentIcons commentId={comment.id} state={state} />
    </li>
  )
}
