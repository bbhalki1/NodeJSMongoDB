//const MongoClient =require('mongodb').MongoClient;

const {MongoClient,ObjectID} =require('mongodb');
// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
	if (err) {
		return console.log('Unable to Connect MongoDB server');
	}
	console.log('Connected');

	// db.collection('Todos').find({
	// 	"_id":new ObjectID('59a588f1f9759acbb28af28b')
	// }).toArray().then((docs) => {
	// 	console.log('Todos'),
	// 	console.log(JSON.stringify(docs,undefined,2));
	// },(err) => {
	// 	console.log('unable to fetch', err);
	// });

	db.collection('Todos').find().count().then((count) => {
		console.log(`Todos count : ${count}`)
		//console.log(JSON.stringify(docs,undefined,2));
	},(err) => {
		console.log('unable to fetch', err);
	});

	//db.close();
});