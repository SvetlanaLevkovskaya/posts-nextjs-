import { type FC } from 'react'

import styles from './Header.module.css'
import { Button } from '@/components/ui'
import { logout } from '@/stores/userStore'
import { useRouter } from 'next/navigation'

interface HeaderProps {
	isAuth: boolean
}

export const Header: FC<HeaderProps> = ({ isAuth }) => {

	const router = useRouter()

	const handleLogout = () => {
		logout()
		router.push('/login')
	}

	const handleLogoClick = () => {
		router.push('/')
	}

	return (
		<div className={ styles.wrapper }>
			<div className={ styles.header }>

				<div className={ styles.right }>
					<Button onClick={ handleLogoClick }>LOGO</Button>
					{ isAuth && <Button color="purple" onClick={ handleLogout }>Logout</Button> }

				</div>
			</div>
		</div>
	)
}
