import React,{useContext,useEffect,useState} from 'react'
import { Link } from 'react-router-dom'



import { Token1Context } from "../../contexts/Token1Context";
import { i } from 'mathjs';

function PoolLiquidity() {
  const {  walletAddress,getManagerContract,getTokenContracts } = useContext(Token1Context);
  const [totalPositions,setTotalPositions]=useState(0)
  const [positions,setPositions]=useState([])
// async function getBalance(){
//   try{
//   if(walletAddress){
//   const contract= await getManagerContract();
//   console.log("Manager",contract)
//   const balance = await contract.methods.balanceOf(walletAddress).call();
//   setTotalPositions(balance)
//   if(balance>0){
//     let arr=[]
//     let pos=[]
//   for(let i=0;i<balance;i++)
   
//   {
//     arr[i] = await contract.methods.tokenOfOwnerByIndex(walletAddress,i).call();
//     console.log("aarr",arr[i])
//     pos[i]=await contract.methods.positions(Number(i+1)).call();
//     console.log("pos[i]",pos[i])
//     const token=getTokenContracts(pos[i].)
//     const name0= await
//     setPositions(prevData => [...prevData, {...pos[i],name0:}])

//   }
  

//   }
// }
//   }catch (err){
//     console.log(err)
//   }
  
  
// }
useEffect(()=>{
  // getBalance()

},[walletAddress])



  return (
    <div class="container" style={{ marginTop:'4rem' }}>
{console.log(positions?.length)}
      <div class="py-5 d-flex justify-content-around align-items-center">
        <h1 class="display-6">Pools</h1>
        <button type="button" class="btn btn-primary">
          <Link to="/pools/create" className="text-white">New Position</Link>
        </button>
      </div>

      <div className="d-flex justify-content-center align-items-center py-2">

        <div class="card text-center shadow-lg col-md-6 col-lg-7 rounded-0 border border-end-0 border-start-0 border-top-0 border-3 border-primary">
          <h5 class="card-header h4">Your Position ({totalPositions})</h5>
          <div class="card-body">
            
            <Link to="/pools/liquidityStat">
              <div className="text-start text-dark bg-light shadow-1-strong p-4 rounded-3 mb-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center my-3">
                    <img src="https://s2.coinmarketcap.com/static/img/coins/200x200/1027.png" alt="ETH" className="img-fluid" style={{ width:'30px' }} />
                    <img src="https://s2.coinmarketcap.com/static/img/coins/200x200/4943.png" alt="UNI" className="img-fluid" style={{ width:'30px' }} />
                    <span className="mx-2 h5 my-0">ETH/UNI</span>
                  </div>
                  <button type="button" class="btn btn-primary mx-2">Deposit</button>
                </div>
                <span className="h5">Min: 1.3418 per ETH &lt;&gt; Max: 1.399 per UNI </span >
              </div>
            </Link>
            <Link to="/pools/liquidityStat">
              <div className="text-start text-dark bg-light shadow-1-strong p-4 rounded-3 mb-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center my-3">
                    <img src="https://s2.coinmarketcap.com/static/img/coins/200x200/1027.png" alt="ETH" className="img-fluid" style={{ width:'30px' }} />
                    <img src="https://s2.coinmarketcap.com/static/img/coins/200x200/4943.png" alt="UNI" className="img-fluid" style={{ width:'30px' }} />
                    <span className="mx-2 h5 my-0">ETH/UNI</span>
                  </div>
                  <button type="button" class="btn btn-primary mx-2">Deposit</button>
                </div>
                <span className="h5">Min: 1.3418 per ETH &lt;&gt; Max: 1.399 per UNI </span >
              </div>
            </Link>
        
          </div>
        </div>

      </div>



    </div>
  )
}

export default PoolLiquidity
