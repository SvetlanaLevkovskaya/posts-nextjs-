'use client'

import { FC } from 'react'
import { FaHeart } from 'react-icons/fa'

import { useStore } from '@nanostores/react'

import styles from './LikeButton.module.scss'

import { likeDislikeState } from '@/stores/likeStore'

type LikeButtonProps = {
	commentId: number
}

const LikeButton: FC<LikeButtonProps> = ({ commentId }) => {
	const state = useStore(likeDislikeState)

	const isLiked = state.userLiked[commentId]

	return <FaHeart className={`${styles.icon} ${isLiked ? styles.liked : ''}`} />
}

export default LikeButton
