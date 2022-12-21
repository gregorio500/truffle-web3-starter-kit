var MyContract = artifacts.require("Example");

module.exports = function(deployer) {
  deployer.deploy(MyContract);
  console.log("Deployed!!!")
};

// truffle deploy --reset
