const localtunnel = require('localtunnel');

(async () => {
  const tunnel = await localtunnel({ port: 8080 });

  // the assigned public url for your tunnel
  // i.e. https://abcdefgjhij.localtunnel.me
  tunnel.url;
  console.log(tunnel.url, "Tunnel URL");

  tunnel.on('close', () => {
    // tunnels are closed
  });
})();