const {network} = require("hardhat")
const {verify} = require("../utils/verify")

module.exports.default = async({getNamedAccounts, deployments}) => {
    const { deploy, log } = deployments
    const {deployer} = await getNamedAccounts()

    const Token = await deploy("AToken", {
        from: deployer,
        args: [],
        log: true,
    })

    if(network.config.chainId !== 31337 && process.env.ETHERSCAN_API_KEY){
       await verify(Token.address, [])
    }
}
module.exports.tags = ["all", "token"]