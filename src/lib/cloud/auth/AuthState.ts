import type {
	OAuthCredential,
	User
} from 'firebase/auth';

import type { AppError } from '../../AppError';

export interface AuthState {
	credential: OAuthCredential,
	user: User,
	error: AppError,
	loading: boolean
}