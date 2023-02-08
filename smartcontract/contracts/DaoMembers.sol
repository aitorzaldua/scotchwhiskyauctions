// SPDX-License-Identifier: MIT
// @audit-issue - Don´t use ^ in mainnet.
// Last update: 20230208
pragma solidity ^0.8.4;

import "hardhat/console.sol";

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import "@openzeppelin/contracts/utils/Counters.sol";

contract DaoMembers is AccessControl, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter public memberId;


    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant FOUNDER_ROLE = keccak256("FOUNDER_ROLE");
    bytes32 public constant MEMBER_ROLE = keccak256("MEMBER_ROLE");
    bytes32 public constant REQUESTER_ROLE = keccak256("REQUESTER_ROLE");
    bytes32 public constant USER_ROLE = keccak256("USER_ROLE");
    bytes32 public constant COURIER_ROLE = keccak256("COURIER_ROLE");

    constructor() {

        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(ADMIN_ROLE, msg.sender);
        _setupRole(FOUNDER_ROLE, msg.sender);
        _setupRole(MEMBER_ROLE, msg.sender);
        _setupRole(REQUESTER_ROLE, msg.sender);
        _setupRole(USER_ROLE, msg.sender);
        _setupRole(COURIER_ROLE, msg.sender);

    }

    //As the Dao need to send/receive physical items,
    //We need all the member´s information.
    struct member {
        string name;
        string surname;
        string physicalAddress;
        address clientAccount;
        bytes32[] role;
    }

    mapping(uint => member) membersDataBase;

    function addMember(string memory _name, string memory _surname, string memory _physicalAddress, bool _role) external {
        //The new member could be DaoMember and user or just user
        //_role = true -> Requesting to be DaoMember and user.
        //_role = false ->only user
        //Courier role must go through another function

        // @audit-issue - Check if the address has the USER_ROLE;

        member storage newMember = membersDataBase[memberId.current()];
        newMember.name = _name;
        newMember.surname = _surname;
        newMember.physicalAddress = _physicalAddress;
        newMember.clientAccount = msg.sender;

        if(_role) {
            newMember.role.push(keccak256("REQUESTER_ROLE"));
            _setupRole(REQUESTER_ROLE, msg.sender);
        }

        newMember.role.push(keccak256("USER_ROLE"));
        _setupRole(USER_ROLE, msg.sender);

        memberId.increment();

    }

     //Change Roles:
    function addRole(bytes32 _role, uint _customerId) external onlyRole(FOUNDER_ROLE)  {
        member storage memberData = membersDataBase[_customerId];
        _grantRole(_role, memberData.clientAccount);
        memberData.role.push(_role);

    }

    function removeRole(bytes32 role, address account) external onlyRole(FOUNDER_ROLE){
        _revokeRole(role, account);
        // @audit-issue - we have to remove the role in the struct
    }

    //Get functions:
    function getMembers (uint _memberId) public view onlyRole(MEMBER_ROLE) returns (string memory, string memory, string memory, address, bytes32[] memory) {
        member storage memberData = membersDataBase[_memberId];

        return (memberData.name, memberData.surname, memberData.physicalAddress, memberData.clientAccount, memberData.role);

        // @audit-issue - memberData.role are not the user roles, if removeRole() has been used.
    }


}