//const MongoClient =require('mongodb').MongoClient;

const {MongoClient,ObjectID} =require('mongodb');
var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
	if (err) {
		return console.log('Unable to Connect MongoDB server');
	}
	console.log('Connected');

	// db.collection('Todos').insertOne({
	// 	text: 'Something',
	// 	completed: false
	// },(err,result) => {
	// 	if(err){
	// 		return console.log('Unable to insert',err);
	// 	}
	// 	console.log(JSON.stringify(result.ops,undefined,2));
	// });

	db.collection('Users').insertOne({
		name: 'Badri',
		age: 25,
		location : 'CA'
	},(err,result) =>{
		if(err){
			return console.log('Unable to insert',err);	
		}
		console.log(JSON.stringify(result.ops,undefined,2));
	});

	db.close();
});