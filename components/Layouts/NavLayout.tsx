'use client'

import { type FC, type PropsWithChildren } from 'react'
import clsx from 'clsx'
import { Header } from './components/Header/Header'
import styles from './NavLayout.module.scss'

interface NavLayoutProps extends PropsWithChildren {
	isAuth: boolean
	disabledPadding?: boolean
}

export const NavLayout: FC<NavLayoutProps> = ({
																								isAuth,
																								disabledPadding,
																								children,
																							}) => {
	return (
		<div className={ styles.NavLayout }>
			<div className={ styles.mainView }>
				{ isAuth && <Header isAuth={ isAuth } /> }
				<main className={ clsx(styles.main, { ['p-6']: !disabledPadding }) }>{ children }</main>
			</div>
		</div>
	)
}
