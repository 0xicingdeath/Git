pragma solidity 0.5.6;

contract Debug {

    address public owner;
    uint256 public amount;

    constructor() public {
		owner = msg.sender;
    }

    function getAmount () public view returns (uint256){
        return amount;
    }
    
    function setAmount (uint8 _amount) public {
        amount = _amount;

    }
    
}