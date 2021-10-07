pragma solidity >=0.4.22 <0.9.0;

contract Testament {
    
    struct Testament {
        string writer;        
        uint256 timestamp;
        string fileSrc;
    }

    mapping(uint256 => Testament) TestamentInfo;

    function setTestament(uint256 _password, string memory _writer, uint256 _timestamp, string memory _fileSrc) public {
        Testament storage testament = TestamentInfo[_password];
        testament.writer = _writer;
        testament.timestamp = _timestamp;
        testament.fileSrc = _fileSrc;
    }

    function getTestament(uint256 _password) public view returns (string memory, uint256, string memory) {
        return (TestamentInfo[_password].writer, TestamentInfo[_password].timestamp, TestamentInfo[_password].fileSrc);
    }
}