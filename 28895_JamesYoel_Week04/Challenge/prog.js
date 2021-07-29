var name = window.prompt('Hero what is your name?');
console.log('Hero '+name+' is ready for an adventure');
var level = 1;
var recruit = [];

var list_class = [
	"Swordman",
	"Paladin",
	"Archer",
	"Thief",
	"Magician",
	"Summoner",
	"Warlock",
	"Bard"
];

function onDocumentFinish () {
	document.getElementById("hero_name").innerHTML = "Name  : "+name;
	document.getElementById("hero_lvl").innerHTML = "Level 	: "+level;
	document.getElementById("recruit").innerHTML = "Recruits : "+recruit.length;
	var class_option = document.getElementById('class_option')
	list_class.forEach((elem,index) => {
	      new_option = document.createElement('option');
	      new_option.value = index;
	      new_option.label = elem;
	      class_option.appendChild(new_option);
	});
}

function LevelUp() {
	document.getElementById("hero_lvl").innerHTML = "Level 	: "+level++;
	console.log('The hero level is increased by 1');
}

document.getElementById('submit').onsubmit = function(form){
	form.preventDefault();
	var hero_recruit = {
			name  : document.getElementById("Name").value,
			level : document.getElementById("Level").value,		
			class : document.getElementById("class_option").value
		};
	if(hero_recruit.level > level) {
		alert("Your level need to be higher than your recruits!")
		console.log('You failed to recruit a Lv. '+newHero.level+' '+list_class[newHero.class]);
	}else {
		add_recruit(hero_recruit);
		console.log(hero_recruit.name+' a LV.'+hero_recruit.level+' '+list_class[hero_recruit.class]+' is recruited');
	}
};

function add_recruit(new_recruit) {
	recruit.push(new_recruit);
	document.getElementById("recruit").innerHTML = "Recruits : "+recruit.length;
	var table = document.getElementById('recruit_table').getElementsByTagName('tbody')[0];
	var new_row   = table.insertRow();
	var name_cell  	= new_row.insertCell(0);
	var lvl_cell  	= new_row.insertCell(1);
	var class_cell  	= new_row.insertCell(2);
	name_cell.appendChild(document.createTextNode(new_recruit.name));
	lvl_cell.appendChild(document.createTextNode(new_recruit.level));
	class_cell.appendChild(document.createTextNode(list_class[new_recruit.class]));

}