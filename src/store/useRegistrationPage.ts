import {create} from 'zustand'

interface IRegistrationPage {
	isMember: boolean,
	setIsMember: (isMember: boolean) => void
}

export const useRegistrationPage = create<IRegistrationPage>((set) => ({
	isMember: false,
	setIsMember: (isMember: boolean) => set(() => ({isMember}))
}))