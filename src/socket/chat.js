const chatHandler = (io, socket) => {
    // console.log(socket.id);
    // console.log(socket.adapter.rooms);
    //emit client
    socket.on('register', (userId) => {
        socket.userId = userId;
        console.log(userId + ': ' + socket.id);
    });
    socket.emit('register_success', socket.id);

    //register room: Find a room if not available, create a new room if available, join rooms
    // socket.join('some room');
    // io.to('some room').emit('some event');
    // io.sockets.in(socket.room).emit('send-chat-me', msg); => send msg all user inside room
    //  io.to(id_room).emit('send-chat-user-group', msg); => send msg from userId inside group

    //! emit other user
    // io.to('socketid').emit('login-success', socket.id);
    // io.sockets.in(socketUser).emit('send-chat', msg);

    //! emitted to all users except myself
    // socket.broadcast.emit('send-all-client', 'Send all clients');

    // ! emit all users including my self
    // io.sockets.emit('login-success', socket.id);
};

export default chatHandler;
