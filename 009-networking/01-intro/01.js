const os = require("os");

const interfaces = os.networkInterfaces();
for (let name in interfaces) {
  interfaces[name].forEach((iface) => {
    if (!iface.internal && iface.mac !== "00:00:00:00:00:00") {
      console.log(`${name} -> MAC: ${iface.mac}, IP: ${iface.address}`);
    }
  });
}
