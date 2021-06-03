const url = 'https://api.coincap.io/v2'

const getAssets = async () => {
  try {
    const rawData = await fetch(`${url}/assets?limit=20`)
    const jsonData = await rawData.json()
    return jsonData
  } catch (error) {
    console.error('El request a la api ha fallado' + error)
  }
}

const getAsset = async (coin) => {
  try {
    const rawData = await fetch(`${url}/assets/${coin}`)
    const jsonData = await rawData.json()
    return jsonData
  } catch (error) {
    console.error('El request de la api ha fallado' + error)
  }
}

const getAssetHistory = async (coin) => {
  try {
    const now = new Date()
    const end = now.getTime()
    now.setDate(now.getDate() - 1)
    const start = now.getTime()
    const rawData = await fetch(
      `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
    )
    const jsonData = await rawData.json()
    return jsonData
  } catch (error) {
    console.error('The request is failed: ' + error)
  }
}
const getMarkets = async (coin) => {
  try {
    const rawData = await fetch(`${url}/assets/${coin}/markets?limit=5`)
    const jsonData = await rawData.json()
    return jsonData
  } catch (error) {
    console.error('The request is failed: ' + error)
  }
}

const getExchange = async (id) => {
  try {
    const rawData = await fetch(`${url}/exchanges/${id}`)
    const jsonData = await rawData.json()
    return jsonData
  } catch (error) {
    console.error('The request is failed: ' + error)
  }
}

export default {
  getAssets,
  getAsset,
  getAssetHistory,
  getMarkets,
  getExchange,
}
