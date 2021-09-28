const web3 = require("../web3");

const StudentContract = (req, res, next) => {
    const StudentContract = new web3.eth.Contract(JSON.parse(process.env.ContractABI), process.env.ContractAddress);
    // Geth - Web3 연결확인
    if(StudentContract !== undefined) {
        //student Contract를 req.contract_student 에 담는다.
        req.contract_student = StudentContract;
    } else {
        // 미확인 시 블록체인 기능 잠금
        return res.json({ studentContract: false, msg: "StudentContract가 비활성화 되었습니다."});
    }
}

module.exports = { StudentContract };