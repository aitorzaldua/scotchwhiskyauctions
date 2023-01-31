// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "hardhat/console.sol";

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import "@openzeppelin/contracts/utils/Counters.sol";

contract DaoMembers is AccessControl, Ownable {
    using Counters for Counters.Counter;


    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant FOUNDER_ROLE = keccak256("FOUNDER_ROLE");
    bytes32 public constant MEMBER_ROLE = keccak256("MEMBER_ROLE");
    bytes32 public constant REQUESTER_ROLE = keccak256("REQUESTER_ROLE");
    bytes32 public constant USER_ROLE = keccak256("USER_ROLE");

    constructor() {

        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(ADMIN_ROLE, msg.sender);
        _setupRole(FOUNDER_ROLE, msg.sender);
        _setupRole(MEMBER_ROLE, msg.sender);
        _setupRole(REQUESTER_ROLE, msg.sender);
        _setupRole(USER_ROLE, msg.sender);

    }


}