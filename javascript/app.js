
// GAME PLAN
// When a user inputs an ingredient, the Edamame API will be searched and ingredient cards will pop up

// https://api.edamam.com/search?app_id=c15f679d&app_key=2a62acb5a7780e9c7c4b6a7a3a70831d&q=chicken
// open up in terminal "cd ~/Desktop/Final_Project && python -m SimpleHTTPServer 8000"

// "&diet=" <-- filter
// EXAMPLE - https://api.edamam.com/search?app_id=yourappid&app_key=yourappkey&q=butter&diet=low-carb&diet=high-protein

//Variables for constructed API link
const API_BASE = "https://api.edamam.com/search";
const APP_ID = "c15f679d";
const APP_KEY = "2a62acb5a7780e9c7c4b6a7a3a70831d";

const diets = ["vegan", "vegetarian", "pescatarian", "gluten-free"]
const nutAllergy = ["tree-nut-free", "sesame-free", "peanut-free"]
const shellfishAllergy = ["crustacean-free", "shellfish-free"];
const milkAllergy = "dairy-free";
const allergies = [shellfishAllergy, nutAllergy, milkAllergy];

// &health=${healthQuery}

console.log('fetching info...')


function getRecipe(searchQuery) {

	//Clear results
	$('.js-results').html('');
	$('.buttons').html('');

	//Get API function
	const getAPICall = `${API_BASE}?app_id=${APP_ID}&app_key=${APP_KEY}&q=${searchQuery}`;
	const $resultsContainer = $('.js-results')
	
	$.get(getAPICall, data => {
	console.log('data is...', data)

	const recipes = data.hits;
	console.log('results are...', recipes)

	for (let i = 0; i < recipes.length; i++) {
		console.log('recipes=', recipes[i]);

		const recipeImage = recipes[i].recipe.image;
		const recipeURL = recipes[i].recipe.url;
		const recipeTitle = recipes[i].recipe.label;
		const recipeSource = recipes[i].recipe.source;
		const receipeDietLabel = recipes[i].recipe.dietLabels;

		console.log('recipes are=', recipeImage, recipeURL, recipeTitle);
		$resultsContainer.append( 
			'<div class="col"' +
				'<div class="card">' + 
					'<a href="'+recipeURL+'" target="_blank">' + '<img src="'+recipeImage+'">' +
					'<div class="card-body">' +
						'<h5 class="card-title">'+recipeTitle+'</h5>' +
						'<p class="card-text">'+recipeSource+'</p>' +
						'<p class="diet-label card-text">'+receipeDietLabel+'</p>' +
					'</div>' +
				'</div>' +
			'</div>')
	}
});
}

//search input




// function allergyIsChecked() {
	

// 	// if ($nuts === false && $milk === false && $shellfish === false) {
// 	// 	return false;
// 	// }
// 	if ($nuts === true) {
// 		console.log(trueeeeee);
// 	}


//}


const $nuts = $('.js-nuts').checked;
const $milk = $('.js-milk').checked;
const $shellfish = $('.js-shellfish').checked;

function checkForNutAllergy () {
	$nuts.on ('change', e => {
		if($nuts.checked) {
			console.log('true');
			return true;
		}
		else {
			console.log('false');
			return false;
		}
	});
}

const $searchBar = $('.js-search');
const $searchButton = $('.js-searchButton');
const $searchForm = $('.js-search-form');


$searchForm.on ('submit', e => {
	e.preventDefault();
});

$searchButton.on ('click', e => {
	getRecipe($searchBar.val());

		if (checkForNutAllergy === true) {
			console.log('it works!');
		}
});




//Build OUTPUT

//$resultsContainer.append(`<a href="${recipeURL}" target="_blank"><img src="${recipeImage}">`)

// <div class="card">
// 				<a href="recipeURL" target="_blank"<img src="recipeImage">
// 				<div class="card-body">
// 					<h5 class="card-title">recipeTitle</h5>
// 					<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
// 				</div>
// 			</div>

// function getOutput(recipes[i]) {

// 	const recipeImage = recipes[i].recipe.image;
// 	const recipeURL = recipes[i].recipe.url;
// 	const recipeTitle = recipes[i].recipe.label;

// 	//Build Output String

// 	let output = `<a href="${recipeURL}" target="_blank"><img src="${recipeImage}">`;

// };

// CREATE card object

// let card = new Object {
// 	image: recipeImage,
// 	url: recipeURL,
// 	title: recipeTitle
// };


// CARD GENERATOR



