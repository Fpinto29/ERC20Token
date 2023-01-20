const {getNamedAccounts, ethers} = require("hardhat")

async function main() {
    const {deployer} = await getNamedAccounts()
    const AToken = await ethers.getContract("AToken", deployer)
    console.log(`Transfering 1 token ...`)
    const transactionResponse = await AToken.transfer("0xE82d5DB6f6A33616e3DF829fCEb6BC391e646055", ethers.utils.parseEther("1.0"))
    await transactionResponse.wait(1)
    console.log("Transfered!")
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })