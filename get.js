const https = require('https')

const agent = 'Tektonica noipupdater/1-1 info@tektonica.com'

module.exports = (hostname, path, username, password) =>
{
    return new Promise((resolve, reject) =>
    {
        const options = {
            hostname,
            path: (path === undefined) ? '/' : path,
            port: 443,
            method: 'GET',
            headers: {
                'User-Agent': agent
            },
            auth: (username === undefined) ? undefined : `${username}:${password}`
        }

        const req = https.request(options, (res) =>
        {
            let body = ''

            res.on('data', (data) => {
                body += data
            })

            res.on('end', () => {
                resolve(body)
            })
        })

        req.on('error', (e) => {
            reject(e)
        })

        req.end()
    })

}