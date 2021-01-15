const express = require('express')
const router = express.Router()
const users = require('../models/users')

// gets all user information
router.get('/', async (req, res) => {
    try {
       const info = await users.find()
       res.json(info)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// creates new user
router.post('/', async (req, res) => {
    try {
        await users.create({
            username: req.body.username,
            password: req.body.password,
            pantry: [],
            favorites: []
        })
        res.status(200).json({ message: 'User created'})
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// deletes a user
router.delete('/', async (req, res) => {
    try {
        await users.deleteOne({
            username: req.body.username
        })
        res.status(200).json({ message: 'User deleted'})
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

module.exports = router