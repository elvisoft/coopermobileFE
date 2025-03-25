import axios from "axios"

const ApiRequestHandler=axios.create({
    baseURL:'http://192.168.100.61:3000',
    headers: {
        'Content-Type': 'application/json'
    }
});

const GoogleApiRequestHandler=axios.create({
    baseURL:'https://maps.googleapis.com/maps/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

export {ApiRequestHandler, GoogleApiRequestHandler}