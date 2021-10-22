const { client, getAllUsers } = require('./index');

async function testDB() {
    try {
        client.connect();

        const users = await getAllUsers();

        console.log(users);
    } catch (err) {
        console.error(err);
    } finally {
        client.end();
    }
}

testDB();