
// GAME PLAN
// When a user inputs an ingredient, the Edamame API will be searched and ingredient cards will pop up

// hhttps://api.edamam.com/search?q=chicken&app_id=c15f679d&app_key=2a62acb5a7780e9c7c4b6a7a3a70831d
// open up in terminal "cd ~/Desktop/Final_Project && python -m SimpleHTTPServer 8000"

// &health= <--filter
// EXAMPLE - https://api.edamam.com/search?app_id=yourappid&app_key=yourappkey&q=butter&diet=low-carb&diet=high-protein

//Variables for constructed API link
const API_BASE = "https://api.edamam.com/search";
const APP_ID = "c15f679d";
const APP_KEY = "2a62acb5a7780e9c7c4b6a7a3a70831d";


const vegetarian = "&health=vegetarian";
const vegan = "&health=vegan";
const pescatarian = "&health=pescatarian";
const glutenfree = "&health=gluten-free";
const nutAllergy = ["&health=tree-nut-free", "&health=sesame-free", "&health=peanut-free"];
const shellfishAllergy = ["&health=crustacean-free", "&health=shellfish-free"];
const milkAllergy = "&health=dairy-free";


// const allergies = [shellfishAllergy, nutAllergy, milkAllergy];
// const diets = ["vegan", "vegetarian", "pescatarian", "gluten-free"]


console.log('fetching info...')


function getRecipe(searchQuery, filters) {
console.log(filters);
	//Clear results
	$('.js-results').html('');
	$('.buttons').html('');

	//Get API function
	const getAPICall = `${API_BASE}?&q=${searchQuery}app_id=${APP_ID}&app_key=${APP_KEY}${filters}`;
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

const $searchBar = $('.js-search');
const $searchButton = $('.js-searchButton');
const $searchForm = $('.js-search-form');


$searchForm.on ('submit', e => {
	e.preventDefault();
});

$searchButton.on ('click', e => {

	const $vegetarian = $('.js-nuts');
	const $milk = $('.js-milk');
	const $shellfish = $('.js-shellfish');
	const $nuts = $('.js-nuts');
	const $milk = $('.js-milk');
	const $shellfish = $('.js-shellfish');

	let additionalArgs = '';

	console.log($nuts.checked);

	if($nuts.is(':checked')) {
		additionalArgs += nutAllergy.join("")
	}
	else if($milk.is(':checked')) {
		additionalArgs += milkAllergy.join("")
	}
	else if($shellfish.is(':checked')) {
		additionalArgs += shellfishAllergy.join("")
	}

	getRecipe($searchBar.val(), additionalArgs);
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



