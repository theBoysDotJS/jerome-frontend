import openSocket from 'socket.io-client';
export const socket = openSocket("https://theboyschatapp.herokuapp.com");


class Socket {

	sendMessage = (message) => {
		socket.emit('chat', message);
	}

	receiveMessage = () => {
		socket.on('chat', data => data)
	}
}
export default new Socket();
