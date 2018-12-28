import React from 'react'

export default function AlertView ({board}){
  let text = ""
  if (board.in_atari)
    text = "ATARI !";
  else if (board.attempted_suicide)
    text = "SUICIDE !";
  else if (board.game_over)
    text = "GAME OVER !";
    
  return (
    <div id="alerts">{text}</div>
  )
}
