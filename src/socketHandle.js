import openSocket from 'socket.io-client';
export const socket = openSocket('http://a24628e4.ngrok.io');


class Socket {

	sendMessage = (message) => {
		socket.emit('chat', message);
	}

	receiveMessage = () => {
		socket.on('chat', data => data)
	}
}
export default new Socket();
