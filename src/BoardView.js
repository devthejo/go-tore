import React, { useContext } from 'react'

import { GRID_SIZE } from './config'
import BoardIntersection from './BoardIntersection'

import { AppContext } from './AppContext'

export default function BoardView (props) {
    const {state} = useContext(AppContext)
  
    const {board} = state
    
    const intersections = []
    for (let i = 0; i < board.size; i++){
      for (let j = 0; j < board.size; j++){
        const key = `${i} ${j}`
        intersections.push((
          <BoardIntersection key={key} {...{
            board: board,
            color: board.board[i][j],
            row: i,
            col: j,
            onPlay: props.onPlay
          }} />
        ))
      }
    }
    const style = {
      width: board.size * GRID_SIZE,
      height: board.size * GRID_SIZE
    }
    return <div style={style} id="board">{intersections}</div>
}
