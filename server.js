function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const myName = process.env.MY_NAME;

async function main() {
  while (true) {
    console.log("Microservices rock!");
    console.log(`My name is ${myName}`);
    await sleep(5000);
  }
}

main();
