const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()

const connectDB = async (req, res ) => {
    
    try {
        const MOGODBURL = process.env.MONGODBURL
        const connect = await mongoose.connect(MOGODBURL)
        console.log("Connected to MOGODB")
    } catch (error) {
        throw new Error("Couldn't connect to MOGODB")
    }
}

module.exports = connectDB