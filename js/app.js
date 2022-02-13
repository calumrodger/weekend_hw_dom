
document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');
    const newGameForm = document.querySelector("#new-game-form");
    newGameForm.addEventListener("submit", handleNewGameFormSubmit);

    const deleteAllButton = document.querySelector("#delete-all");
    deleteAllButton.addEventListener("click", handleDeleteAllClick);
  })

  const handleNewGameFormSubmit = function (event) {
      event.preventDefault();

      const gameCollectionItem = createGameCollectionItem(event.target);
      const gameCollection = document.querySelector("#game-collection");
      gameCollection.appendChild(gameCollectionItem);

      event.target.reset();
  }

  const createGameCollectionItem = function (form) {
      const gameCollectionItem = document.createElement("li");
      gameCollectionItem.classList.add("game-collection-item");

      const title = document.createElement("h2");
      title.textContent = form.title.value;
      gameCollectionItem.appendChild(title);

      const genre = document.createElement("h3");
      genre.textContent = form.genre.value;
      gameCollectionItem.appendChild(genre);

      const system = document.createElement("p");
      system.textContent = form.system.value;
      gameCollectionItem.appendChild(system);

      const completed = document.createElement("p");
      if (form.completed.checked === true) {
          completed.textContent = "You've completed it!"
      } else {
          completed.textContent = "Still to complete."
      }
      gameCollectionItem.appendChild(completed);

      return gameCollectionItem;
  }

  const handleDeleteAllClick = function (event) {
      const gameCollection = document.querySelector("#game-collection");
      gameCollection.innerHTML = "";
  }