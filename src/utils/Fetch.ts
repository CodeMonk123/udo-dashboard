
const url = 'http://192.168.1.123:8000/api/documents/query'

/* Fetch data.
* Params:
*   Key: Air_purifier_123_Aqi | Air_purifier_123_Humidity | Air_purifier_123_Temperature 
* Return:
*   null or float
*/ 
function FetchData(key:string, callback){

    var endTime = new Date(Date.now()).toISOString();
    var startTime = new Date(Date.now() - 6000).toISOString();

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
    
    fetch(url, {
        method: "POST",
        body: queryBody,
    }).then(res => {
        res.text().then(
            function(text){
                const tokens = text.split('values=')
                const results = Array(JSON.parse(tokens[1].slice(0, -6)))
                var val = null
                if(results.length>0) {
                    val = results[0][0][1]
                } 
                callback(new Date(Date.now()).toLocaleString(), val, key)
            }
        )
    })

}

export default FetchData
