import {  useEffect, useState } from "react";
const ApiCall= () => {
    //const [post, setPost] = useState ([]);
    const [suppliers, setSuppliers] = useState([]);
    useEffect(()=> {
        fetch ('http://127.0.0.1:5500/src/apis/suppliers.json') //usamos liveserver para hacer la conexion puede haverse una llamada a cualquei endpoint
        .then((response) => response.json())
        .then ((data)=> {
            console.log(data);
            setSuppliers(data);
        })
        .catch((err)=>{
            console.lof(err.message);
        });
        ;
    },[]);
}
ApiCall();

/*
// Metodo 2 
const http = require('http');
const options = {
  hostname: 'http://127.0.0.1:5500/src/apis/suppliers.json',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};
const getSuppliers = () => {
  let data = '';

  const request = http.request(options, (response) => {
    response.setEncoding('utf8');
    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      console.log(data);
    });
  });

  request.on('error', (error) => {
    console.error(error);
  });
  request.end();
};
getSuppliers();
*/