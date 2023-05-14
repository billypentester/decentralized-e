import React, {useState, useContext} from 'react'
import { BridgeContext } from "../../contexts/BridgeContext";
import { Token1Context } from '../../contexts/Token1Context';
import {

  mumBridgeAddress,

} from "../../utils/contants";




function BridgeLiquidity() {
  const {
    
    BridgeLiquidityy,
    APPROVEtoken,
    
    
  } = useContext(BridgeContext);
  const {
    connectWallet,
    walletAddress,
    
    
    
  } = useContext(Token1Context);
  const [position, setPosition] = useState({ x: 25});
  const [isDragging, setIsDragging] = useState(false);
  const [tokenValue,setTokenValue]=useState()
  const [tokenName,setTokenName]=useState()
  const [chainId,setchainId]=useState()
  
  

  const handleMouseDown = (event) => {
    setIsDragging(true);
  };

  const handleMouseMove = (event) => {
    if (isDragging && event.target.tagName === 'circle') {
      if(position.x + event.movementX < 25){
        setPosition({ x: 25 });
      }
      else if(position.x + event.movementX > 475){
        setPosition({ x: 475 });
      }
      else{
        const tranformX = `translateX(${position.x + event.movementX}px)`
        event.target.style.transform = tranformX;
        setPosition({ x: position.x + event.movementX });
      }
    }
  };

  const handleMouseUp = (event) => {
    setIsDragging(false);
  };

  const handleMouseLeave = (event) => {
    setIsDragging(false);
  };


  return (
    <div class="container" style={{ marginTop:'7rem' }}>
      <div className="bg-secondary d-flex justify-content-center align-items-center py-5">

        <div class="card shadow-lg col-md-6 col-lg-10 rounded-3 border border-end-0 border-start-0 border-top-0 border-3">
          <h5 class="card-header h4 text-center">Add Liquidity to Bridge</h5>
          <div class="card-body">

            <div className="row">

              <div className="row justify-content-center">

                <div className="row flex-column col-6">
                
                  <div className='row'>
                    <div className="col-6">
                      <div className='form-group'>
                        <label for="ChainID" class="form-label mt-4">From</label>
                        <input type="text" id="ChainID" className="form-control" placeholder='Ex: Ethereum' onChange={(e)=>{ setchainId(e.target.value)} }/>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className='form-group'>
                        <label for="Token" class="form-label mt-4">Token</label>
                        <input type="text" id="Token" className="form-control" placeholder='Ex: ETH' onChange={(e)=>{ setTokenName(e.target.value)} }/>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <label for="DepositedAmmount" class="form-label mt-4">Deposited Ammount</label>
                    <input type="text" id="DepositedAmmount" className="form-control" placeholder='0.0' onChange={(e)=>{ setTokenValue(e.target.value)} }/>
                  </div>

                  <div className='row'>
                    <div class="form-group">
                      <label for="Fees" class="form-label mt-4">Fees</label>
                      <div className="row boxedradio">
                        <div className="col-4 text-center">
                          <input className='form-control form-control-lg' type="radio" id="500" name="skills" value="0.01"/>
                          <label for="500" class="form-label">500</label>
                        </div>
                        <div className="col-4 text-center">
                          <input className='form-control form-control-lg' type="radio" id="3000" name="skills" value="0.1"/>
                          <label for="3000">3000</label>
                        </div>
                        <div className="col-4 text-center">
                          <input className='form-control form-control-lg' type="radio" id="10000" name="skills" value="0.3"/>
                          <label for="10000">10000</label>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <div className='row flex-column col-6'>
                    <div className='h-100 d-flex flex-column mx-4 mb-3 px-4 bg-light'>
                      <svg class="range-svg" viewBox="0 0 500 100">
                        <rect class="range-track" x="25" y="45" width="450" height="10" rx="5" />
                        <circle draggable class="range-handle range-handle--left" cx={position.x} cy="50" r="12" onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseLeave} />
                        <circle class="range-handle range-handle--right" cx="475" cy="50" r="12" />
                        <rect class="range-selection" x="25" y="45" width="450" height="10" rx="5" />
                      </svg>
                    </div>
                </div>

              </div>

              <div className='row flex-row justify-content-center mt-5 mb-3'>

                <button type='button' class='btn btn-lg btn-primary rounded-pill w-75 mb-3' onClick={() => { APPROVEtoken(tokenName,tokenValue) }}>Approve Token</button>

                {
                  walletAddress.length > 0 ? 
                  (
                    <>
                      <button type='button' class='btn btn-lg btn-primary rounded-pill w-75 mb-3' onClick={() => { BridgeLiquidityy(tokenName,tokenValue) }}>Add Liquidity</button>
                    </>
                  )
                  :
                  (
                    <>
                      <button type='button' class='btn btn-lg btn-primary rounded-pill w-75 mb-3' onClick={() => { connectWallet() }}>Connect Wallet</button>
                    </>
                  )
                }

              </div>
            
            </div>
          
          </div>     
        </div>
      
      </div>
    </div>
  )
}

export default BridgeLiquidity
