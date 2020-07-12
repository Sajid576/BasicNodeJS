var EventEmitter = require('events')
 
var ee = new EventEmitter()
ee.on('message', function (text) {
  console.log(text)
})
setInterval(()=>{
     ee.emit('message', 'hello world')
},1000);
