import { create } from 'zustand'

const useSpinStore = create((set) => ({
    spin: false,
    isSpinning: () => set({ spin: true }),
    resetSpin: () => set({ spin: false })
}))

export default useSpinStore