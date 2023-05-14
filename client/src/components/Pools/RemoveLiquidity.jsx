import React from 'react'

function RemoveLiquidity() {
  return (
    <div class="container" style={{ marginTop:'7rem'}}>

    <div className="d-flex justify-content-center align-items-center py-5">

      <div class="card text-center shadow-lg col-md-6 col-lg-6 rounded-0 border border-end-0 border-start-0 border-top-0 border-3 border-primary">
        <h5 class="card-header h4">Remove Liquidity</h5>
        <div class="card-body row">

          <div className="d-flex flex-column">

            <div className="my-1 d-flex align-items-center">
              <div className='mx-2'>
                <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" alt="eth" border="0" width="50" height="50" />
                <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png" alt="eth" border="0" width="50" height="50" />
              </div>
              <h4 class="card-title text-start mx-2 mb-0">ETH/USDT</h4>
            </div>

            <div className='my-3 bg-light col-12 rounded-3 p-3'>
              <h4>Amount</h4>
              <div class="range my-3">
                <div className='d-flex justify-content-between my-2'>
                  <span class="range-value">0</span>
                  <span class="range-value">25</span>
                  <span class="range-value">50</span>
                  <span class="range-value">75</span>
                  <span class="range-value">100</span>
                </div>
                <input type="range" class="form-range" min="0" max="100" step="25" id="customRange3" />
              </div>
            </div>

            <div className='my-2 bg-light col-12 rounded-3 p-3'>
              <h4 className='mb-3'>Price</h4>
              <div class="d-flex flex-column m-2">
                <div class="d-flex justify-content-between">
                  <span className='h5'>Pooled UNI</span>
                  <span className='h5'>0.1253</span>
                </div>
                <div class="d-flex justify-content-between">
                  <span className='h5'>Pooled ETH</span>
                  <span className='h5'>0.1106</span>
                </div>
              </div>
              <div class="d-flex flex-column m-2">
                <div class="d-flex justify-content-between">
                  <span className='h5'>UNI earned fee</span>
                  <span className='h5'>0.000457</span>
                </div>
                <div class="d-flex justify-content-between">
                  <span className='h5'>ETH earned fee</span>
                  <span className='h5'>0.001352</span>
                </div>
              </div>
            </div>

            <div className='my-2 bg-light col-12 rounded-3 p-3'>
              <div class="form-check form-switch">
                <label class="form-check-label" for="flexSwitchCheckDefault">Collected as WETH</label>
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              </div>
            </div>


          </div>

          <div className='container my-3'>
            <button type="button" className="btn btn-primary btn-lg rounded-pill w-100">Remove</button>
          </div>

        </div>
      </div>

    </div>

  </div>
  )
}

export default RemoveLiquidity