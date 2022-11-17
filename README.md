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

ngrok                                                           (Ctrl+C to quit)
                                                                                
Add Okta or Azure to protect your ngrok dashboard with SSO: https://ngrok.com/da
                                                                                
Session Status                online                                            
Session Expires               1 hour, 58 minutes                                
Terms of Service              https://ngrok.com/tos                             
Version                       3.1.0                                             
Region                        United States (us)                                
Latency                       99ms                                              
Web Interface                 http://127.0.0.1:4040                             
Forwarding                    https://ef01-2601-603-207f-cb00-99ee-cc26-7f0a-410
                                                                                
Connections                   ttl     opn     rt1     rt5     p50     p90       
                              0       0       0.00    0.00    0.00    0.00      
                        
Grab the Forwarding URL and add it to the .env file
Add it to Moralis Dashboard create a webhook to listen to the blockchain events
Adding a New Moralis Stream
Add a contract address to the stream for example use :

POLYGON_MUMBAI_DONATION_CONTRACT = "0xbD317B46A004CCF0e1773DBFcEE89E77e32D2dB9" 

//https://mumbai.polygonscan.com/address/0xbD317B46A004CCF0e1773DBFcEE89E77e32D2dB9
                                    

                                forward:                                        add webhook to the end 
Add: WebhookURL: https://ef01-2601-603-207f-cb00-99ee-cc26-7f0a-410a.ngrok.io/webhook

https://mumbai.polygonscan.com/address/0xbD317B46A004CCF0e1773DBFcEE89E77e32D2dB9

go here go to contract tab scroll down get contract abi
paste it into the abi field in the dashboard in moralis
select topic should load and select the event you want to listen to
then click create stream

listening to streams........

go back to your terminal and you should see 
{
  abi: [],
  block: { number: '', hash: '', timestamp: '' },
  txs: [],
  txsInternal: [],
  logs: [],
  chainId: '',
  confirmed: true,
  retries: 0,
  tag: '',
  streamId: '',
  erc20Approvals: [],
  erc20Transfers: [],
  nftApprovals: { ERC721: [], ERC1155: [] },
  nftTransfers: []
}

go to polygon scan and write to our contract tab
then go to discord and type !stream

go to chainlist 
search mumbai

mumbai.polygonscan.com
https://mumbai.polygonscan.com
Allow this site to add a network?
This will allow this network to be used within MetaMask.
MetaMask does not verify custom networks.
Learn about scams and network security risks.
Network name
Mumbai
Network URL
https://matic-mumbai.chainstacklabs.com
Chain ID
80001
Currency symbol
MATIC


add polygon mumbai to metamask
Add network manually on metamask and fill out with the details above
now it should connect
click connect web3 again and it should be connected 
get MATIC from polygon faucet 

https://faucet.polygon.technology/

Get the tokens in 1 to 2 minutes
should clikc write and it should write to the terminal:

{
  confirmed: false,
  chainId: '0x13861',
  abi: [
    {
      anonymous: false,
      inputs: [Array],
      name: 'Donate',
      type: 'event'
    }
  ],
  streamId: 'd34cfa63-aecf-4237-85f4-e032edd9075',
  tag: 'New Donation',
  retries: 0,
  block: {
    number: '29202550',
    hash: '0x98c57f4edb6212c2f6080de8e47b452eadd0d579795c8a84924efee91ec00d',
    timestamp: '1668714118'
  },
  logs: [],
  txs: [
    {
      hash: '0x5482d98438fef99aed0bd30d4779ac16e9433b1bf95cb38ed0aa39dd6ddfdf',
      gas: '52689',
      gasPrice: '148700022',
      nonce: '0',
      input: '0xd014dad7',
      transactionIndex: '7',
      fromAddress: '0x310cdhfa99f4742ed951e24d619d605174dfa96e',
      toAddress: '0xbd317b46a004ccf0e13473dbfcee89e77e32d2db9',
      value: '10000000000000000',
      type: '2',
      v: '0',
      r: '17965373091552954102200393072149782207334056709731775689234789051604164084298',
      s: '3032970740407562965147246116330596996583026722753145970938038827940854137229',
      receiptCumulativeGasUsed: '2197917',
      receiptGasUsed: '35687',
      receiptContractAddress: null,
      receiptRoot: null,
      receiptStatus: '1'
    }
  ],
  txsInternal: [],
  erc20Transfers: [],
  erc20Approvals: [],
  nftApprovals: { ERC1155: [], ERC721: [] },
  nftTransfers: []
}

