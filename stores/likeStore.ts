import { atom } from 'nanostores'

type LikedState = Record<number, boolean>

export const likedStates = atom<LikedState>({})

if (typeof window !== 'undefined') {
	const storedState = sessionStorage.getItem('likedStates')
	if (storedState) {
		likedStates.set(JSON.parse(storedState))
	}
}

likedStates.listen((state) => {
	if (typeof window !== 'undefined') {
		sessionStorage.setItem('likedStates', JSON.stringify(state))
	}
})
