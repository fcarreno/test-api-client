const reqPromise = require('request-promise');
const cmdLineParsedParams = require('minimist')(process.argv.slice(2)); // Getting values starting from 3rd cmd line parameter and on (after `node client.js`)
const echoAPIEndpoint = process.env.ECHO_API_ENDPOINT || 'http://localhost:8000/api/echo';

(async() => {

    try{
        let echoAPITextParamWordsArray = cmdLineParsedParams._;
        let echoAPITextParamValue = echoAPITextParamWordsArray.length ? echoAPITextParamWordsArray.join(' ').trim() : ''; // Join the different words/strings received as param
                                                                                                                          // Otherwise default to empty string

        let echoAPIResponse = await reqPromise(`${echoAPIEndpoint}/${encodeURIComponent(echoAPITextParamValue)}`);
        console.log(`ECHO API response is: ${echoAPIResponse}`);
    }catch(err){
        console.log('ECHO API request failed -', err.message);
    }
})();



