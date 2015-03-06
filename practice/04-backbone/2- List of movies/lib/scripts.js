
        Handlebars.registerHelper('length', function(list) {
          return list.length;
        });

        var data = {
            title : "Some movies you gotta see",
            description : "according to IMDB....",
            info: {
                date: "2010",
                
            },
            movies: [
                
                {
                    name: "Inception",
                    rating: "8,8",
                    director: "Christopher Nolan",
                    genre: "Science Fiction",
                    plot: "A thief who steals corporate secrets through use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
                    year: "2010"
                },
                
                {
                    name: "The Dark Knight",
                    rating: "9.0",
                    director: "Christopher Nolan",
                    genre: "Drama",
                    plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
                    year: "2008"
                },
                {
                    name: "Waking Life",
                    rating: "7.8",
                    director: "Richard Linklater",
                    genre: "Drama",
                    plot: "A man shuffles through a dream meeting various people and discussing the meanings and purposes of the universe.",
                    year: "2001"
                }
            
            ]
        };

        var template = document.getElementById("movies-tmp").innerHTML;


        var templateCompile = Handlebars.compile(template);


        var result = templateCompile(data);

        document.body.insertAdjacentHTML("beforeend", result);
