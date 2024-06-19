import { create } from 'zustand'
import { useNavigate } from 'react-router-dom';

import { login as loginApi } from '@/apis/apiAuth';
import { IUser } from '@/types/user/user';

export interface LoginStore {
    login: (user: IUser) => Promise<void>;
    isLoading: boolean;
}

export const useLoginStore = create<LoginStore>((set) => ({
    login: async ({ email, password }) => {
        const navigate = useNavigate();

        set({ isLoading: true });
        const result = await loginApi({ email, password });
        console.log('result ::::: ', result);
        set({ isLoading: false });
        navigate('/', { replace: true });
    },
    isLoading: false,
}))
