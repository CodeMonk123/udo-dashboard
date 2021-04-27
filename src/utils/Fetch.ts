
const url = 'http://192.168.1.123:8000/api/documents/query'

/* Fetch data.
* Params:
*   Key: Air_purifier_123_Aqi | Air_purifier_123_Humidity | Air_purifier_123_Temperature | Air_purifier_123_Speed
* Return:
*   null or float
*/ 
function FetchData(key:string){

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

    console.log(queryBody)
    
    fetch(url, {
        method: "POST",
        body: queryBody,
    }).then(res => {
        res.text().then(
            function(text){
                console.log(text)
                const tokens = text.split('values=')
                const results = Array(JSON.parse(tokens[1].slice(0, -6)))
                if(results.length==0) {
                    // return null
                    
                } else {
                    // return results[0][1]
                    
                }
            }
        )
    })

}

export default FetchData
