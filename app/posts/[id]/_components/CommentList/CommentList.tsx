'use client'

import { FC } from 'react'
import { Comment } from '@/types'
import styles from './CommentList.module.scss'
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa'
import LikeButton from '@/app/posts/[id]/_components/LikeButton/LikeButton'

type CommentsProps = {
	comments: Comment[];
};

export const CommentList: FC<CommentsProps> = ({ comments }) => {

	return (
		<div className={ styles.commentSection }>
			<hr className={ styles.separator } />
			<h2 className={ styles.commentCount }>Comments ({ comments.length })</h2>
			<ul className={ styles.commentListWrapper }>
				{ comments.map((comment) => (
					<li key={ comment.id } className={ styles.commentCard }>
						<p>{ comment.body }</p>
						<small>{ comment.email }</small>
						<div className={ styles.icons }>
							<FaThumbsUp className={ styles.icon } />
							<FaThumbsDown className={ styles.icon } />
							<LikeButton commentId={ comment.id } />
						</div>
					</li>
				)) }
			</ul>
		</div>
	)
}
