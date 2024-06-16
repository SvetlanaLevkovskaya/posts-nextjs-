'use client'

import { FC } from 'react'
import { useStore } from '@nanostores/react'
import { likedStates } from '@/stores/likeStore'
import { FaHeart } from 'react-icons/fa'
import styles from './LikeButton.module.scss'

type LikeButtonProps = {
	commentId: number;
}

const LikeButton: FC<LikeButtonProps> = ({ commentId }) => {
	const likedState = useStore(likedStates)

	const toggleLike = () => {
		likedStates.set({
			...likedState,
			[commentId]: !likedState[commentId],
		})
	}

	const isLiked = likedState[commentId]

	return (
		<FaHeart
			className={ `${ styles.icon } ${ isLiked ? styles.liked : '' }` }
			onClick={ toggleLike }
		/>
	)
}

export default LikeButton
