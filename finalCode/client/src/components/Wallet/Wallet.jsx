  import {useState} from "react";
 import ABI from "./ABI.json";
  import Web3 from "web3";
 import './Wallet.css';
 import metamaskLogo from '../../assets/metamask.png'


// eslint-disable-next-line react/prop-types
const Wallet =({saveState})=>{
            const [connected,setConnected]=useState(true);
             const isAndroid = /android/i.test(navigator.userAgent);
            const init =async()=>{
            try{
              const web3 = new Web3(window.ethereum);
              await window.ethereum.request({method:'eth_requestAccounts'});
              const contract = new web3.eth.Contract(ABI,"0xB8591c1028418b25DeED2cCcD4EC02d17cf4c993");
              setConnected(false);
              saveState({web3:web3,contract:contract});
            }catch(error){
              alert("Please Install Metamask");
            }
            }
      return<>
      <div className="header">
      
      {isAndroid  && <button className="connectBTN">
        <a href="https://metamask.app.link/dapp/diva.D.app/">Click For Mobile</a>
        </button>  } 


    {/* <button className="connectBTN" onClick={init} disabled={!connected}> 
      {connected? "Connect Metamask":"Connected"}
    </button> */}
     {/* <button className="connectBTN"> Connect Metamask </button> */}

     <button className="connectBTN" onClick={init} disabled={!connected}>
                    {/* Adding MetaMask logo here */}
                    {connected ? "Connect" : "Connected"}

                    <img 
                        src={metamaskLogo} // For local file
                        // src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" // For online image URL
                        alt="MetaMask Logo"
                        style={{ width: '100px', height: '20px', marginLeft: '8px' }}
                    />
                    
                </button>


    </div>
    </>
 }
 export default Wallet;


