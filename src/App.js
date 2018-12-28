import React, { useContext, useState } from 'react'
import classnames from 'classnames'
import ContainerDimensions from 'react-container-dimensions'


import './App.scss'
import css from './App.module.scss'

import { AppContext } from './AppContext'

import Board from './Board'
import AlertView from './AlertView'

import Tray from './Tray'

const defaultDisplayMode = 'opacity'

function App(props) {
  
  const {state, dispatch} = useContext(AppContext)
  
  const [length, setLength] = useState(state.length)
  const [displayMode, setDisplayMode] = useState(defaultDisplayMode)
  
  const {
    board,
  } = state
  
  
  
  function handleChangeLength(e){
    dispatch({
      type: 'CHANGE_TRAY_LENGTH',
      payload: length,
    })
  }
  
  function handlePass(){
    board.pass()
    dispatch({type: 'PLAY', payload: board})
  }
  
 
  return (
    <div className={css.app}>
      
      <div className={css.header}>
        
        <div className="field is-horizontal">
          <div className="field-label is-small">
            <label className="label">Taille du plateau</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <input
                  onChange={(e)=>setLength(e.target.value)} value={length}
                  placeholder="entrez une valeur numérique"
                />
                <input
                  type="button"
                  value="Nouvelle partie"
                  onClick={handleChangeLength}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="field is-horizontal">
          <div className="field-label is-small">
            <label className="label">Actions</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <input type="button" value="Passer" onClick={handlePass} />
              </div>
            </div>
          </div>
        </div>
        
        <div className="field is-horizontal">
          <div className="field-label is-small">
            <label className="label">Joueur</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                {board.current_color === Board.BLACK ? 'noir' : 'blanc'}
              </div>
            </div>
          </div>
        </div>
        
        <div className="field is-horizontal">
          <div className="field-label is-small">
            <label className="label">Affichage</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <select
                  onChange={(e)=>setDisplayMode(e.target.value)}
                  value={displayMode}
                >
                  <option value="opacity">
                    Opacité
                  </option>
                  <option value="gradient">
                    Dégradé radial
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        
        <div className="field is-horizontal">
          <div className="field-label is-small">
            <label className="label">Messages</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <AlertView board={board} />
              </div>
            </div>
          </div>
        </div>
        
      </div>

      
      <div
        className={classnames(css.trayContainer, {
          [css.trayModeOpacity]: displayMode === 'opacity',
          [css.trayModeGradient]: displayMode === 'gradient',
        })}
      >
      
        <ContainerDimensions>
          { ({ height, width }) => (
            <div
              style={{
                height: height+2,
                width: width+2,
              }}
              className={css.trayShadow}
            /> 
          )}
        </ContainerDimensions>
        
        <div className={css.trayGrid}>
          

          <Tray className={css.trayNO} />
          <Tray className={css.trayN} />
          <Tray className={css.trayNE} />

          <Tray className={css.trayO} />
          <Tray className={css.trayM} />
          <Tray className={css.trayE} />
        
          <Tray className={css.traySO} />
          <Tray className={css.trayS} />
          <Tray className={css.traySE} />
          
        </div>
      </div>
      
    </div>    
  )
  
}

export default App
