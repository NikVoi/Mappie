import { signInWithPopup } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { auth, googleProvider } from '@/API/Firebase'
import { login } from '@/Store/Slices/AuthSlice'

const useLogInWithGoogle = () => {
	const dispatch = useDispatch()

	const navigate = useNavigate()

	const handleLogInWithGoogle = async () => {
		try {
			const userCredential = await signInWithPopup(auth, googleProvider)
			const user = userCredential.user
			console.log(
				'Пользователь успешно аутентифицирован с помощью Google:',
				user
			)
			const token = user.refreshToken
			const userEmail = user.email ?? ''
			const photoURL = user.photoURL ?? ''

			// Почему оно не воспренимаеться как string

			dispatch(login({ token, userEmail, photoURL }))
			navigate('/dashboard')
		} catch (error: any) {
			const newLocal = 'Ошибка аутентификации через Google:'
			console.error(newLocal, error)
		}
	}
	return { handleLogInWithGoogle }
}

export default useLogInWithGoogle
