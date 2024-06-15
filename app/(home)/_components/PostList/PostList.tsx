import { Post } from '@/types'
import Link from 'next/link'
import { FC } from 'react'
import styles from './PostList.module.scss'


type PostProps = {
	posts: Post[];
};

const PostList: FC<PostProps> = ({ posts }) => (

	<div className={ styles.postListWrapper }>
		{ posts.map((post) => (
			<div key={ post.id } className={ styles.postCard }>

				<Link href={ `/posts/${ post.id }` }>
					<h4>{ post.title }</h4>
					<p>{ post.body.slice(0, 200) }...</p>
				</Link>

			</div>
		)) }
	</div>
)

export default PostList
