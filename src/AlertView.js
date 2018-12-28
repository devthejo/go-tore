import React, { Component } from 'react'

export default class AlertView extends Component{
    render() {
        var text = "";
        if (this.props.board.in_atari)
            text = "ATARI!";
        else if (this.props.board.attempted_suicide)
            text = "SUICIDE!";

        return (
            <div id="alerts">{text}</div>
        );
    }
}
