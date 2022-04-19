const express = require('express');

const cors = require("cors");
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const token = process.env.authorization
const url = process.env.url

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

exports.consulta = async (req, res, next) => {

    axios({
        method: "get",
        url: url,
        headers: {
            "Authorization": token,
            "Content-Type": "application/json",
            "Accept": "application/vnd.github.mercy-preview+json"
        }
    }).then(response => {

        const obj = {...response.data};

        res.status(200).send(obj);

    }).catch(err => {
        
        res.status(500).send(err);

        console.log(err);
    });
}
