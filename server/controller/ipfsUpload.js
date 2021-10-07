const IpfsApi = require('ipfs-api');
const ipfs = IpfsApi("ipfs.infura.io", "5001", { protocol: "https" });

const ipfsUpload = (req, res) => {
    const fileToUploadIpfs = req.files.file.data;

    //IPFS UPLOAD & HASH GET
    //접속 : https://ipfs.io/ipfs/{해시값}
    ipfs.files.add(fileToUploadIpfs)
        .then(result => {
            res.status(200).json({ success: true, Ipfshash: result[0].hash});
        });
};

module.exports = { ipfsUpload };