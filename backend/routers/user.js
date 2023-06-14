const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const cors = require('cors')
const { userDB } = require('../index')

router.use(cors())
router.use(bodyParser.urlencoded({ extended: true }))
router.use(express.json({limit: '1mb'}))

const findByUserId = require('../utilitis/user/findByUserId')
const register = require('../utilitis/user/register')
const login = require('../utilitis/user/login')

router.post('/login', (req, res) => { login(req, res, userDB) })
router.post('/register', (req, res) => { register(req, res, userDB) })
router.post('/findByUserId', (req, res) => { findByUserId(req, res, userDB) })

module.exports = router