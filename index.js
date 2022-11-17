const express = require("express");
const Moralis = require("moralis").default;
const discord = require("discord.js");
require("dotenv").config();
const app = express();
const port = 3000;

const client = new discord.Client({
    intents: [],
  });

client.login(process.env.PASS);