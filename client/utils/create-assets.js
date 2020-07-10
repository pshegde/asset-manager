import { formatDate } from './utils.js'

class Asset {
  constructor(id, assetName, price, lastUpdate, type) {
    this.id = id
    this.assetName = assetName // "USD", Samsung Electronics Co Ltd : "SSNLF"
    this.price = price // asset current price relative to USD
    this.lastUpdate = lastUpdate// number // unix timestamp
    this.type = type// "Currency" | "Stock" // asset type Currency (e.g. USD, EUR...) or Stock (Samsung, Google)
  }
}

const createAsset = (assetId, assetType) => {
  return new Asset(
    assetId,
    assetType === 'Stock' ? ['AAPL', 'GOOGL', 'FB', 'TSLA', 'MSFT'][Math.floor(Math.random() * 4)] : ['EUR', 'USD', 'GBP', 'NIS', 'AUD'][Math.floor(Math.random() * 4)],
    Math.random() * 10,
    formatDate(new Date()),
    assetType
  )
}

const getAllAssets = (n) => {
  const result = []
  for (let i = 0; i < n; i++) {
    result.push(createAsset(i, 'Stock'))
    result.push(createAsset(i + n, 'Currency'))
  }
  return result
}

export const assets = getAllAssets(200)

