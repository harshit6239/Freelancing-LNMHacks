
import "./ConnectPage.css"
import { useEffect, useState } from "react";

import {ethers} from 'ethers'
import Freelancer from "../freelancerPage/Freelancer";
function ConnectPage(props) {
  const [connected, setConnected] = useState(false);

      
  const connect = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await ethereum.request({ method: 'eth_requestAccounts' });
        setConnected(true);
        const accounts = await ethereum.request({ method: 'eth_accounts' });
        console.log(accounts);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('Please install MetaMask');
    }
  };
  useEffect(() => {
    const checkConnection = async () => {
      try {
        if (window.ethereum) {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts.length > 0) {
            setConnected(true);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    checkConnection();
}, []); 


  return (
    <>
      <div className="connect_container">
        <div className="connect_b">
        {connected ? (
            <Freelancer jobList={props.jobList} />
          ) : (
            <button onClick={connect}>Connect</button>
          )}
        </div>
      </div>
    </>
  );
}

export default ConnectPage;
