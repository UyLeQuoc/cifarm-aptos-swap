require("dotenv").config();

const cli = require("@aptos-labs/ts-sdk/dist/common/cli/index.js");

async function test() {
  const move = new cli.Move();

  await move.test({
    packageDirectoryPath: "contract",
    namedAddresses: {
      test_coin: "0x16",
      zero: "0000000000000000000000000000000000000000000000000000000000000000",
      cifarm: process.env.NEXT_MODULE_CIFARM_ACCOUNT_ADDRESS,
      dev: process.env.NEXT_MODULE_DEV_ACCOUNT_ADDRESS,
      default_admin: process.env.NEXT_MODULE_DEFAULT_ADMIN_ACCOUNT_ADDRESS,
    },
  });
}
test();
