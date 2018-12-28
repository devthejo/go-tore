import React, { useContext } from 'react'
// import classnames from 'classnames'

import './App.css'
import css from './App.module.scss'

import { AppContext } from './AppContext'

import AlertView from './AlertView'

import Tray from './Tray'

function App(props) {
  
  const {state, dispatch} = useContext(AppContext)
  
  const {
    length,
    board,
  } = state
  
  function handleChangeLength(e){
    dispatch({
      type: 'CHANGE_TRAY_LENGTH',
      payload: e.target.value
    })
  }
  
  return (
    <div className={css.app}>
      <input onChange={handleChangeLength} value={length} />
      <input type="button" value="Passer" onClick={()=>board.pass()} />
      <AlertView board={board} />

      
      <div className={css.trayContainer}>
        

        <Tray className={css.trayNO} />
        <Tray className={css.trayN} />
        <Tray className={css.trayNE} />

        <Tray className={css.trayO} />
        <Tray className={css.tray} />
        <Tray className={css.trayE} />
      
        <Tray className={css.traySO} />
        <Tray className={css.trayS} />
        <Tray className={css.traySE} />
        
      </div>
      
    </div>    
  )
  
}

export default App
