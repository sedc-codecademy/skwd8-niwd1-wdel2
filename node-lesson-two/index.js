// user model
// db service
// user servicea

async function main() {
    const User = require('./src/models/User');
    const db = require('./src/db/Database');
    const me = new User({name: 'Aleksandar', dateOfBirth: 1993});
    // await db.create(me);
    // const readUser = await db.findUser(1603392402201);
    // console.log(readUser);

}

main();
