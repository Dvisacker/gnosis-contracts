const Math = artifacts.require("./Utils/Math");
const EventFactory = artifacts.require("./Events/EventFactory.sol");
const EtherToken = artifacts.require("./Tokens/EtherToken.sol");
const CentralizedOracleFactory = artifacts.require("./Oracles/CentralizedOracleFactory.sol");
const UltimateOracleFactory = artifacts.require("./Oracles/UltimateOracleFactory.sol");
const LMSRMarketMaker = artifacts.require("./MarketMakers/LMSRMarketMaker.sol");
const StandardMarketFactory = artifacts.require("./Markets/StandardMarketFactory.sol");

module.exports = async function(deployer) {
  await deployer.deploy(Math);

  await deployer.link(Math, EventFactory);
  await deployer.deploy(EventFactory);

  await deployer.deploy(CentralizedOracleFactory);

  await deployer.link(Math, UltimateOracleFactory);
  await deployer.deploy(UltimateOracleFactory);

  await deployer.link(Math, LMSRMarketMaker);
  await deployer.deploy(LMSRMarketMaker);

  await deployer.link(Math, StandardMarketFactory);
  await deployer.deploy(StandardMarketFactory);

  await deployer.link(Math, EtherToken);
  await deployer.deploy(EtherToken);
};
