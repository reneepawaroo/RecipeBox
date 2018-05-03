
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


console.log('fetching info...')


function getRecipe(searchQuery, filters) {
console.log(filters);
	//Clear results
	$('.js-results').html('');
	$('.buttons').html('');

	//Get API function
	const getAPICall = `${API_BASE}?&q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_KEY}${filters}&to=15`;
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
		$resultsContainer.append(` 
	<div class="col">
		<a href="${recipeURL}" class="card" target="_blank">
			<img src="${recipeImage}" alt="Recipe" class="recipeImage">
			<div class="card-body">
				<h5 class="card-title">${recipeTitle}
				</h5>
				<p class="card-text">${recipeSource}</p>
				<p class="diet-label card-text">${receipeDietLabel}</p>
			</div>
		</a>
	</div>
		`)
	}
});
}

//search input


const vegetarianFilter = ["&health=vegetarian"];
const veganFilter = ["&health=vegan"];
const balancedFilter = ["&diet=balanced"]
const sugarFilter = ["&health=sugar-conscious"]
const sodiumFilter = ["&diet=low-sodium"]

const carbFilter = ["&diet=low-carb"]
const fatFilter = ["&diet=low-fat"]
const filberFilter = ["&diet=high-fiber"]
const proteinFilter = ["&diet=high-protein"]


const nutAllergy = ["&health=peanut-free", "&health=tree-nut-free"];
//const pescatarianFilter = ["&health=pescatarian"];
//const glutenfreeFilter = ["&health=gluten-free"];
//const shellfishAllergy = ["&health=crustacean-free", "&health=shellfish-free"];
//const milkAllergy = ["&health=dairy-free"];

const $searchBar = $('.js-search');
const $searchButton = $('.js-searchButton');
const $searchForm = $('.js-search-form');


$searchForm.on ('submit', e => {
	e.preventDefault();
});

$searchButton.on ('click', e => {

	const $vegetarian = $('.js-vegetarian');
	const $vegan = $('.js-vegan');
	const $pescatarian = $('.js-pescatarian');
	const $glutenfree = $('.js-glutenFree');

	const $nuts = $('.js-nuts');
	const $milk = $('.js-milk');
	const $shellfish = $('.js-shellfish');

	let additionalArgs = '';

	console.log($nuts.checked);

	if($vegetarian.is(':checked')) {
		additionalArgs += vegetarianFilter.join("")
	}
	if($vegan.is(':checked')) {
		additionalArgs += veganFilter.join("")
	}
	if($pescatarian.is(':checked')) {
		additionalArgs += pescatarianFilter.join("")
	}
	if($glutenfree.is(':checked')) {
		additionalArgs += glutenfreeFilter.join("")
	}
	if($nuts.is(':checked')) {
		additionalArgs += nutAllergy.join("")
	}
	if($milk.is(':checked')) {
		additionalArgs += milkAllergy.join("")
	}
	if($shellfish.is(':checked')) {
		additionalArgs += shellfishAllergy.join("")
	}

	getRecipe($searchBar.val(), additionalArgs);
});

