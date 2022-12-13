import { useState } from "react";
import axios, * as others from 'axios';

export class  Convert {


   


async Converter(price){

    

const options = {
			
    method: 'GET',
    url: 'https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency',
    params: {have: 'KES', want: 'USD', amount: price},
    headers: {
        'X-RapidAPI-Key': '54eea67071msh5d04b63a80c9ed6p19c3fbjsnf2d88b51728a',
        'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
    }
    };
    
    const dataPromise = await axios.request(options).then(function (response) {
        return response.data;
    }).catch(function (error) {
        console.error(error);
    });

    const data = dataPromise;
 

    return data;
}



}