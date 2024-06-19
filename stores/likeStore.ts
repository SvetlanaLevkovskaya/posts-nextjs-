import { atom } from 'nanostores'


type LikeDislikeState = {
  likes: Record<number, number>
  dislikes: Record<number, number>
  userLiked: Record<number, boolean>
  userDisliked: Record<number, boolean>
  heartLiked: Record<number, boolean>
}

export const likeState = atom<LikeDislikeState>({
  likes: {},
  dislikes: {},
  userLiked: {},
  userDisliked: {},
  heartLiked: {},
})

const updateState = (commentId: number, type: 'like' | 'dislike' | 'heart') => {
  const state = likeState.get()
  const newLikes = { ...state.likes }
  const newDislikes = { ...state.dislikes }
  const newUserLiked = { ...state.userLiked }
  const newUserDisliked = { ...state.userDisliked }
  const newHeartLiked = { ...state.heartLiked }

  if (type === 'like') {
    if (state.userLiked[commentId]) {
      newLikes[commentId]--
      delete newUserLiked[commentId]
    } else {
      newLikes[commentId] = (state.likes[commentId] || 0) + 1
      newUserLiked[commentId] = true
      if (state.userDisliked[commentId]) {
        newDislikes[commentId]--
        delete newUserDisliked[commentId]
      }
    }
  } else if (type === 'dislike') {
    if (state.userDisliked[commentId]) {
      newDislikes[commentId]--
      delete newUserDisliked[commentId]
    } else {
      newDislikes[commentId] = (state.dislikes[commentId] || 0) + 1
      newUserDisliked[commentId] = true
      if (state.userLiked[commentId]) {
        newLikes[commentId]--
        delete newUserLiked[commentId]
      }
    }
  } else if (type === 'heart') {
    if (state.heartLiked[commentId]) {
      delete newHeartLiked[commentId]
    } else {
      newHeartLiked[commentId] = true
    }
  }

  likeState.set({
    likes: newLikes,
    dislikes: newDislikes,
    userLiked: newUserLiked,
    userDisliked: newUserDisliked,
    heartLiked: newHeartLiked,
  })
}

export const handleLikeClick = (commentId: number) => {
  updateState(commentId, 'like')
}

export const handleDislikeClick = (commentId: number) => {
  updateState(commentId, 'dislike')
}

export const handleHeartClick = (commentId: number) => {
  updateState(commentId, 'heart')
}

if (typeof window !== 'undefined') {
  const storedState = sessionStorage.getItem('likeState')
  if (storedState) {
    likeState.set(JSON.parse(storedState))
  }
}

likeState.listen((state) => {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('likeState', JSON.stringify(state))
  }
})
