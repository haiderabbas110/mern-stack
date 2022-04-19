const { Server } = require("socket.io");

const io = new Server({ /* options */ });

io.on("connection", (socket) => {
  socket.on('server connection',(msg)=>{
        console.log("hahaa");
  });
  socket.on('server connection',function(msg){
      console.log(msg + " hahah");
  });
});



io.listen(8000);