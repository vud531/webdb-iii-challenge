const express = require('express')
const knex = require('knex')
const knexConfig = require('../knexfile')

const db = knex(knexConfig.development)

const { asyncHandler } = require('./helpers')

const router = express.Router()

router.get('/', asyncHandler( async(req, res) => {
    const results = await db('cohorts'); // all the records from the table
    res.status(200).json(results);
}))

module.exports = router
