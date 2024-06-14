import { type FC, useState } from 'react'

import { SignInButton } from '@/components/SignInButton/SignInButton'

import styles from './Header.module.css'

import BurgerMenu from './components/BurgerMenu/BurgerMenu'
import Logo from './components/Logo/Logo'
import Navigation from './components/Navigation/Navigation'

interface HeaderProps {
	isAuth: boolean
}

export const Header: FC<HeaderProps> = ({ isAuth }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<Logo />
				<Navigation />

				<div className={styles.right}>
					{isAuth ? 'isAuth' : <SignInButton />}

					<BurgerMenu />
				</div>
			</div>
		</div>
	)
}
