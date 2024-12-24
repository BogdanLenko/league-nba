import {create} from 'zustand'

interface IRole {
		role: string;
		setRole: (role: string) => void;
}

export const useRole = create<IRole>((set) => ({
		role: 'admin',
		setRole: (role: string) => set(() => ({ role }))
}))
