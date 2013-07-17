var io = require("socket.io").listen(6969);

io.sockets.on("connection", arranque);

function arranque(usuario)
{

	usuario.on("nuevoNombre", emitir);

}
function emitir(data)
{

	io.sockets.emit("nombreDesdeServidor", data + "*");
}