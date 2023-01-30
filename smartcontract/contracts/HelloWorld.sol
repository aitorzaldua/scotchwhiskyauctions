//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract HelloWorld {

    string public message;

    event UpdatedMessages (
        string oldMessage,
        string newMessage
    );

    constructor (string memory _initialMessage) {
        message = _initialMessage;
    }

    function updateMessage(string memory _newMessage) public {
        string memory oldMessage = message;
        message = _newMessage;

        emit UpdatedMessages (oldMessage, message);
    }

}