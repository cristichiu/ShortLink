const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const cors = require('cors')
const { linkDB } = require('../index')

router.use(cors())
router.use(bodyParser.urlencoded({ extended: true }))
router.use(express.json({limit: '1mb'}))

const findAllLinks = require('../utilitis/link/findAllLinks')
const createLink = require('../utilitis/link/createLink')
const deleteLink = require('../utilitis/link/deleteLink')
const linkRedirect = require('../utilitis/link/linkRedirect')
const addClick = require('../utilitis/link/addClick')

router.post('/findAllLinks', (req, res) => { const { username } = req.body; findAllLinks(req, res, username, linkDB) })
router.post('/createLink', (req, res) => { createLink(req, res, linkDB) })
router.post('/deleteLink', (req, res) => { deleteLink(req, res, linkDB) })
router.post('/linkRedirect', (req, res) => { linkRedirect(req, res, linkDB) })
router.post('/addClick', (req, res) => { addClick(req, res, linkDB) })

module.exports = router