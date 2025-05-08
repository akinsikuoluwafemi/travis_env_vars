// to save env variables, you dont need an env file, just do this in your terminal:
// export MY_NAME=Femi


function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const myName = process.env.MY_NAME;  // this will be undefined if you don't set it in your terminal: use it like this

// set it in dockerfile:
// # Set the environment variable NODE_ENV to production
// ARG MY_NAME
// ENV MY_NAME=$MY_NAME

async function main() {
  while (true) {
    console.log("Microservices rock!");
    console.log(`My name is ${myName}`);
    await sleep(5000);
  }
}

main();
