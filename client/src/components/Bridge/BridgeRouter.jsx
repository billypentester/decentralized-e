import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Bridge from './Bridge'
import UseBridge from './UseBridge'
import BridgeLiquidity from './BridgeLiquidity'
import BridgePositions from './BridgePositions'
function PoolRouter() {
  return (
    <>
        <Routes>
          <Route path="/" element={ <Bridge /> } />
          <Route path="/use" element={ <UseBridge /> } />
          <Route path="/liquidity" element={ <BridgeLiquidity /> } />
          <Route path="/positions" element={ <BridgePositions /> } />
        </Routes>
    </>
  )
}

export default PoolRouter