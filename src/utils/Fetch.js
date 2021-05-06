const url = 'http://192.168.1.115:8000/api/documents/query'

/* Fetch data.
 * Params:
 *   Key: Air_purifier_123_Aqi | Air_purifier_123_Humidity | Air_purifier_123_Temperature
 * Return:
 *   null or float
 */
async function FetchData(key) {
  var endTime = new Date(Date.now()).toISOString()
  var startTime = new Date(Date.now() - 6000).toISOString()

  var queryBody = `
        {
            Air_purifierMeters(
                start : "${startTime}",
                end : "${endTime}",
                step : "5s",
                query : "${key}"
            ){
                status
                data
            }
        }
    `

  return fetch(url, {
    method: 'POST',
    body: queryBody,
  })
    .then(res => res.text())
    .then(text => {
      const tokens = text.split('values=')
      const results = Array(JSON.parse(tokens[1].slice(0, -6)))
      var val = null
      if (results.length > 0) {
        val = results[0][0][1]
      }

      return val
    })
}

export default FetchData
