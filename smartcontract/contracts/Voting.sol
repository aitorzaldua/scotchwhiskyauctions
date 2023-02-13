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

//End date is always one week after the starting date.


// SPDX-License-Identifier: MIT
// @audit-issue - Don´t use ^ in mainnet.
// Last update: 20230210
pragma solidity ^0.8.7;

import "hardhat/console.sol";

import "./DaoMembers.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Voting is DaoMembers {
    using Counters for Counters.Counter;

    Counters.Counter public voteId;


    enum Status {
        open,
        closed
    }

    enum Outcome {
        passed,
        rejected,
        enacted,
        pending
    }

    struct vote {
        string question;
        address createdBy;
        uint tokenBalance;
        Status status;
        Counters.Counter countYes;
        Counters.Counter countNo;
        Outcome outcome;
        string startingDate;
        string endDate;
        mapping (address => bool) Voters;
    }

    mapping(uint => vote) votesDataBase;

    function newVoting (string memory _question) public onlyRole(MEMBER_ROLE) {
        vote storage newVote = votesDataBase[voteId.current()];
        newVote.question = _question;
        newVote.createdBy = msg.sender;
        newVote.tokenBalance = 0;
        newVote.status = "open";
        newVote.countVotes = 0;
        newVote.outcome = "pending";
        newVote.startingDate = block.timestamp;
        newVote.endDatev = block.timestamp + 24*60*60;
    }

    function vote (uint _whichQuestionAreYouVotingFor, bool _vote) public onlyRole(MEMBER_ROLE) {
        vote storage newMemberVote = votesDataBase[_whichQuestionAreYouVotingFor];

        require(newMemberVote.Status = "open", "The Voting is already closed");


        newMemberVote.Voters[msg.sender] = true;

        if (_vote) {
            newMemberVote.countYes(increment());
        }
        else {
            newMemberVote.countNo(increment());
        }

    }



}