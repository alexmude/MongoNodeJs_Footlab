// Updates a player's injury status 

db.Player.updateOne(
    { "name.first": "Kylian", "name.last": "Mbappe" },
    { $push: { "injury": { injury_id: 13, name: "rihgt knee acl", type: "Joint", duration: "5 weeks", date: new Date("2024-01-15"), time: "11:00", cause: "Twist" } } }
) 