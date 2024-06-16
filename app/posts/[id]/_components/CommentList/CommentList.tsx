'use client'

import { FC, useState } from 'react'
import { FaRegThumbsDown, FaRegThumbsUp } from 'react-icons/fa'
import LikeButton from '@/app/posts/[id]/_components/LikeButton/LikeButton'
import { Comment } from '@/types'
import styles from './CommentList.module.scss'

type CommentsProps = {
	comments: Comment[];
};


export const CommentList: FC<CommentsProps> = ({ comments }) => {

	const [likes, setLikes] = useState<{ [key: number]: number }>({});
	const [dislikes, setDislikes] = useState<{ [key: number]: number }>({});
	const [userLiked, setUserLiked] = useState<{ [key: number]: boolean }>({});
	const [userDisliked, setUserDisliked] = useState<{ [key: number]: boolean }>({});

	const handleLikeClick = (commentId: number) => {
		if (!userLiked[commentId] && !userDisliked[commentId]) {
			setLikes(prevLikes => ({
				...prevLikes,
				[commentId]: (prevLikes[commentId] || 0) + 1
			}));
			setUserLiked(prevUserLiked => ({
				...prevUserLiked,
				[commentId]: true
			}));
		}
	};

	const handleDislikeClick = (commentId: number) => {
		if (!userLiked[commentId] && !userDisliked[commentId]) {
			setDislikes(prevDislikes => ({
				...prevDislikes,
				[commentId]: (prevDislikes[commentId] || 0) + 1
			}));
			setUserDisliked(prevUserDisliked => ({
				...prevUserDisliked,
				[commentId]: true
			}));
		}
	};


	return (
		<div className={ styles.commentSection }>
			<hr className={ styles.divider } />
			<h2 className={ styles.commentCount }>Comments ({ comments.length })</h2>
			<ul className={ styles.commentListWrapper }>
				{ comments.map((comment) => (
					<li key={ comment.id } className={ styles.commentCard }>
						<p>{ comment.body }</p>
						<small>{ comment.email }</small>
						<div className={ styles.icons }>
							<div className={ styles.iconWrapper } onClick={ () => handleLikeClick(comment.id) }>
								<FaRegThumbsUp className={ styles.icon } />
								<span className={ styles.count }>{ likes[comment.id] || '' }</span>
							</div>
							<div className={ styles.iconWrapper } onClick={ () => handleDislikeClick(comment.id) }>
								<FaRegThumbsDown className={ styles.icon } />
								<span className={ styles.count }>{ dislikes[comment.id] || '' }</span>
							</div>
							<LikeButton commentId={ comment.id } />
						</div>
					</li>
				)) }
			</ul>
		</div>
	)
}
