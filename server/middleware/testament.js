const web3 = require("../web3");

const contract_testament = (req, res, next) => {
    // 스마트 컨트렉트 가져오기 web3.Contract(ABI, Contract-Addresss)
    const testamentContract = new web3.eth.Contract(JSON.parse(process.env.ContractABI), process.env.ContractAddress);

    // Geth - Web3 연결확인 후, 컨트렉트 전달.
    if(testamentContract !== undefined) {
        // testament Contract를 req.contract_student 에 && web3 객체를 req.web3에 담아둔다.
        req.contract_testament = testamentContract;
        req.web3 = web3;
        next();
    } else {
        // 미확인 시 블록체인 기능 잠금
        return res.json({ testamentContract: false, msg: "SmartContract Testament가 비활성화 되었습니다."});
    }
}

module.exports = { contract_testament };