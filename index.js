const express = require('express');
const app = express();
const os = require('os');
require('dotenv').config()

const VERSION = process.env.VERSION || 'brak_versji';

app.get('/', (req, res) => {
    const ipAddress = req.ip.replace('::ffff:',''); 
    res.send(`Adres IP serwera: ${ipAddress} Wersja aplikacji: ${VERSION} Nazwa hosta: ${os.hostname()}`);
});
 
app.listen(8080, () => {
  console.log('Listening on port 8080');
});
