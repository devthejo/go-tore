import React, {
  createContext,
  useReducer,
} from 'react'

import Board from './Board'

const AppContext = createContext()

const defaultLength = 8
const initialState = {
  length: defaultLength,
  board: new Board(defaultLength),
}

function reducer(state, action){
  switch(action.type){
    case 'PLAY':
      return {
        ...state,
        board: action.payload,
      }
    case 'CHANGE_TRAY_LENGTH':
      const length = action.payload
      console.log(length)
      return {
        ...state,
        length,
        board: new Board(length),
      }
    default:
      return state
  }
  
}

function AppContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  )
}

const AppContextConsumer = AppContext.Consumer

export { AppContext, AppContextProvider, AppContextConsumer }
