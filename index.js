const update = require('./noip-api')
const myip = require('./myip')

const hostname = process.env.NOIP_HOSTNAME
const username = process.env.NOIP_USERNAME
const password = process.env.NOIP_PASSWORD
const interval = parseInt(process.env.NOIP_INTERVAL)

async function run ()
{
    const ip = await myip()
    const result = await update(hostname, ip, username, password)
    console.log(result)
    console.log('done')
    setTimeout(async () => {
        await run()
    }, interval)
}

run()

