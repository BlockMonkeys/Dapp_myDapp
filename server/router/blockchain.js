const express = require("express");
const { blockchain_set_testament, blockchain_get_testament } = require("../controller/blockchain");
const router = express.Router();
const { contract_testament } = require("../middleware/testament");
const { ipfsUpload } = require("../controller/ipfsUpload");

router.post("/set/testament", contract_testament, blockchain_set_testament);
router.post("/get/testament", contract_testament, blockchain_get_testament);
router.post("/ipfs/upload", ipfsUpload)

module.exports = router;