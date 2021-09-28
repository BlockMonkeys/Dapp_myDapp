pragma solidity >=0.4.22 <0.9.0;

contract Student {
    
    struct Student {
        string name;
        uint age;
    }

    mapping(uint256 => Student) studentInfo;

    function setStudentInfo(uint256 _studentId, string memory name, uint age) public {
        Student storage student = studentInfo[_studentId];
        student.name = name;
        student.age = age;
    }

    function getStudentInfo(uint256 _studentId) public view returns (string memory, uint) {
        return (studentInfo[_studentId].name, studentInfo[_studentId].age);
    }

}