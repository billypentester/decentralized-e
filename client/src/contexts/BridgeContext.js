import React, { createContext, useContext, useState, useEffect } from "react";
import { Token1Context } from "./Token1Context";

import {
  bscBridgeAddress,
  bridgeABI,
  mumBridgeAddress,
  chainId,
  BSCchainid,
  kyzABI,
} from "../utils/contants";
import swal from "sweetalert";
export const BridgeContext = createContext();

const Web3 = require("web3");

export default function BridgeProvider({ children }) {
  const { walletAddress, approveTokens } = useContext(Token1Context);
  let web3 = new Web3(window.ethereum);
  console.log(web3);
  async function shiftChain() {
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: Web3.utils.toHex(BSCchainid),
          chainId: "Binance Smart Chain Testnet",
          rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
          nativeCurrency: {
            name: "tBNB",
            symbol: "tBNB",
            decimals: 18,
          },
          blockExplorerUrls: ["https://testnet.bscscan.com"],
        },
      ],
    });
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: Web3.utils.toHex(BSCchainid) }],
    });
  }
  async function addTokenToBlockchain(mumbaiToken, bscToken, fee) {
    const mumBridgeContract = new web3.eth.Contract(
      bridgeABI,
      mumBridgeAddress
    );

    const AddToken = await mumBridgeContract.methods
      .addToken(mumbaiToken, bscToken, fee)
      .send({ from: walletAddress });
    console.log("confirmed", AddToken);
  }
  async function getContract(contractABI, contractAddress) {
    const contract = new web3.eth.Contract(contractABI, contractAddress);
    return contract;
  }
  async function APPROVEtoken(tokenName, tokenValue) {
    const TokenContract = await getContract(kyzABI, tokenName);
    const Approve = await TokenContract.methods
      .approve(mumBridgeAddress, tokenValue)
      .send({ from: walletAddress });
    console.log("approved successfully", Approve);
  }

  async function BridgeLiquidityy(tokenName, tokenValue) {
    console.log(tokenName, "***************", tokenValue);
    const mumBridgeContract = new web3.eth.Contract(
      bridgeABI,
      mumBridgeAddress
    );
    console.log(mumBridgeContract);
    const addLiquidityToBridge = await mumBridgeContract.methods
      .addTokensforLiquidity(tokenName, tokenValue)
      .send({ from: walletAddress });
    console.log("done", addLiquidityToBridge);
  }

  return (
    <BridgeContext.Provider
      value={{
        BridgeLiquidityy,
        addTokenToBlockchain,
        APPROVEtoken,
      }}
    >
      {children}
    </BridgeContext.Provider>
  );
}
