'use client'

import { FC } from 'react'
import { Comment } from '@/types'
import styles from './CommentList.module.scss'

type CommentsProps = {
	comments: Comment[];
};

const CommentList: FC<CommentsProps> = ({ comments }) => {

	return (
		<ul className={ styles.commentListWrapper }>
			{ comments.map((comment) => (
				<li
					key={ comment.id }
					className={ styles.commentCard }
				>
					<p>{ comment.body }</p>
					<small>{ comment.email }</small>
				</li>
			)) }
		</ul>
	)
}


export default CommentList
