//const MongoClient =require('mongodb').MongoClient;

const {MongoClient,ObjectID} =require('mongodb');
// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
	if (err) {
		return console.log('Unable to Connect MongoDB server');
	}
	console.log('Connected');
	db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result) => {
		console.log(result);
	});

	db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result) => {
		console.log(result);
	});

	db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
		console.log(result);
	});

	//db.close();
});