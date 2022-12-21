//SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Example {
    string public data;

    function setData(string memory _data) public {
        data = _data;
    }

    function getData() public view returns (string memory) {
        return data;
    }
}
