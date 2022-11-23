# Basic Ether Wallet

## Description

This is a small [LearnWeb3](https://learnweb3.io/courses/9a3fafe4-b5eb-4329-bdef-97b2aa6aacc1/lessons/017e65bf-2a86-455e-a499-09b61ffa5241)
project demonstrating [QuickNode's](https://www.quicknode.com/) RPC APIs, deploying an Ethereum smart contract via [Ethers.js](https://docs.ethers.io/v5/).

The contract implements a basic Ether wallet showcasing some simple functionality depositing and withdrawing  funds to a smart contract address. 

Note: withdrawals are limited to the contract owner.

## Compile

[Hardhat](https://hardhat.org/) is used for the development environment and compilation:

```shell
npx hardhat compile
```

## Installation


Create a QuickNode account and define `.env` from the `.env.template` for the provider and wallet to be used for testing. 

Ensure this a **test account** as this is for demonstration purposes only.

Run the following script to deploy the contract on the goerli testnet via QuickNode: 

```shell
npx hardhat run scripts/deploy.js --network goerli
```

## Interaction

Once the contract is deployed, it can be interacted with via [Remix](https://remix.ethereum.org/) and [Metamask](https://metamask.io/).

Use a Goerli faucet such as [Chainlink](https://faucets.chain.link/) to obtain the necessary testnet funds for interaction.

Example contract address:
[0xe1935Bd00a6E440545CD9fA0DdECBa29C796C781](https://goerli.etherscan.io/address/0xe1935bd00a6e440545cd9fa0ddecba29c796c781)