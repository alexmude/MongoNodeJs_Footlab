// Sum up the total goals socred by players in each team 

db.Player.aggregate([
    { $unwind: "$statistics" },
    { $group: { _id: "$statistics.team", total_goals: { $sum: "$statistics.goals" } } },
    { $sort: { total_goals: -1 } }
])