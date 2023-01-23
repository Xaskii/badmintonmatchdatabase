import { configureStore } from '@reduxjs/toolkit'
import matchReducer from './reducers/matchReducer'

// will add stuff later
const store = configureStore({
  reducer: {
    matches: matchReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
