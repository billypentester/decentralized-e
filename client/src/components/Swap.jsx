import Seo from './Utilities/Seo'
import React, {useState, useEffect, useContext} from 'react'
import { Token1Context } from "../contexts/Token1Context";
import inputTokens from '../data/inputTokens'
import Popup from '../utils/Popup';

function Swap() {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const hideModal = () => {
    setShowModal(false);
  };

  const {
    Swap,
    connectWallet,
    walletAddress,
    findPool,
    quoter,
    estimatedValue,
    setEstimatedValue,
    estimatedValue1,
    setEstimatedValue1,
  } = useContext(Token1Context);
  const [r1, setR1] = useState(0.1); //larger number (ending val)
  // const [r2, setR2] = useState(0); //smaller number(starting val)
  const [show, setshow] = useState(false);

  const [token1, setToken1] = useState();
  const [boolean, setBoolean] = useState(true);
  const [check, setCheck] = useState();
  const [slippageVal, setSlippageVal] = useState(0);
  const [swapToken0, setSwapToken0] = useState();
  const [swapToken1, setSwapToken1] = useState();
  const [swapToken0Name, setSwapToken0Name] = useState("Select");
  const [swapToken1Name, setSwapToken1Name] = useState("Select");
  useEffect(() => {
    Seo({
      title: "Swap",
      description: "Swap page",
    })
  }, []);

  return (
    <div className="bg-secondary d-flex justify-content-center flex-column align-items-center" style={{height:'100vh'}}>
      <div class="card shadow-lg col-md-6 col-lg-5 rounded-3 border border-end-0 border-start-0 border-top-0 border-3 ">
        <div class="card-header h4 text-center">Swap</div>
        <button type="button" class="btn btn-outline-primary w-100" onClick={openModal}>Select Tokens</button>
        <div class="card-body">
          {console.log(swapToken1,swapToken1Name)}
          <div className='row justify-content-center'>

            <div className='row flex-row justify-content-center align-items-end'>
              <div className='col-8'>
                <div class="form-group">
                  <label for="Sender" class="form-label mt-4">You Send</label>
                  <input type="number" class="form-control" id="Sender" placeholder="0.0"
                    value={estimatedValue1}
                    onChange={(e) => {
                      setToken1(e.target.value);
                      setEstimatedValue1(e.target.value);
                      {swapToken0 && swapToken1?quoter(e.target.value,1,swapToken0,swapToken1):<></>}
                      
                    }}
                  />
                </div>  
              </div>
              <div className='col-3'>
                <button type="button" class="btn btn-outline-primary w-100" data-toggle="modal" data-target="#send">{swapToken0Name}</button>
              </div>
            </div>

            <div className='row flex-row justify-content-center align-items-end'>
              <div className='col-8'>
                <div class="form-group">
                  <label for="Getter" class="form-label mt-4">You Get</label>
                  <input type="number" class="form-control" id="Getter" placeholder="0.0"
                    value={estimatedValue}
                    onChange={(e) => {
                      setToken1(e.target.value);
                      setEstimatedValue(e.target.value);
                      {swapToken0 && swapToken1?quoter(e.target.value,2,swapToken0,swapToken1):<></>}                   }}
                  />
                </div>  
              </div>
              <div className='col-3'>
                <button type="button" class="btn btn-outline-primary w-100" data-toggle="modal" data-target="#get">{swapToken1Name}</button>
              </div>
            </div>

            <div className='row flex-row justify-content-center mt-5 mb-3'>
              {
                walletAddress.length > 0 ?
                (
                  <>
                    {console.log(boolean, r1)}
                    <button type='button' class='btn btn-lg btn-primary rounded-pill w-75' onClick={() => {Swap(token1, boolean, r1,swapToken0,swapToken1)}}>Swap</button>
                  </>
                )
                :
                (
                  <>
                    <button type='button' class='btn btn-lg btn-primary rounded-pill w-75' onClick={() => {connectWallet();}}>Connect Wallet</button>
                  </>
                )
              }
            </div>

          </div>

        </div>
      </div>

      <div className="modal fade" id="send" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Choose Token</h5>
              <button type="button"  className="btn-close" data-dismiss="modal" aria-label="Close" data-toggle="modal" data-target="#send">
                <span aria-hidden="true"></span>
              </button>
            </div>
            <div className="modal-body">
              <div className='row justify-content-center'>
                <div class="form-group">
                  <label class="form-label">Search</label>
                  <input type="email" class="form-control" id="SearchToken" placeholder="Search Token"/>
                </div>
                <div class="d-flex flex-column my-3">
                  {inputTokens.map((token,index)=>(
                    <button type="button" class="btn btn-outline-light text-start w-100 mt-2" data-dismiss="modal" aria-label="Close" data-toggle="modal" data-target="#send" onClick={()=>{setSwapToken0(token.address);setSwapToken0Name(token.token)}}>
                    <div className='row align-items-center'>
                      <div className='col-2'>
                        <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png" alt="..." className='rounded-circle' style={{width:'50px', height:'50px'}}/>
                      </div>
                      <div className='col-10'>
                        <h5 className='mb-0'>{token.name}</h5>
                        <p className='mb-0'>{token.token}</p>
                      </div>
                    </div>
                  </button>

                  ))}
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="get" tabindex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Choose Token</h5>
              <button type="button"  className="btn-close" data-dismiss="modal" aria-label="Close" data-toggle="modal" data-target="#get">
                <span aria-hidden="true"></span>
              </button>
            </div>
            <div className="modal-body">
              <div className='row justify-content-center'>
                <div class="form-group">
                  <label class="form-label">Search</label>
                  <input type="email" class="form-control" id="SearchToken" placeholder="Search Token"/>
                </div>
                <div class="d-flex flex-column my-3">
                {inputTokens.map((token,index)=>(
                    <button type="button" class="btn btn-outline-light text-start w-100 mt-2" data-dismiss="modal" aria-label="Close" data-toggle="modal" data-target="#get" onClick={()=>{setSwapToken1(token.address);setSwapToken1Name(token.token)}}>
                    <div className='row align-items-center'>
                      <div className='col-2'>
                        <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png" alt="..." className='rounded-circle' style={{width:'50px', height:'50px'}}/>
                      </div>
                      <div className='col-10'>
                        <h5 className='mb-0'>{token.name}</h5>
                        <p className='mb-0'>{token.token}</p>
                      </div>
                    </div>
                  </button>

                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {
        showModal && <Popup setShowModal={hideModal} title="Swap" message="Swap Successful" type="success" />
      }


    </div>
  )
}

export default Swap