const Cityscoot = require("../dist/"); // require('node-cityscoot');
const city = new Cityscoot({
  licenseFilePath: "./license_files/your_license.lic", // relative path to the root of the project
  email: "cityscoot@zz.com",
  password: "",
});

async function init() {
  await city.login();
  const scooters = await city.createReservation(16526);
  console.log(scooters);
  var cancel;
  setTimeout(async () => {
    cancel = await city.cancelReservation();
    console.log(cancel);
  }, 5000);
}

init();
