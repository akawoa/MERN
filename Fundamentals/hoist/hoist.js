//1
console.log(hello);                                   
var hello = 'world';                                 

//undefined
//hello = "world"

//2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

//needle = "haystack"
//test () { needle = "magnet"; 
//magnet


//3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//brendan = "super cool"
//print function
//brendan = "only okay"
//only okay

//4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

//food = "chicken"
//chicken
//eat = undefinded
//function eat
//food = "half-chicken"
//half-chicken
//food = gone


//5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

//mean = undefined
//food = undefined
//mean function
//food variable missing const, let, or var
//food = undefined
// food = fish
//fish



//6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//genre = undefined
// genre = "disco"
//rewind function = undefined
//function rewind
//genre = "rock"
//rock
//genre = r&b
//r&b

//7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//dojo = "san jose"
//san jose
//learn = undefined
//function learn
//dojo = "seattle"
//seattle


//8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

//makeDojo is undefined
//makeDojo is undefined
//function makeDojo
//const dojo = empty object
//dojo.name = undefined
//dojo.students = undefined
