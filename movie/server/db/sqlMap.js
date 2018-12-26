module.exports = {
    serch: "select * from movies where name = ?;",
    random_movie: "select * from movies where movieId in (?,?,?,?,?,?,?,?);",
    user_verify: "select * from account where account = ? and password =?"
}