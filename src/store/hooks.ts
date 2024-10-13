import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { AppDispatch, RootStore } from 'src/store/store'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector
