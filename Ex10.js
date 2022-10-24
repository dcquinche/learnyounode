const net = require('net');
const server = net.createServer(callback);

function fillZero (time) {
    if(time < 10){
        return "0" + time;
    } else {
        return "" + time;
    }
}

function currentTime (){
    let date = new Date();
    let dateFormat = `${date.getFullYear()}-${fillZero(date.getMonth() +1)}-${fillZero(date.getDate())} ${fillZero(date.getHours())}:${fillZero(date.getMinutes())}`
    return dateFormat;
}

function callback(socket){
    socket.end(currentTime() + "\n")
}

server.listen(Number(process.argv[2]));

