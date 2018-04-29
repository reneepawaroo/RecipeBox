// https://api.edamam.com/search?app_id=c15f679d&app_key=2a62acb5a7780e9c7c4b6a7a3a70831d&q=chicken
// open up in terminal "cd ~/Desktop/Final_Project && python -m SimpleHTTPServer 8000"

// "&diet=" <-- filter
// EXAMPLE - https://api.edamam.com/search?app_id=yourappid&app_key=yourappkey&q=butter&diet=low-carb&diet=high-protein

const API_BASE = "https://api.edamam.com/search";
const APP_ID = "c15f679d";
const APP_KEY = "2a62acb5a7780e9c7c4b6a7a3a70831d";


console.log('fetching info...')


function getRecipe(searchQuery) {

	//Clear results
	$('.js-results').html('');
	$('.buttons').html('');


	const getAPICall = `${API_BASE}?app_id=${APP_ID}&app_key=${APP_KEY}&q=${searchQuery}`;
	const $resultsContainer = $('.js-results')
	$.get(getAPICall, data => {
	console.log('data is...', data)

	const recipes = data.hits;
	console.log('results are...', recipes)

	const recipeImage = recipes[i].recipe.image;
	const recipeURL = recipes[i].recipe.url;
	const recipeTitle = recipes[i].recipe.label;

	for (let i = 0; i < recipes.length; i++) {
		console.log('recipes=', recipes[i]);
		console.log('recipes are=', recipeImage, recipeURL, recipeTitle);
		$resultsContainer.append(`<img src="${recipeImage}">`)
	}
});
}

// search input

const $search = $('.js-search');
const $submitButton = $('.js-submitButton');

$submitButton.on('click', e => {
	console.log('submitted')
	getRecipe($search.val())
})




// GAME PLAN

// When a user inputs an ingredient, the Edamame API will be searched and ingredient cards will pop up

// SEARCH ENGINE

// 1. INPUT text into the search
// 2. FIND text in the API using a for loop
// 3. GENERATE link for recipe


// CARD GENERATOR

// CREATE card object

