//Only Members can open a votation 
//Only Member can vote
//From 1 to 3 tokens: 1 vote
//From 3 to 10 tokens: 2 votes
//From 10 to 25 tokens: 3 votes
//From 25 to 50 tokens: 4 votes
//More than 50 tokens: 5 votes
//Votations has end date
//Mimimal aproval 10% of the tokens available
//Aproval: at end date -> 70% of emited votes

// SPDX-License-Identifier: MIT
// @audit-issue - Don´t use ^ in mainnet.
// Last update: 20230210
pragma solidity ^0.8.4;

import "./DaoMembers.sol";

contract Voting is DaoMembers {

}