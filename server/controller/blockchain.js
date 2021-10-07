const blockchain_set_testament = async(req, res) => {
    const ipfsHash = req.body.Hash;
    const writer = req.body.Writer;
    const password = req.body.Password;
    const timestamp = Date.now();
    //Date.now를 날짜 출력으로 변환하는 법  
    // new Date(timestamp).toString());
    try {
        await req.contract_testament.methods.setTestament(password, writer, timestamp, ipfsHash).send({"from": "0x1e4ceafbfded02b9d607c89485f94a58819025d1"})
        .then(res => {
            console.log(res);
            res.status(200).json({success: true});
        });

    } catch (err) {
        res.status(400).send(err);
    };
};

const blockchain_get_testament = async(req, res) => {
    const password = req.body.Password;
    let payload;
    try {
        await req.contract_testament.methods.getTestament(password).call()
            .then(res => {
                console.log(res);
                const writer = res["0"];
                const ipfsHash = res["2"];
                const time = res["1"];
                payload = {
                    Writer : writer,
                    IpfsHash : ipfsHash,
                    Time : time,
                };
            });
        res.status(200).json({ success: true, payload });
    } catch (err) {
        res.status(400).send(err);
    };
}

module.exports = { blockchain_set_testament, blockchain_get_testament };
