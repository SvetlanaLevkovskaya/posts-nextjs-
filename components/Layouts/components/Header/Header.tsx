import { type FC } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui'
import { logout } from '@/stores/userStore'
import styles from './Header.module.css'
import { customToastSuccess } from '@/ui/CustomToast/CustomToast'

interface HeaderProps {
	isAuth: boolean
}

export const Header: FC<HeaderProps> = ({ isAuth }) => {

	const router = useRouter()

	const handleLogout = () => {
		logout()
		router.push('/login')
		customToastSuccess('You are logged out')
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
