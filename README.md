# SPA-Geth

## Purpose

Creating a SPA DAPP using geth cli and webj3

## SetUp -- (in project directory terminal)

1. npm install -g yo
2. npm install -g generator-webapp
3. npm install -g gulp
4. npm install -g bower

## Create App -- (in terminal)

1. yo webapp (follow prompts to setup app with tools as you see fit.)

## Run App -- (in terminal)

1. gulp serve

## Install Web3 -- (in terminal)

1. bower install web3

## Launch Geth cli

1. geth --rinkeby --rpc --rpcaddr "localhost" --rpcport "8545" --rpcapi "web3,eth,net,personal" --rpccorsdomain "\*" --datadir "./data"
