const {task} = require("hardhat/config")

task("mint", "Mints a given amount of tokens to a given address")
  .addParam("toaddress", "The account's address")
  .addParam("value", "Value to be minted")
  .setAction(
    async ({toaddress, value}, hre) => {
        const {deployer} = await hre.getNamedAccounts()
        const AToken = await hre.ethers.getContract("AToken", deployer)
        console.log(`Minting ${value} tokens ...`)
        const transactionResponse = await AToken.mint(toaddress, hre.ethers.utils.parseEther(value.toString()))
        await transactionResponse.wait(1)
        console.log(`Minted to ${toaddress} !!`)
    });