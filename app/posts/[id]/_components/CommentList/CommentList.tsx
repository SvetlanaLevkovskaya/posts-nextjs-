'use client'

import { FC, useEffect, useState } from 'react'
import { FaRegThumbsDown, FaRegThumbsUp } from 'react-icons/fa'

import { useStore } from '@nanostores/react'

import styles from './CommentList.module.scss'

import LikeButton from '@/app/posts/[id]/_components/LikeButton/LikeButton'
import { handleDislikeClick, handleLikeClick, likeDislikeState } from '@/stores/likeStore'
import { Comment } from '@/types'

type CommentsProps = {
  comments: Comment[]
}

export const CommentList: FC<CommentsProps> = ({ comments }) => {
  const state = useStore(likeDislikeState)

  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  if (!hydrated) {
    return null
  }

  return (
    <div className={styles.commentSection}>
      <hr className={styles.divider} />
      <h2 className={styles.commentCount}>Comments ({comments.length})</h2>
      <ul className={styles.commentListWrapper}>
        {comments.map((comment) => (
          <li key={comment.id} className={styles.commentCard}>
            <p>{comment.body}</p>
            <small>{comment.email}</small>
            <div className={styles.icons}>
              <div className={styles.iconWrapper} onClick={() => handleLikeClick(comment.id)}>
                <FaRegThumbsUp className={styles.icon} />
                <span className={styles.count}>{state.likes[comment.id] || null}</span>
              </div>
              <div className={styles.iconWrapper} onClick={() => handleDislikeClick(comment.id)}>
                <FaRegThumbsDown className={styles.icon} />
                <span className={styles.count}>{state.dislikes[comment.id] || null}</span>
              </div>
              <LikeButton commentId={comment.id} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
