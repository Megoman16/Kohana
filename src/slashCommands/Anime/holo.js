const fetch = require('node-fetch');

module.exports.commandLogic = async itemsToImport => {
    const {interaction} = itemsToImport;
    const holo = await fetch('https://purrbot.site/api/img/sfw/holo/img');
    const holoJSON = await holo.json();
    interaction.createMessage({
        "embeds": {
            "title": `HOLO`,
            "color": 2717868,
            "image": {
                "url": holoJSON.link
            }
        }
    }).catch(err => console.error("Cannot send messages to this channel", err));
}

module.exports.description = "Get an image of Holo"