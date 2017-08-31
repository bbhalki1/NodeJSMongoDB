var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo',{
	text:{
		type: String
	},
	completed:{
		type: Boolean
	},
	completedAt:{
		type: Number
	}
});

// var newTodo = new Todo();

// newTodo.save().then((docs) => {
// 	console.log('Saved ',docs)
// },(e) =>{
// 	console.log('Error', e)
// });

var otherTodo = new Todo({
	text: 'Drink Coffee',
	completed: true
});

otherTodo.save().then((docs) => {
	console.log(JSON.stringify(docs,undefined,2))
},(e) => {
	console.log('Error', e)
});

var Users = mongoose.model('Users',{
	email:{
		type: String,
		required: true,
		trim: true,
		minLength:1
	}
});

var newUser = new Users({
	email: 'Badri@gmail.com'
});

newUser.save({}).then((docs) => {
	console.log(JSON.stringify(docs,undefined,3))
},(e)=>{
	console.log('Error', e)
});