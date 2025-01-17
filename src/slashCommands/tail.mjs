export const commandLogic = async interaction => {
    const tail = await fetch('https://purrbot.site/api/img/sfw/tail/gif');
    const tailJSON = await tail.json();
    interaction.createMessage({
        "embeds": [{
            "title": `TAIL`,
            "color": 2717868,
            "image": {
                "url": tailJSON.link
            }
        }]
    }).catch(err => {});
}

export const description = "Wag your tail"

export const category = "Anime" 