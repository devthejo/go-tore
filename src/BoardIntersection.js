import React, { Component } from 'react'

import { GRID_SIZE } from './config'
import Board from './Board'

export default class BoardIntersection extends Component{
    handleClick = ()=>{
      if (this.props.board.play(this.props.row, this.props.col))
        this.props.onPlay()
    }
    render() {
        var style = {
            top: this.props.row * GRID_SIZE,
            left: this.props.col * GRID_SIZE
        };

        var classes = "intersection";
        if (this.props.color !== Board.EMPTY)
            classes += this.props.color === Board.BLACK ? " black" : " white";

        return (
            <div onClick={this.handleClick} 
                 className={classes} style={style}></div>
        );
    }
}
