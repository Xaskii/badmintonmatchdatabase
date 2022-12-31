import { configureStore } from '@reduxjs/toolkit'
import matchReducer from './reducers/matchReducer'

// will add stuff later
const store = configureStore({
  reducer: {
    matches: matchReducer,
  },
})

export default store
