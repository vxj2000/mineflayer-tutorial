const mineflayer = require("mineflayer");

var settings = {
    username: "silverbot",
    host: "silversmp68Vf.aternos.me",
};

const bot = mineflayer.createBot(settings);

bot.once("spawn",greeting ()=>{
    bot.chat("selamat datang di silver smp");
});

bot.on("spawn",greeting ()=>{
    let friend = bot.nearestEntity();

    if (friend) {
        bot.lookAt(friend.position.offset(0, friend.height, 0));
    }
});

var walking = false;

bot.on("entityHurt", (entity)=>{
    if (entity != bot.entity) return;
    walking = !walking;
    bot.setControlState("forward", walking);
});
