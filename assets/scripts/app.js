var projects = document.querySelectorAll("img.responsive");
var background = document.querySelectorAll("div.card-back");
 
for (var i = 0; i < projects.length; i++) {
	projects[i].addEventListener('click', function(event) {
		var card = event.target.closest(".project")
		card.classList.remove("hoverable")
		card.firstElementChild.classList.remove("folded")
		card.firstElementChild.classList.add("unfolded")
	}, false);
}

for (var i = 0; i < background.length; i++) {
	background[i].addEventListener('click', function(event) {
		var card = event.target.closest(".project")
		card.firstElementChild.classList.remove("unfolded")
		card.firstElementChild.classList.add("folded")
	}, true);
} 