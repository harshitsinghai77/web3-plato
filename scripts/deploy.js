const main = async () => {
  const domainContractFactory = await hre.ethers.getContractFactory("Domains");
  const domainContract = await domainContractFactory.deploy("plato");
  await domainContract.deployed();

  console.log("Contract deployed to:", domainContract.address);

  // let txn = await domainContract.register("shadow", {
  //   value: hre.ethers.utils.parseEther("0.6"),
  // });
  // await txn.wait();
  // console.log("Minted domain shadow.plato");

  // txn = await domainContract.setRecord(
  //   "shadow",
  //   "https:www.github.com/harshitsinghai77"
  // );
  // await txn.wait();
  // console.log("Set record for shadow.plato");

  // const address = await domainContract.getAddress("shadow");
  // console.log("Owner of domain shadow:", address);

  const balance = await hre.ethers.provider.getBalance(domainContract.address);
  console.log("Contract balance:", hre.ethers.utils.formatEther(balance));
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
