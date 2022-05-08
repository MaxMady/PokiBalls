
async function disboard(client) {
  setIntervel(function () {
    const channel = await client.channels.cache.get('id')
    await channel.sendSlash(`302050872383242240`, `bump`);
  })
  
}
module.exports = disboard
