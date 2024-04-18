const { faker } = require("@faker-js/faker");
const MongoClient = require("mongodb").MongoClient;

// Seed the database with fake data inside the users collection
async function seedDB() {
	const uri = "mongodb://127.0.0.1:27017,127.0.0.1:27018,127.0.0.1:27019/?replicaSet=rs0";
	
	const client = new MongoClient(uri);

	try {
		await client.connect();

		const database = client.db("test");
		const collection = database.collection("users");

		const users = [];

		for (let i = 0; i < 100; i++) {
			users.push({
				name: faker.person.firstName(),
				age: faker.number.int({ min: 18, max: 60 }),
				email: faker.internet.email(),
				createdAt: new Date(),
			});
		}

		await collection.insertMany(users);
	} catch (error) {
		console.error(error);
	}

	client.close();
}

// retrieve all users whose age is greater than 30
async function getUsers() {
	const uri = "mongodb://127.0.0.1:27017,127.0.0.1:27018,127.0.0.1:27019/?replicaSet=rs0";
	
	const client = new MongoClient(uri);

	try {
		await client.connect();

		const database = client.db("test");
		const collection = database.collection("users");
		
		const users = await collection.find({ age: { $gt: 30 } }).toArray();
		console.log(users);
	} catch (error) {
		console.error(error);
	}

	client.close();
}

// update all users by incrementing their age by 5
async function updateUsers() {
	const uri = "mongodb://127.0.0.1:27017,127.0.0.1:27018,127.0.0.1:27019/?replicaSet=rs0";
	
	const client = new MongoClient(uri);

	try {
		await client.connect();

		const database = client.db("test");
		const collection = database.collection("users");
		
		await collection.updateMany({}, { $inc: { age: 5 } });

		const users = await collection.find({}).toArray();
		console.log(users);
	} catch (error) {
		console.error(error);
	}

	client.close();
}

// delete all users whose age is less than 30
async function deleteUser() {
	const uri = "mongodb://127.0.0.1:27017,127.0.0.1:27018,127.0.0.1:27019/?replicaSet=rs0";
	
	const client = new MongoClient(uri);

	try {
		await client.connect();

		const database = client.db("test");
		const collection = database.collection("users");
		
		await collection.deleteMany({ age: { $lt: 30 } });
	} catch (error) {
		console.error(error);
	}

	client.close();
}

seedDB();
getUsers();
updateUsers();
deleteUser();