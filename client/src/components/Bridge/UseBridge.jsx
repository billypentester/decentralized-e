import React, {useState, useContext} from 'react'
import { BridgeContext } from "../../contexts/BridgeContext";
import { Token1Context } from '../../contexts/Token1Context';

function UseBridge() {
  const {
    
    addTokenToBlockchain,
    
    
  } = useContext(BridgeContext);
  const {
    connectWallet,
    walletAddress,
    
    approveTokens
    
  } = useContext(Token1Context);
  const [mumbaiToken,setMumbaiToken]= useState()
  const [bscToken,setBscToken]= useState()
  const [fee,setFee]= useState()
  return (
    <div class="container" style={{ marginTop:'7rem'}}>
      <div className="bg-secondary d-flex justify-content-center align-items-center py-5">

        <div class="card shadow-lg col-md-6 col-lg-10 rounded-3 border border-end-0 border-start-0 border-top-0 border-3">
          <h5 class="card-header h4 text-center">Bridge</h5>
          <div class="card-body">

            <div className="">
              
              <ul class="nav nav-tabs nav-fill mb-3" id="ex-with-icons" role="tablist">
                <li class="nav-item" role="presentation">
                  <a class="nav-link active" id="Deposit" data-toggle="tab" href="#DepositTab" role="tab"
                    aria-controls="DepositTab" aria-selected="true"><i class="fas fa-chart-pie fa-fw me-2"></i>Deposit</a>
                </li>
                <li class="nav-item" role="presentation">
                  <a class="nav-link" id="Widhrawal" data-toggle="tab" href="#WidthrawalTab" role="tab"
                    aria-controls="WidthrawalTab" aria-selected="false"><i class="fas fa-cogs fa-fw me-2"></i>Widhrawal</a>
                </li>
              </ul>
             
              <div class="tab-content" id="ex-with-icons-content">

                <div class="tab-pane fade show active" id="DepositTab" role="tabpanel" aria-labelledby="Deposit">
                  <div className="row">
                    <div className="row flex-row justify-content-center align-items-end">
                      <div className="col-6">
                        <div className='form-group'>
                          <label for="From" class="form-label mt-4">From</label>
                          <input type="text" id="From" className="form-control" placeholder='0.0' onChange={(e)=>{setMumbaiToken(e.target.value)}}/>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className='row flex-row justify-content-center'>
                          <button type="button" class="btn btn-outline-primary col-5 mx-3">Select Token</button>
                          <button type="button" class="btn btn-outline-primary col-5 mx-3" onClick={()=>{addTokenToBlockchain(mumbaiToken, bscToken, fee)}}>Select Chain</button>
                        </div>
                      </div>
                    </div>
                    <div className="row flex-row justify-content-center align-items-end">
                      <div className="col-6">
                        <div className='form-group'>
                          <label for="To" class="form-label mt-4">To</label>
                          <input type="text" id="To" className="form-control" placeholder='0.0' onChange={(e)=>{setBscToken(e.target.value)}}/>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className='row flex-row justify-content-center'>
                          <button type="button" class="btn btn-outline-primary col-5 mx-3">Select Token</button>
                          <button type="button" class="btn btn-outline-primary col-5 mx-3">Select Chain</button>
                        </div>
                      </div> 
                    </div> 
                    <div className="row flex-row justify-content-center align-items-end">
                      <div className="col-6">
                        <div className='form-group'>
                          <label for="Fee" class="form-label mt-4">Fee</label>
                          <input type="text" id="Fee" className="form-control" placeholder='0.0' onChange={(e)=>{setFee(e.target.value)}}/>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className='row flex-row justify-content-center'>
                          <button type="button" class="btn btn-outline-primary col-5 mx-3">Select Token</button>
                          <button type="button" class="btn btn-outline-primary col-5 mx-3">Select Chain</button>
                        </div>
                      </div>
                    </div>
                     
                    <div className='row flex-row justify-content-center mt-5 mb-3'>
                    {
                      walletAddress.length > 0 ? 
                      (
                        <>
                          <button type='button' class='btn btn-lg btn-primary rounded-pill w-75' onClick={() => { addTokenToBlockchain(mumbaiToken, bscToken, fee); }}>Deposit</button>
                        </>
                      ) 
                      : 
                      (
                        <>
                          <button type='button' class='btn btn-lg btn-primary rounded-pill w-75' onClick={() => { connectWallet(); }}>Connect Wallet</button>
                        </>
                      )}
                    </div>
                  
                  </div>
                </div>

                <div class="tab-pane fade" id="WidthrawalTab" role="tabpanel" aria-labelledby="Widhrawal">
                  <div className="row">
                    <div className="row flex-row justify-content-center align-items-end">
                      <div className="col-6">
                        <div className='form-group'>
                          <label for="From" class="form-label mt-4">From</label>
                          <input type="text" id="From" className="form-control" placeholder='0.0' onChange={(e)=>{setMumbaiToken(e.target.value)}}/>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className='row flex-row justify-content-center'>
                          <button type="button" class="btn btn-outline-primary col-5 mx-3">Select Token</button>
                          <button type="button" class="btn btn-outline-primary col-5 mx-3" onClick={()=>{addTokenToBlockchain(mumbaiToken, bscToken, fee)}}>Select Chain</button>
                        </div>
                      </div>
                    </div>
                    <div className="row flex-row justify-content-center align-items-end">
                      <div className="col-6">
                        <div className='form-group'>
                          <label for="To" class="form-label mt-4">To</label>
                          <input type="text" id="To" className="form-control" placeholder='0.0' onChange={(e)=>{setBscToken(e.target.value)}}/>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className='row flex-row justify-content-center'>
                          <button type="button" class="btn btn-outline-primary col-5 mx-3">Select Token</button>
                          <button type="button" class="btn btn-outline-primary col-5 mx-3">Select Chain</button>
                        </div>
                      </div> 
                    </div> 
                    <div className="row flex-row justify-content-center align-items-end">
                      <div className="col-6">
                        <div className='form-group'>
                          <label for="Fee" class="form-label mt-4">Fee</label>
                          <input type="text" id="Fee" className="form-control" placeholder='0.0' onChange={(e)=>{setFee(e.target.value)}}/>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className='row flex-row justify-content-center'>
                          <button type="button" class="btn btn-outline-primary col-5 mx-3">Select Token</button>
                          <button type="button" class="btn btn-outline-primary col-5 mx-3">Select Chain</button>
                        </div>
                      </div>
                    </div>
                     
                    <div className='row flex-row justify-content-center mt-5 mb-3'>
                    {
                      walletAddress.length > 0 ? 
                      (
                        <>
                          <button type='button' class='btn btn-lg btn-primary rounded-pill w-75' onClick={() => { addTokenToBlockchain(mumbaiToken, bscToken, fee); }}>Deposit</button>
                        </>
                      ) 
                      : 
                      (
                        <>
                          <button type='button' class='btn btn-lg btn-primary rounded-pill w-75' onClick={() => { connectWallet(); }}>Connect Wallet</button>
                        </>
                      )}
                    </div>
                  
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      
      </div>
    </div>
  )
}

export default UseBridge
