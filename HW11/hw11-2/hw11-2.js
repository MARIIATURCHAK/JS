// – взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// // Інгредієнти повинні бути списком під час відображення.
const recipesDiv = document.getElementById('recipes');
fetch('https://dummyjson.com/recipes')
    .then(value => value.json())
    .then(recipesObject => {
        const {recipes} = recipesObject;
        console.log(recipes)
            for (const recipe of recipes) {
                const contDiv = document.createElement('div');
                contDiv.classList.add('recipeContainer');
                const recipeInfo = document.createElement('div');
                recipeInfo.innerHTML = `
                    <h3>Id: ${recipe.id}</h3>
                    <p><strong>Name:</strong> ${recipe.name}</p>
                    <p><strong>Difficulty:</strong> ${recipe.difficulty}</p>
                    <p><strong>Calories per Serving:</strong> ${recipe.caloriesPerServing}</p>
                    <p><strong>Cook Time (minutes):</strong> ${recipe.cookTimeMinutes}</p>
                    <p><strong>Prep Time (minutes):</strong> ${recipe.prepTimeMinutes}</p>
                    <p><strong>Cuisine:</strong> ${recipe.cuisine}</p>
                    <p><strong>Rating:</strong> ${recipe.rating}</p>
                    <p><strong>Review Count:</strong> ${recipe.reviewCount}</p>
                    <p><strong>Servings:</strong> ${recipe.servings}</p>
                    <p><strong>User Id:</strong> ${recipe.userId}</p>
                    <p><strong>Meal Type:</strong> ${recipe.mealType.join(', ')}</p>
                    <p><strong>Tags:</strong> ${recipe.tags.join(', ')}</p>
    `;
                let wrapper = document.createElement('div');
                wrapper.classList.add('wrapper');
                let imgRecipe = document.createElement('img');
                imgRecipe.classList.add('imgRecipe');
                imgRecipe.src = recipe.image;
                let ingredientsTitle = document.createElement('h3');
                ingredientsTitle.textContent = "Ingredients";
                let ulIngredients = document.createElement('ul');
                for (const ingredient of recipe.ingredients) {
                    let liIngredient = document.createElement('li');
                    liIngredient.textContent = ingredient;
                    ulIngredients.appendChild(liIngredient);
                }

                let instructionsTitle = document.createElement('h3');
                instructionsTitle.textContent = "Instructions";

                let olInstructions = document.createElement('ol');
                for (const instruction of recipe.instructions) {
                    let liInstruction = document.createElement('li');
                    liInstruction.textContent = instruction;
                    olInstructions.appendChild(liInstruction);
                }

                wrapper.append(imgRecipe, ingredientsTitle, ulIngredients, instructionsTitle, olInstructions);
                contDiv.append(recipeInfo, wrapper);
                recipesDiv.appendChild(contDiv);
            }
})