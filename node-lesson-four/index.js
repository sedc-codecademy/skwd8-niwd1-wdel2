const { MongoClient } = require('mongodb');

async function main() {
    const client = new MongoClient(
        'mongodb://sedcuser:sedcpass@localhost/main?authSource=main',
        { useUnifiedTopology: true, }
    );
    try {
        const connection = await client.connect();
        const db = connection.db('main');
        // DROP THE ENTIRE COLLECTION, DO NOT DO THIS UNLESS TESTING
        await db.dropCollection('users');
        const usersCollection = db.collection('users');

        await usersCollection.insertOne({name: 'John Doe', email: 'john@doe.com'});
        await usersCollection.insertOne({name: 'Jane Doe', email: 'jane@doe.com'});
        await usersCollection.insertOne({name: 'Mark Doe', email: 'mark@doe.com'});
        await usersCollection.insertOne({name: 'Kelly Doe', email: 'kelly@doe.com'});

        await usersCollection.updateOne({email: 'john@doe.com'}, {
            $set: { name: 'John Michael Doe' }
        });
        await usersCollection.updateOne({email: 'john@doe.com'}, {
            $set: { age: 50 }
        });
        await usersCollection.updateOne({email: 'john@doe.com'}, {
            $unset: { age: null }
        });
        await usersCollection.updateOne({email: 'john@doe.com'}, {
            $push: {
                colors: {
                    $each: ['red', 'green', 'blue']
                }
            }
        });
        await usersCollection.updateOne({email: 'john@doe.com'}, {
            $pull: {
                colors: {
                    $in: ['red', 'green']
                },
            }
        });

        const cursor = usersCollection.find({}, {limit: 4, sort: { email: 1}});

        // using a cursor
        // while(await cursor.hasNext()) {
        //     const user = await cursor.next();
        //     console.log('User:', user.name);
        // }

        // for each 
        // await cursor.forEach(user => {
        //     console.log('User: ', user.name);
        // });

        // all entries
        const users = await cursor.toArray();
        console.log('Users array:', users);

        await connection.close();
    } catch(e) {
        console.log('An error has occured!', e);
    }
};
main();