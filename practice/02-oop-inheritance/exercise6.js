function Movie(title, year) {

	this.title=title;
	this.year=year;

	this.play = function(){
		console.log( this.title + " is playing...");


	};

	this.stop= function(){
		console.log(this.title+" stopped playing...");

	};

	 this.set= function(string, value){

		if (string==="title") {this.title=value} else{this.year=value};
		
	};

	this.get= function(){

		return this.title;
	};
}

var movie1= new Movie("Terminator",2001);
var movie2 = new Movie("Titanic",2002);
var movie3 = new Movie("Gladiator",2003);
movie1.stop();
movie2.stop();