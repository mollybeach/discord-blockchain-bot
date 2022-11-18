#Discord Blockchain Bot

Using Moralis to connect to the blockchain and Discord to connect to the world. 
 https://docs.moralis.io/

Moralis Streams is a Discord bot that allows you to stream events from the blockchain to Discord.

## How to use

install ngrok 

When you are ready to run your dapp using the command below:
npm i

With Homebrew already installed on your Mac, you can easily install ngrok from the terminal, using this command:

brew cask install ngrok

Then run it from the shell using this command:
ngrok http 3000
npm run start

Result Should be something like this:

ngrok                                                           (Ctrl+C to quit)
                                                                                
Add Okta or Azure to protect your ngrok dashboard with SSO: https://ngrok.com/da
                                                                                
Session Status                online                                            
Session Expires               1 hour, 58 minutes                                
Terms of Service              https://ngrok.com/tos                             
Version                       3.1.0                                             
Region                        United States (us)                                
Latency                       99ms                                              
Web Interface                 http://127.0.0.1:4040                             
Forwarding                    https://ef01-2601-603-207f-cb00-99ee-cc26-7f0a-410
                                                                                
Connections                   ttl     opn     rt1     rt5     p50     p90       
                              0       0       0.00    0.00    0.00    0.00      
                        
Grab the Forwarding URL and add it to the .env file
Add it to Moralis Dashboard create a webhook to listen to the blockchain events
Adding a New Moralis Stream
Add a contract address to the stream for example use :

POLYGON_MUMBAI_DONATION_CONTRACT = "0xbD317B46A004CCF0e1773DBFcEE89E77e32D2dB9" 

//https://mumbai.polygonscan.com/address/0xbD317B46A004CCF0e1773DBFcEE89E77e32D2dB9
                                    
<br/>
forward:                                        add webhook to the end 
Add: WebhookURL: https://ef01-2601-603-207f-cb00-99ee-cc26-7f0a-410a.ngrok.io/webhook

https://mumbai.polygonscan.com/address/0xbD317B46A004CCF0e1773DBFcEE89E77e32D2dB9
<br/>
go here go to contract tab scroll down get contract abi
<br/>
paste it into the abi field in the dashboard in moralis
<br/>
select topic should load and select the event you want to listen to
<br/>
then click create stream
<br/>
listening to streams........
<br/>
go back to your terminal and you should see 
<br/>
{
<br/>
  abi: [],
  <br/>
  block: { number: '', hash: '', timestamp: '' },
  <br/>
  txs: [],
  <br/>
  txsInternal: [],
  <br/>
  logs: [],
  <br/>
  chainId: '',
  <br/>
  confirmed: true,
  <br/>
  retries: 0,
  <br/>
  tag: '',
  <br/>
  streamId: '',
  <br/>
  erc20Approvals: [],
  <br/>
  erc20Transfers: [],
  <br/>
  nftApprovals: { ERC721: [], ERC1155: [] },
  <br/>
  nftTransfers: []
  <br/>
}
<br/>
go to polygon mumbai scan and write to our contract tab
<br/>
go to chainlist 
<br/>
search mumbai
<br/>

mumbai.polygonscan.com
<br/>
https://mumbai.polygonscan.com
<br/>
Allow this site to add a network?
<br/>
This will allow this network to be used within MetaMask.
<br/>

<br/>
Add Network Polygon Mumbai to Metamask Manually : with these details 
<br/>
Network name
<br/>
Mumbai
<br/>
Network URL
<br/>
https://matic-mumbai.chainstacklabs.com
<br/>
Chain ID
<br/>
80001
<br/>
Currency symbol
<br/>
MATIC
<br/>
now it should connect
<br/>
click connect web3 again and it should be connected 
<br/>
get MATIC from polygon faucet 
<br/>
https://faucet.polygon.technology/
<br/>
Get the tokens in 1 to 2 minutes
<br/>
should click write and it should write to the terminal:
<br/>
<br/>
{
<br/>
  confirmed: false,
  <br/>
  chainId: '0x13861',
  <br/>
  abi: [
  <br/>
    {
    <br/>
      anonymous: false,
      <br/>
      inputs: [Array],
      <br/>
      name: 'Donate',
      <br/>
      type: 'event'
      <br/>
    }
    <br/>
  ],
  <br/>
  streamId: 'd34cfa63-aecf-4237-85f4-e032edd9075',
  <br/>
  tag: 'New Donation',
  <br/>
  retries: 0,
  <br/>
  block: {
  <br/>
    number: '29202550',
    <br/>
    hash: '0x98c57f4edb6212c2f6080de8e47b452eadd0d579795c8a84924efee91ec00d',
    <br/>
    timestamp: '1668714118'<br/>
  },<br/>
  logs: [],
  <br/>
  txs: [
  <br/>
    {
    <br/>
      hash: '0x5482d98438fef99aed0bd30d4779ac16e9433b1bf95cb38ed0aa39dd6ddfdf',
      <br/>
      gas: '52689',
      <br/>
      gasPrice: '148700022',
      <br/>
      nonce: '0',
      <br/>
      input: '0xd014dad7',
      <br/>
      transactionIndex: '7',
      <br/>
      fromAddress: '0x310cdhfa99f4742ed951e24d619d605174dfa96e',
      <br/>
      toAddress: '0xbd317b46a004ccf0e13473dbfcee89e77e32d2db9',
      <br/>
      value: '10000000000000000',
      <br/>
      type: '2',
      <br/>
      v: '0',
      <br/>
      r: '17965373091552954102200393072149782207334056709731775689234789051604164084298',
      <br/>
      s: '3032970740407562965147246116330596996583026722753145970938038827940854137229',
      <br/>
      receiptCumulativeGasUsed: '2197917',
      <br/>
      receiptGasUsed: '35687',
      <br/>
      receiptContractAddress: null,
      <br/>
      receiptRoot: null,
      <br/>
      receiptStatus: '1'
      <br/>
    }
    <br/>
  ],
  <br/>
  txsInternal: [],
  <br/>
  erc20Transfers: [],
  <br/>
  erc20Approvals: [],
  <br/>
  nftApprovals: { ERC1155: [], ERC721: [] },
  <br/>
  nftTransfers: []
  <br/>
}
<br/>

Add a check to make sure it's moralis that is making the call to the webhook
<br/>
In the index.js file 
<br/>
under the app.post add this code:
<br/>
Moralis.start(
<br/>
    {
    <br/>
        apiKey: process.env.MORALIS_API_KEY
        <br/>
    }
    <br/>
)
<br/>
go to moralis dashboard and get the api key
<br/>
put it in the .env file
<br/>