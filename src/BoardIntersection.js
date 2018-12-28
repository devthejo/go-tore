import React from 'react'

import { GRID_SIZE } from './config'
import Board from './Board'

import imgBlack from './square-black.png'
import imgWhite from './square-white.png'

export default function BoardIntersection (props){
    
    function handleClick(){
      if (props.board.play(props.row, props.col))
        props.onPlay()
    }
    
    const style = {
      top: props.row * GRID_SIZE,
      left: props.col * GRID_SIZE
    }
    let classes = "intersection"
    
    if (props.color !== Board.EMPTY)
      classes += props.color === Board.BLACK ? " black" : " white"
    
    
    return (
      <div
        onClick={handleClick} 
        className={classes}
        style={style}
      >
        {props.color !== Board.EMPTY && (
          <img src={props.color === Board.BLACK ? imgBlack : imgWhite} />
        )}
      </div>
    )
}
