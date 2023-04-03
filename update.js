import fetch from 'node-fetch';
import * as dotenv from 'dotenv';
dotenv.config()

const apiKey = process.env.API_KEY;
const mailingListId = process.env.MAILING_LIST_ID;


const requestPayload = {
  Name: "slayer",
  Email: "killcount@gmail.com"
};

const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(requestPayload)
};

fetch(`https://api.moosend.com/v3/subscribers/${mailingListId}/subscribe.json?apikey=${apiKey}`, requestOptions)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
