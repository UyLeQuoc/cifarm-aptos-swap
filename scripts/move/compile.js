require("dotenv").config();
const cli = require("@aptos-labs/ts-sdk/dist/common/cli/index.js");

async function compile() {
  const move = new cli.Move();

  await move.compile({
    packageDirectoryPath: "contract",
    namedAddresses: {
      // Compile module with account address
      cifarm: process.env.NEXT_MODULE_CIFARM_ACCOUNT_ADDRESS,
      dev: process.env.NEXT_MODULE_DEV_ACCOUNT_ADDRESS,
      default_admin: process.env.NEXT_MODULE_DEFAULT_ADMIN_ACCOUNT_ADDRESS,
    },
  });
}
compile();
