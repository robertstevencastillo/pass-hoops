const express = require("express");
const router = express.Router();
const emailFromCustomer = require('../controller/contact')

router.post('/', (request, response) => emailFromCustomer(request, response));
module.exports = router;