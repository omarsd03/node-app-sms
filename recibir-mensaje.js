require('dotenv').config();

const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();

app.post('/sms', (req, res) => {
    const twiml = new MessagingResponse();
    twiml.message('He recibido tu mensaje');
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
});

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
})