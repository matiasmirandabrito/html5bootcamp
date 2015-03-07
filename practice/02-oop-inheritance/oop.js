//Observer Patternss
function ObserverMovie(){

	this.observermovie = [];

};

ObserverMovie.prototype.add = function(obj){

	this.observermovie.push(obj);
};

ObserverMovie.prototype.count = function(){

	return this.observermovie.length;	
};

ObserverMovie.prototype.get = function (index){

	if(index > -1 && index < this.observermovie.length ){


		return this.observermovie[index];			
	}
};

ObserverMovie.prototype.indexOf = function (obj , start){
	
	return this.observermovie.indexOf(obj, start);
};

ObserverMovie.prototype.removeAt = function(index){
	this.observermovie.splice( index, 1);	
}; 

var Observer = function(){

	this.update = function(title,action){

		console.log(title + " " + action);
}

};
//These are the first 6 exercises with the constructor and observer pattern
var Movie = function(){
	this.attributes= {'title': '','director': '', 'duration': '', 'actors':''} ;
	this.listObservers = new ObserverMovie();
	
};
Movie.prototype.set = function(atribute,val){

		this.attributes[atribute] = val;
};
Movie.prototype.get = function(atribute){

	return  this.attributes[atribute];
};
Movie.prototype.play =  function(){

	this.notify(this.attributes['title'] , 'is playing');
};
Movie.prototype.stop = function(){

	this.notify(this.attributes['title'] , 'stoped');

};
Movie.prototype.addObserver = function (observer){
	this.listObservers.add(observer)
};
Movie.prototype.removeObserver = function(observer){
	this.listObservers.removeAt(this.listObservers.indexOf(observer, 0))
};
Movie.prototype.notify = function (title, action){
	var observerCount = this.listObservers.count();
	for(var i=0; i< observerCount ; i++){
		this.listObservers.get(i).update(title, action);
	}
};
/*
Tested:
var harry = new Movie();
var observer = new Observer();
harry.set('title','Harry Potter 1')
harry.set('director','Chris Columbus')
harry.set('duration','160min')
harry.get(); //output (title: harry potter, director: Chris Columbus , duration: 160min )
harry.addObserver(observer);
harry.play(); //output "Harry Potter is playing"
harry.stop(); //output "Harry Potter stoped"
*/

/*Exercise 7 
Module Patterns

var movies = (function(){

	var attributes= {'title': '','director': '', 'duration': ''};
	var mobservers = new ObserverMovie();
	var observer = new MoObserver();

	set = function(atribute,val){

		attributes[atribute] = val;
	}
	get = function(){

			return  attributes['title'];
	}
	play =  function(){
		observer.update(attributes['title'],'playing');
	}
	stop = function(){
		observer.update(attributes['title'],'stoped');
	}

	addObserver = function (observer){
		mobservers.add(observer);
	};

	removeObserver = function(observer){
		mobservers.removeAt(mobservers.indexOf(observer, 0))
	};

	notify = function (){
	var observerCount = mobservers.count();
	for(var i=0; i< observerCount ; i++){
		mobservers.get(i).update(action);
		console.log(action);
	}
	};

	return{

		set: set,
		get: get,
		play: play,
		stop: stop,
		addObserver: addObserver,
		removeObserver: removeObserver,
		notify: notify
	};
}());
Tested
var harry = new Movie();
var observer = new MoObserver();
movies.set('title','Harry Potter 1')
movies.set('director','Chris Columbus')
movies.set('duration','160min')
movies.get();// output "Harry Potter 1"
movies.addObserver(observer);
harry.play(); // "Harry Potter is playing"
harry.stop(); // "Harry Potter is stoped"
*/
//Exercises 11 and 12
var Actor = function(){
	this.name = "";
}
/*
var harryp = new Actor();
harryp.this.name = "Daniel Radcliffe";
var ron = new Actor();
ron.name = "Rupert Grint"
harry.set=('actors',[harryp.name,ron.name]);
*/
//Exercise 9
var DownloadableMovie = function(){};
DownloadableMovie.prototype = new Movie();
DownloadableMovie.prototype.constructor = DownloadableMovie;
DownloadableMovie.prototype.download = function(){
	console.log('Downloading' + this.attributes['title']);
};
//Mixin Exercises 9 and 10
var Social={
  share:function(friendName){
   	console.log("Sharing"+" "+this.attributes['title']+" with"+" "+friendName);
  },
  like:function(){
  	console.log("Like this...");
  }
};

$.extend(true, Movie.prototype, Social );
/*
var harry = new Movie();
harry.set('title','Harry Potter 1');
harry.share('Santaigo'); //Outuput "Sharing Harry Potter 1 with Santiago"
*/





