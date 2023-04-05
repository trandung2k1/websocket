import { Server } from 'socket.io';
import chatHandler from './chat.js';
const socket = (server) => {
    const io = new Server(server, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST'],
            credentials: true,
        },
    });
    //verify token
    // io.use(async (socket, next) => {
    //     try {
    //         const token = socket.handshake.headers['authorization'];
    //         if (token) {
    //             next();
    //         } else {
    //             return next(new Error('no user found'));
    //         }
    //     } catch (err) {
    //         console.log(err);
    //     }
    // });
    const onConnection = (socket) => {
        chatHandler(io, socket);
    };
    io.on('connection', onConnection);
};
export default socket;
