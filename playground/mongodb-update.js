//const MongoClient =require('mongodb').MongoClient;

const {MongoClient,ObjectID} =require('mongodb');
// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
	if (err) {
		return console.log('Unable to Connect MongoDB server');
	}
	console.log('Connected');

	db.collection('Todos').findOneAndUpdate({
		_id: new ObjectID("59a588f1f9759acbb28af28b")
	},{
		$set:{
			completed: true
		}	
	},{
		returnOriginal: false
	}).then((result) =>{
		console.log(result)
	});
	//db.close();
});