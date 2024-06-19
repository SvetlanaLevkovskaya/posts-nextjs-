'use client'

import { FC } from 'react'
import { FaHeart } from 'react-icons/fa'

import { useStore } from '@nanostores/react'

import styles from './LikeButton.module.scss'

import { handleHeartClick, likeState } from '@/stores/likeStore'


type LikeButtonProps = {
  commentId: number
}

const LikeButton: FC<LikeButtonProps> = ({ commentId }) => {
  const state = useStore(likeState)

  const isLiked = state.heartLiked[commentId]

  return (
    <FaHeart
      className={`${styles.icon} ${isLiked ? styles.liked : ''}`}
      onClick={() => handleHeartClick(commentId)}
    />
  )
}

export default LikeButton
