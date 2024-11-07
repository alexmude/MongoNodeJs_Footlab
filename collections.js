db.Player.insertMany( [{
    _id: 1,
    name: { first: "Lionel", last: "Messi", surname: "Leo" },
    description: "One of the best players in the world",
    DOB: new Date("1987-06-24"),
    statistics: [
        { statistics_id: 1, goals: 30, assists: 10, penalty_scored: 5, yellow_card: 3, red_card: 0, game_played: 25, season_year: 2023, competition: "LaLiga", team: "Barcelona" }
    ],
    trophy: [{ trophy_id: 1, name: "Ballon d'Or" }],
    team: [{ team_id: 1, name: "Barcelona", type: "club" }],
    injury: [
        { injury_id: 1, name: "Hamstring Strain", type: "Muscle", duration: "2 weeks", date: new Date("2023-03-15"), time: "15:00", cause: "Overexertion" }
    ]
},
{
    _id: 2,
    name: { first: "Cristiano", last: "Ronaldo", surname: "CR7" },
    description: "Legendary player with multiple records",
    DOB: new Date("1985-02-05"),
    statistics: [
        { statistics_id: 2, goals: 25, assists: 8, penalty_scored: 7, yellow_card: 2, red_card: 1, game_played: 23, season_year: 2023, competition: "Serie A", team: "Juventus" }
    ],
    trophy: [{ trophy_id: 2, name: "Champions League" }],
    team: [{ team_id: 2, name: "Juventus", type: "club" }]
},
{
    _id: 3,
    name: { first: "Kylian", last: "Mbappé", surname: "Mbappe" },
    description: "Young and talented forward",
    DOB: new Date("1998-12-20"),
    statistics: [
        { statistics_id: 3, goals: 27, assists: 12, penalty_scored: 4, yellow_card: 1, red_card: 0, game_played: 28, season_year: 2023, competition: "Ligue 1", team: "PSG" }
    ],
    trophy: [{ trophy_id: 3, name: "World Cup" }],
    team: [{ team_id: 3, name: "PSG", type: "club" }],
    injury: [
        { injury_id: 3, name: "Knee Bruise", type: "Bruise", duration: "1 week", date: new Date("2023-05-10"), time: "18:00", cause: "Collision" }
    ]
},
{
    _id: 4,
    name: { first: "Neymar", last: "Jr", surname: "Ney" },
    description: "Creative and skilled Brazilian forward",
    DOB: new Date("1992-02-05"),
    statistics: [
        { statistics_id: 4, goals: 18, assists: 15, penalty_scored: 6, yellow_card: 4, red_card: 1, game_played: 22, season_year: 2023, competition: "Ligue 1", team: "PSG" }
    ],
    trophy: [{ trophy_id: 4, name: "Olympic Gold Medal" }],
    team: [{ team_id: 3, name: "PSG", type: "club" }]
},
{
    _id: 5,
    name: { first: "Kevin", last: "De Bruyne", surname: "KDB" },
    description: "Skillful playmaker known for his vision",
    DOB: new Date("1991-06-28"),
    statistics: [
        { statistics_id: 5, goals: 15, assists: 20, penalty_scored: 3, yellow_card: 2, red_card: 0, game_played: 24, season_year: 2023, competition: "Premier League", team: "Manchester City" }
    ],
    trophy: [{ trophy_id: 5, name: "Premier League" }],
    team: [{ team_id: 4, name: "Manchester City", type: "club" }],
    injury: [
        { injury_id: 5, name: "Hamstring Tear", type: "Muscle", duration: "4 weeks", date: new Date("2023-07-05"), time: "14:00", cause: "Overstretching" }
    ]
},
{
    _id: 6,
    name: { first: "Robert", last: "Lewandowski", surname: "Lewy" },
    description: "Prolific goal scorer",
    DOB: new Date("1988-08-21"),
    statistics: [
        { statistics_id: 6, goals: 34, assists: 6, penalty_scored: 8, yellow_card: 1, red_card: 0, game_played: 26, season_year: 2023, competition: "Bundesliga", team: "Bayern Munich" }
    ],
    trophy: [{ trophy_id: 6, name: "Golden Boot" }],
    team: [{ team_id: 5, name: "Bayern Munich", type: "club" }]
},
{
    _id: 7,
    name: { first: "Sergio", last: "Ramos", surname: "Ramos" },
    description: "Aggressive defender known for leadership",
    DOB: new Date("1986-03-30"),
    statistics: [
        { statistics_id: 7, goals: 5, assists: 2, penalty_scored: 3, yellow_card: 10, red_card: 2, game_played: 20, season_year: 2023, competition: "LaLiga", team: "Real Madrid" }
    ],
    trophy: [{ trophy_id: 7, name: "Champions League" }],
    team: [{ team_id: 6, name: "Real Madrid", type: "club" }],
    injury: [
        { injury_id: 7, name: "Calf Strain", type: "Muscle", duration: "2 weeks", date: new Date("2023-09-05"), time: "16:00", cause: "Sprint" }
    ]
},
{
    _id: 8,
    name: { first: "Virgil", last: "van Dijk", surname: "VVD" },
    description: "Commanding center-back",
    DOB: new Date("1991-07-08"),
    statistics: [
        { statistics_id: 8, goals: 3, assists: 1, penalty_scored: 0, yellow_card: 2, red_card: 0, game_played: 22, season_year: 2023, competition: "Premier League", team: "Liverpool" }
    ],
    trophy: [{ trophy_id: 8, name: "Premier League" }],
    team: [{ team_id: 7, name: "Liverpool", type: "club" }]
},
{
    _id: 9,
    name: { first: "Mohamed", last: "Salah", surname: "Mo" },
    description: "Quick and skillful forward",
    DOB: new Date("1992-06-15"),
    statistics: [
        { statistics_id: 9, goals: 28, assists: 9, penalty_scored: 7, yellow_card: 1, red_card: 0, game_played: 26, season_year: 2023, competition: "Premier League", team: "Liverpool" }
    ],
    trophy: [{ trophy_id: 9, name: "Golden Boot" }],
    team: [{ team_id: 7, name: "Liverpool", type: "club" }],
    injury: [
        { injury_id: 9, name: "Shoulder Dislocation", type: "Joint", duration: "3 weeks", date: new Date("2023-11-01"), time: "20:00", cause: "Fall" }
    ]
},
{
    _id: 10,
    name: { first: "Luka", last: "Modric", surname: "Luka" },
    description: "Midfield maestro",
    DOB: new Date("1985-09-09"),
    statistics: [
        { statistics_id: 10, goals: 4, assists: 14, penalty_scored: 1, yellow_card: 2, red_card: 0, game_played: 24, season_year: 2023, competition: "LaLiga", team: "Real Madrid" }
    ],
    trophy: [{ trophy_id: 10, name: "Ballon d'Or" }],
    team: [{ team_id: 6, name: "Real Madrid", type: "club" }]
}])