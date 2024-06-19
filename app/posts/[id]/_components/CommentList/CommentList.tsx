'use client'

import { FC, useEffect, useState } from 'react'

import { useStore } from '@nanostores/react'

import styles from './CommentList.module.scss'

import { CommentCard } from '@/app/posts/[id]/_components/CommentCard/CommentCard'
import { likeState } from '@/stores/likeStore'
import { Comment } from '@/types'


type CommentsProps = {
  comments: Comment[]
}

export const CommentList: FC<CommentsProps> = ({ comments }) => {
  const state = useStore(likeState)

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
          <div key={comment.id} className={styles.cardWrapper}>
            <CommentCard comment={comment} state={state} />
          </div>
        ))}
      </ul>
    </div>
  )
}
