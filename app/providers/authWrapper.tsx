'use client';

import { ReactNode, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useStore } from '@nanostores/react';
import Cookies from 'js-cookie';
import { userStore } from '@/stores/userStore';

export default function AuthWrapper({ children }: { children: ReactNode }) {
	const router = useRouter();
	const user = useStore(userStore);

	useEffect(() => {
		const username = Cookies.get('username');
		const password = Cookies.get('password');

		if (username) {
			userStore.set({ username, password });
		} else {
			router.push('/login');
		}
	}, [router]);

	return <>{children}</>;
}
