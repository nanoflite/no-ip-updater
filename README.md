# Simple no-ip-updater

I wrote this no-ip updater because my server is behind a router and my external ip address is not what the router
assumes it is.

The ip adress gets determined by using `whatsmyipaddress.com` and then an update happens to the no-ip API.

## Configuration

There are 4 environment variables used for configuration:

  * NOIP_USERNAME
  * NOIP_PASSWORD
  * NOIP_HOSTNAME
  * NOIP_INTERVAL (time between 2 updates in milliseconds, e.g. 1800000 for every 30 minutes)
  
I recommend using `direnv` to manage these environment variables (https://direnv.net/). 

## Running

Simply from the command line...

```
$> NOIP_USERNAME=... node index.js
```

Or under the PM2 process manager (https://pm2.keymetrics.io/)...

```
$> npm start
```

(There's a stop target as well)

