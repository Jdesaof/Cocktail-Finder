async function fetchCocktail() {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const data = await response.json();
    const cocktail = data.drinks[0];
  
    document.getElementById(
      'cocktail-image',
    ).innerHTML = `<img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}" style="width:100%; height: 100%; border-radius: 10px;">`;
  
    document.getElementById('cocktail-name').textContent = cocktail.strDrink;
  
    document.getElementById('cocktail-receipt').textContent = cocktail.strInstructions;
  
    let ingredients = '';
    for (let i = 1; i <= 15; i++) {
      if (cocktail[`strIngredient${i}`]) {
        ingredients += `${cocktail[`strIngredient${i}`]} - ${cocktail[`strMeasure${i}`] || ''}<br>`;
      }
    }
    document.getElementById('cocktail-ingredients').innerHTML = ingredients;
  }
  