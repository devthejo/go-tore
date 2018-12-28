import React, { 
  useContext,
} from 'react'
import classnames from 'classnames'

import { AppContext } from './AppContext'
import ContainerView from './ContainerView'

import css from './App.module.scss'

export default function Tray(props) {
  
  const {
    className,
  } = props
  
  const {state} = useContext(AppContext)
  
  const {
    board,
  } = state
  
  return (
    <div className={classnames(css.tray, className)}>
      <ContainerView board={board} />      
    
    </div>
  )
}
