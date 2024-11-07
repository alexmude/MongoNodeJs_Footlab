// Count the number of players who were in PSG during the 2023 season

db.Player.countDocuments({
    "team.name": "PSG",
    "statistics.season_year": 2023
})