const get = require('./get')

const endpoint = 'ipv4bot.whatismyipaddress.com'

module.exports = async () => {
    return await get(endpoint)
}