import { createSlice } from '@reduxjs/toolkit'
import matchService from '../services/matches'
const initialState = []

const matchSlice = createSlice({
  name: 'matches',
  initialState,
  reducers: {
    appendMatch(state, action) {
      state.push(action.payload)
    },
    editNote(state, action) {
      // TODO: add UPDATE functionality to backend
      const { id, note } = action.payload
      const matchToChange = state.find((match) => match.id === id)
      const changedMatch = {
        ...matchToChange,
        note: note,
      }
      return state.map((match) => (match.id !== id ? match : changedMatch))
    },
    setMatches(_state, action) {
      // state = action.payload
      return action.payload
    },
  },
})

export const { appendMatch, editNote, setMatches } = matchSlice.actions

export const initializeMatches = () => {
  return async (dispatch) => {
    const matches = await matchService.getAll()
    dispatch(setMatches(matches))
  }
}

export const createMatch = (content) => {
  return async (dispatch) => {
    const response = await matchService.createNew(content)
    console.log(response)
    dispatch(appendMatch(response))
  }
}

export const updateMatchNote = (match) => {
  return async (dispatch) => {
    const response = await matchService.update(match)
    console.log(response)
    dispatch(editNote(match.id))
  }
}

export default matchSlice.reducer
