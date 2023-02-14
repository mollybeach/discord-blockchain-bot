#Discord Blockchain Bot
<br/>
Using Moralis to connect to the blockchain and Discord to connect to the world. 
<br/>
 https://docs.moralis.io/
 <br/>
Moralis Streams is a Discord bot that allows you to stream events from the blockchain to Discord.
<br/>
## How to use
<br/>
install ngrok 
<br/>
When you are ready to run your dapp using the command below:
npm i
<br/>
With Homebrew already installed on your Mac, you can easily install ngrok from the terminal, using this command: <br/>
brew cask install ngrok <br/>
Then run it from the shell using this command: <br/>
ngrok http 3000<br/> 
npm run start <br/>
Result Should be something like this: <br/> 
<img src="./assets/ngrok-terminal">
ngrok <br/>
Add Okta or Azure to protect your ngrok dashboard with SSO: <br/>
https://ngrok.com/da <br/> 
Session Status online <br/> 
Session Expires 1 hour, 58 minutes <br/>
Terms of Service  https://ngrok.com/tos <br/>
Version 3.1.0 <br/>
Region United States (us) <br/>
Latency 99ms <br/>
Web Interface http://127.0.0.1:4040   <br/>
Forwarding https://ef01-2601-603-207f-cb00-99ee-cc26-7f0a-410 <br/>
Connections                   ttl     opn     rt1     rt5     p50     p90 <br/>  
                               0       0       0.00    0.00    0.00    0.00  <br/>                       
Grab the Forwarding URL and add it to the .env file <br/>
Add it to Moralis Dashboard create a webhook to listen to the blockchain events <br/>
Adding a New Moralis Stream
<br/>
Add a contract address to the stream for example use :
<br/>
POLYGON_MUMBAI_DONATION_CONTRACT = "0xbD317B46A004CCF0e1773DBFcEE89E77e32D2dB9" 
<br/>
https://mumbai.polygonscan.com/address/0xbD317B46A004CCF0e1773DBFcEE89E77e32D2dB9
<br/>
                                    
<br/>
Webhook URL : Fowarding URL from ngrok + /webhook
<br/>
Add: WebhookURL: https://ef01-2601-603-207f-cb00-99ee-cc26-7f0a-410a.ngrok.io/webhook
<br/>

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
    } <br/>
) <br/>
go to moralis dashboard and get the api key <br/>
put it in the .env file <br/>
<br/>
go to index.js file and add this code: <br/>
  try {
    Moralis.Streams.verifySignature({
      body,
      signature: headers["x-signature"],
    });
<br/>
check on post man if it works <br/>
<br/>   
if says not moralis in the terminal then it works  <br/>
then create A new server in discord <br/>
then go to discord.com/devlopers <br/>
create a new application <br/>
give it a name <br/>
then click on bot tab on the left side bar <br/>
click add a bot <br/>
click yes do it <br/>
then click copy token <br/>
then go to the .env file and paste token in the DISCORD_TOKEN field <br/>
then go to the index.js file and paste the token in the DISCORD_TOKEN field <br/>
then go back the discord.com/devlopers <br/>
click on the OAuth2 tab on the left side bar <br/>
click on bot checkbox <br/>
then click give send message permission <br/>
then copy the generated link URL and paste it in the browser <br/>
then click on the server you want to add the bot to <br/>
then click authorize <br/>
you should get a message on your discord server from the bot </br>
then go to the index.js file and add this code: <br/>
const Discord = require('discord.js'); <br/>
const client = new Discord.Client(); <br/>
client.login(process.env.DISCORD_TOKEN); <br/>
client.on('ready', () => { <br/>
    console.log(`Logged in as ${client.user.tag}!`); <br/>
}); <br/>
client.on('message', msg => { <br/>
    if (msg.content === 'ping') { <br/>
        msg.reply('Pong!'); <br/>
    } <br/>
}); <br/>
then go to the terminal and type node index.js <br/>
then go to the discord server and type ping <br/>
then it should reply pong <br/>
then go to the index.js file and add this code: <br/>

you can go to discord right click channel and you should see copy id <br/>
if you dont see id o to your profile settings go to advanced and switch on developer mode  <br/>
then paste the id in the DISCORD_CHANNEL_ID field in the .env file <br/>
then go to the index.js file and add this code: <br/>



.
.
.
.
















































.
