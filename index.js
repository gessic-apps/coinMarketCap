require('dotenv').config();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const express = require('express')
const app = express()
const port = process.env.PORT || 80


app.get('/getPrice', async (req, res) => {
    console.log(req.query);
    let rawResults = await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${process.env.API_KEY}`)
    let results = await rawResults.json();
    // console.log(results);

    let btc = results.data.find(res => res.id === 1);
    
    let btcResponse = {
      name: 'btc/usd', price: parseFloat(btc.quote.USD.price.toFixed(3))
    }
    console.log(btcResponse)

    let eth = results.data.find(res => res.id === 1027);
    let ethResponse = {
      name: 'eth/usd', price: parseFloat(eth.quote.USD.price.toFixed(3))
    };
    console.log(ethResponse)

    let ada = results.data.find(res => res.id === 2010);
    let adaResponse = {
      name: 'ada/usd', price: parseFloat(ada.quote.USD.price.toFixed(3))
    }
    console.log(adaResponse)

    let bnb = results.data.find(res => res.id === 1839);
    let bnbResponse = {
      name: 'bnb/usd', price: parseFloat(bnb.quote.USD.price.toFixed(3))
    }
    console.log(bnbResponse)
    

    let algo = results.data.find(res => res.id === 4030);
    let algoResponse = {
      name: 'algo/usd', price: parseFloat(algo.quote.USD.price.toFixed(3))
    }
    console.log(algoResponse)

    // let btcResponse = await btc.json();

    // let eth = await fetch(`https://api.twelvedata.com/price?symbol=eth/usd&apikey=${process.env.API_KEY}`)
    // let ethResponse = await eth.json();

    // let ada = await fetch(`https://api.twelvedata.com/price?symbol=ada/usd&apikey=${process.env.API_KEY}`)
    // let adaResponse = await ada.json();

    // let bnb = await fetch(`https://api.twelvedata.com/price?symbol=bnb/usd&apikey=${process.env.API_KEY}`)
    // let bnbResponse = await bnb.json();

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    res.send([
      btcResponse,
      ethResponse,
      adaResponse,
      bnbResponse,
      algoResponse
    ]);
  })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });
