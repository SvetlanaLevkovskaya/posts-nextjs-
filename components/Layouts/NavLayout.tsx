'use client'

import { type FC, type PropsWithChildren } from 'react'

import clsx from 'clsx'

import styles from './NavLayout.module.scss'

import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'

interface NavLayoutProps extends PropsWithChildren {
	isAuth: boolean
	disabledPadding?: boolean
	fullHeight?: boolean
}

export const NavLayout: FC<NavLayoutProps> = ({
	isAuth,
	disabledPadding,
	fullHeight,
	children,
}) => {
	return (
		<>
			<div className={clsx(styles.NavLayout, { [styles.fullHeight]: fullHeight })}>
				<div className={styles.mainView}>
					<Header isAuth={isAuth} />
					<main className={clsx(styles.main, { ['py-6']: !disabledPadding })}>{children}</main>
				</div>
				<Footer />
			</div>
			<div id="modal-root" />
		</>
	)
}
