//All of these comments are little experiments that they had us do during the course of the lesson
//$("#main").append(["Tom Hill"]);

//var firstName = "james";
//var age = 32;
//console.log(firstName);

//var awesomeThoughts = "I am tom and I am AWESOME!"
//console.log(awesomeThoughts);

//var email = "someone@somewhere.com";

//var newEmail = email.replace("somewhere", "elsewhere");

//console.log("old email: "+email);
//console.log("new email: "+newEmail);

//var funThoughts = awesomeThoughts.replace("AWESOME","FUN")
//$("#main").append(funThoughts);


// var s = "audacity";
// var udacityizer = function(s) {
//	// return "U" + s.slice(2);
//	return s[1].toUpperCase() + s.slice(2);
// }

// console.log("the name: " + s);
// console.log("new name: " + udacityizer(s));

// var a = ["one", "two", "three"];
// console.log("length: "+ a.length);

// var n = [1,2,3,4];
// n[n.length-1] = n[n.length-1] + 1;

// console.log("array test:");
// console.log(n);

// var inName = "cAmEROn PittMAN";
// var names = inName.split(' ');
// var first = names[0].toLowerCase();
// var initial = first[0].toUpperCase();
// var rest = first.slice(1);
// console.log("initial: " + initial);
// console.log("rest: " + rest);
// var last = names[1].toUpperCase();
// var finalName = initial + rest + " " + last;
// console.log ("inName: " + inName);
// console.log ("final: " + finalName);

	// var str = "This is a <b>string</b> with some serious <html> in it."
	// console.log("before: "+str);
	// var newStr = str.replace(/</g,"&lt;").replace(/>/g,"&gt;");
	// console.log("after:  "+newStr);
// $("#workExperience").append(HTMLworkStart);
// var formattedPosition = HTMLworkTitle.replace("%data%", str);
// $("#workExperience").append(formattedPosition);

// $("#education").append(HTMLschoolStart);
// var formattedSchool = HTMLschoolName.replace("%data%", newStr);
// $("#education").append(formattedSchool);


//Here's a test:
var weirdObject = {
    "property": "Time for an astronomy lesson!",
    "property1": "Cameron's minor in college was astronomy",
    "property-2": "The 4 Galilean largest moons of Jupiter are:",
    "property 3": "Io, Ganymede, Callisto, Europa",
    "property$": "Saturn's moon Enceladus has liquid water ocean under its icy surface",
    " property": "The Sun contains 99.87% of the mass of the entire solar system",
    "property()": "There are 5 dwarf planets in our solar system:",
    "property[]": "Pluto, Ceres, Eris, Haumea, Makemake",
    "8property": "Mars has two tiny moons: Phobos and Deimos"
};
console.log("'property.' "+weirdObject.property);
console.log("'property[]' "+weirdObject["property"]);
console.log("'property1.' "+weirdObject.property1);
console.log("'property1[]' "+weirdObject["property1"]);
//console.log("'property-2.' "+weirdObject.property-2);
console.log("'property-2[]' "+weirdObject["property-2"]);
//console.log("'property 3.' "+weirdObject.property 3);
console.log("'property 3[]' "+weirdObject["property 3"]);
console.log("'property$.' "+weirdObject.property$);
console.log("'property$[]' "+weirdObject["property$"]);
//console.log("' property.' "+weirdObject. property);
console.log("' property[]' "+weirdObject[" property"]);
//console.log("'property().' "+weirdObject.property());
console.log("'property()[]' "+weirdObject["property()"]);
//console.log("'property[].' "+weirdObject.property[]);
console.log("'property[][]' "+weirdObject["property[]"]);
//console.log("'8property.' "+weirdObject.8property);
console.log("'8property[]' "+weirdObject["8property"]);


//A test...
var listElements;
listElements = $('ul');
console.log(listElements);


