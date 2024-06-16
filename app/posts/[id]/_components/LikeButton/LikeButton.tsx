'use client'

import { FC } from 'react'
import { useStore } from '@nanostores/react'
import { FaHeart } from 'react-icons/fa'
import { likeDislikeState } from '@/stores/likeStore'
import styles from './LikeButton.module.scss'


type LikeButtonProps = {
	commentId: number;
}

const LikeButton: FC<LikeButtonProps> = ({ commentId }) => {
	const state = useStore(likeDislikeState)

	const isLiked = state.userLiked[commentId]

	return (
		<FaHeart
			className={ `${ styles.icon } ${ isLiked ? styles.liked : '' }` }
		/>
	)
}

export default LikeButton
