// #whXxOBlYS0H
// – взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// Інгредієнти повинні бути списком під час відображення.

const url = new URL("https://dummyjson.com/recipes");
let template = document.getElementById("template");
fetch(url).then(res => res.json()).then(objRecipes => {
    const {recipes} = objRecipes;
    recipes.forEach(recipe => {
        const container = document.createElement("div");
        const titleRecipe = document.createElement("h2");
        titleRecipe.innerText = `${recipe.id} - ${recipe.name}`;
        const ingredientTitle = document.createElement("h3");
        ingredientTitle.innerText = `ingredients:`;
        const listIngredients = document.createElement("ul");
        for (const ingredient of recipe.ingredients) {
            const ingredientEl = document.createElement("li");
            ingredientEl.innerText = `${ingredient}`;
            listIngredients.appendChild(ingredientEl);
        }
        const instructionTitle = document.createElement("h3");
        instructionTitle.innerText = `Instructions:`;
        const listInstructions = document.createElement("ul");
        for (const instruction of recipe.instructions) {
            const instructionEl = document.createElement("li");
            instructionEl.innerText = `${instruction}`;
            listInstructions.appendChild(instructionEl);
        }
        const descriptions = document.createElement("div");
        const descItem = document.createElement("p");
        descItem.innerText = `
        "prep time minutes": ${recipe.prepTimeMinutes}
        "cook time minutes": ${recipe.cookTimeMinutes}
        "servings": ${recipe.servings}
        "difficulty": ${recipe.difficulty}
        "cuisine": ${recipe.cuisine}
        "calories per serving": ${recipe.caloriesPerServing}
        "userId": ${recipe.userId}
        "rating": ${recipe.rating}
        "review count": ${recipe.reviewCount}
        `;
        const tagTitle = document.createElement("p");
        tagTitle.innerText = `"tags":`;
        const tagList = document.createElement("ul");
        for (const tag of recipe.tags) {
          const tagEl = document.createElement("li");
          tagEl.innerText = `${tag}`;
            tagList.appendChild(tagEl);
        }
        const typeTitle = document.createElement("p");
        const typeList = document.createElement("ul");
        typeTitle.innerText = `"meal type":`;
        for (const type of recipe.mealType) {
            const typeEl = document.createElement("li");
            typeEl.innerText = `${type}`;
           typeList.appendChild(typeEl);
        }
        const imgRecipe = document.createElement("img");
        imgRecipe.src = `${recipe.image}`;
        descriptions.append(descItem,tagTitle, tagList,typeTitle, typeList, imgRecipe);
        container.append(titleRecipe, ingredientTitle, listIngredients, instructionTitle, listInstructions, descriptions);
        template.appendChild(container);
    })
})
