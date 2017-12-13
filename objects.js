var zheton = {
	name: 'Zheton',
	sayName: function() {
		console.log(this); //returns object itself
	}
}

var zheton = {
	name: 'Zheton',				//property
	sayName: function() {		//method
		console.log(this.name); //returns defined property (method)
	}
}
