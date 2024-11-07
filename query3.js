// List the players that either scored 25 goals and won at least a ballon d'or as trophy 

db.Player.find({
    $or: [
        { "statistics.goals": { $gt: 25 } },
        { "trophy.name": "Ballon d'Or" }
    ]
})