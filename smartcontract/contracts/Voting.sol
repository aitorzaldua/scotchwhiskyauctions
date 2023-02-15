// Last update: 20230215

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
//Chainklink Keepers is the responsible to finished the vote.

// SPDX-License-Identifier: MIT
// @audit-issue - Don´t use ^ in mainnet.

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

    //Each votation is identify by this struct
    struct individualVoting {
        string question;
        address createdBy;
        uint tokenBalance;
        Status status;
        Outcome outcome;
        Counters.Counter countYes;
        Counters.Counter countNo;
        uint endDate;
        mapping(address => bool) Voters;
    }

    //The database of all individual Voting
    mapping(uint => individualVoting) votesDataBase;

    //Members can create new voting Option just adding the question
    //Require: Role MEMBER
    //Each vote is active for 7 days
    function newVotingOption(
        string memory _question
    ) public onlyRole(MEMBER_ROLE) {
        individualVoting storage newVote = votesDataBase[voteId.current()];
        newVote.question = _question;
        newVote.createdBy = msg.sender;
        newVote.tokenBalance = 0;
        newVote.status = Status.open;
        newVote.outcome = Outcome.pending;
        newVote.endDate = block.timestamp + 7 * 24 * 60 * 60;

        voteId.increment();
    }

    //Members can vote adding the individual Voting Id and the vote
    //Require: Role MEMBER
    //Require: Only 1 vote for each individual Voting
    //Require: Balance should be > 0
    function memberVoting(
        uint _voteId,
        bool _yesNo
    ) public onlyRole(MEMBER_ROLE) {
        individualVoting storage CurrentVote = votesDataBase[_voteId];

        if (_yesNo) {
            CurrentVote.countYes.increment();
        } else {
            CurrentVote.countNo.increment();
        }
    }

    function getVoting(
        uint _voteId
    )
        public
        view
        returns (
            string memory,
            address,
            Status,
            Outcome,
            uint,
            Counters.Counter memory,
            Counters.Counter memory
        )
    {
        individualVoting storage idVote = votesDataBase[_voteId];

        return (
            idVote.question,
            idVote.createdBy,
            idVote.status,
            idVote.outcome,
            idVote.endDate,
            idVote.countYes,
            idVote.countNo
        );
    }

    //DELETE after test
    function getVotingTest()
        public
        view
        returns (
            string memory,
            address,
            Status,
            Outcome,
            uint,
            Counters.Counter memory,
            Counters.Counter memory
        )
    {
        individualVoting storage idVote = votesDataBase[0];

        return (
            idVote.question,
            idVote.createdBy,
            idVote.status,
            idVote.outcome,
            idVote.endDate,
            idVote.countYes,
            idVote.countNo
        );
    }
}
