const moment = require('moment-timezone')

export function formatDate(date) {
  if (!(date instanceof Date)) {
    throw new Error("Not instance of date")
  } else {
    return moment(date).toLocaleString()
  }
}