module.exports = {
    "commandLogic": async function commandLogic({message, sharder} = itemsToImport) {
        const scoreboard = await sharder.ipc.command("makeserverLB", {guildID: message.channel.guild.id, durration: "allTime"}, true)
        message.channel.createMessage({"embeds": {"title": `Scoreboard`,"description": scoreboard,"color": 5747894}}).catch(err => console.error("Cannot send messages to this channel", err));
    },
    "help":[
        {"name": "__Usage__","value": "Shows the top bumpers.\n```??botPrefix??scoreboard```"}
    ]
};