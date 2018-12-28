import React, {useContext} from 'react'

import BoardView from './BoardView'

import { AppContext } from './AppContext'

export default function ContainerView (props){
  const { board } = props

  const {dispatch} = useContext(AppContext)
  
  return (
    <div>
      <BoardView board={board} onPlay={()=>dispatch({type: 'PLAY', payload: props.board})} />
    </div>
  )
}
