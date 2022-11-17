const express = require("express");
const port = 3000;
const app = express();

app.use(express.json());
app.post("/webhook", async (request, response) => {
    const {body} = request;
    console.log(body);
    return response.status(200).json();
});

app.listen(port, () => {
    console.log(`listening to streams........`);
});
/*const Moralis = require("moralis").default;
const express = require("express");
const discord = require("discord.js");
require("dotenv").config();
const port = 3000;
const app = express();*/
/*
const client = new discord.Client({
    intents: [],
  });

client.login(process.env.PASS); // what should PASS be? PASS is 
/*
app.use(express.json());

app.post("/webhook", async (req, res) => {
  const { body, headers } = req;

  try {
    Moralis.Streams.verifySignature({
      body,
      signature: headers["x-signature"],
    });


    let from = body.txs[0].fromAddress;
    let amount = Number(body.txs[0].value / 1E18);

    const channel = await client.channels.fetch(process.env.CHANNEL);
    channel.send(`A new donation has been submitted by ${from}, for ${amount.toFixed(2)} MATIC!!!!`);

    return res.status(200).json();
  } catch (e) {
    console.log("This is Not Moralis");
    return res.status(400).json();
  }
});*/