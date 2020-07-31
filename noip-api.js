const get = require('./get')

module.exports = async (hostname, ip, username, password) =>
{
    return await get('dynupdate.no-ip.com', `/nic/update?hostname=${hostname}&myip=${ip}`, username, password)
}
