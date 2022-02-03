module.exports = {
    name: "ready",
    async execute(client) {
        console.log(`${client.user.username} is ready to go!`);
        client.user.setActivity('Custom status', {type: 'PLAYING'});
    }
};