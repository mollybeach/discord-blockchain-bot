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