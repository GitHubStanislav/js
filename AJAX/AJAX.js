//Поясніть своїми словами, що таке AJAX і чим він корисний при розробці Javascript.

//AJAX - це спосіб взаємодії між веб-сторінкою та сервером без перезавантаження сторінки.
// За допомогою JavaScript ми можемо надсилати запити на сервер і отримувати від нього відповіді, не перезавантажуючи всю сторінку.
// Це дуже корисно, оскільки дозволяє створювати більш інтерактивні веб-сторінки.
// Наприклад, ми можемо оновлювати частини сторінки без перезавантаження,
// як коли в Facebook з'являються нові повідомлення без оновлення всієї сторінки.
// Це зручно для користувачів, оскільки вони бачать нові дані без затримок.
// Отже, AJAX дозволяє нам взаємодіяти з сервером без перезавантаження сторінки,
// що робить веб-додатки більш динамічними та зручними для користувачів.

//Завдання
// Отримати список фільмів серії Зоряні війни та вивести на екран список персонажів для кожного з них.
//
// Технічні вимоги:
// Надіслати AJAX запит на адресу https://ajax.test-danit.com/api/swapi/films та отримати список усіх фільмів серії Зоряні війни
// Для кожного фільму отримати з сервера список персонажів, які були показані у цьому фільмі.
// Список персонажів можна отримати з властивості characters.
// Як тільки з сервера буде отримана інформація про фільми, відразу вивести список усіх фільмів на екрані.
// Необхідно вказати номер епізоду, назву фільму, а також короткий зміст (поля episodeId, name, openingCrawl).
// Як тільки з сервера буде отримано інформацію про персонажів будь-якого фільму, вивести цю інформацію на екран під назвою фільму.
// Необов'язкове завдання підвищеної складності
// Поки завантажуються персонажі фільму, прокручувати під назвою фільму анімацію завантаження.
// Анімацію можна використовувати будь-яку. Бажано знайти варіант на чистому CSS без використання JavaScript.

const body = document.body;

const filmsList = document.createElement("div");
filmsList.id = "films-list";
body.appendChild(filmsList);

const styles = document.createElement("style");
styles.innerHTML = `
body {
  width: 100%;
  height: 100%;
  background: #000;
  overflow: hidden;
}

.fade {
  position: relative;
  width: 100%;
  min-height: 60vh;
  top: -25px;
  background-image: linear-gradient(0deg, transparent, black 75%);
  z-index: 1;
}

.star-wars {
  display: flex;
  justify-content: center;
  position: relative;
  height: 800px;
  color: #feda4a;
  font-family: 'Pathway Gothic One', sans-serif;
  font-size: 500%;
  font-weight: 600;
  letter-spacing: 6px;
  line-height: 150%;
  perspective: 400px;
  text-align: justify;
}

.crawl {
  position: relative;
  top: -100px;
  transform-origin: 50% 100%;
  animation: crawl 20s linear;
}

.crawl > .title {
  font-size: 90%;
  text-align: center;
}

.crawl > .title h1 {
  margin: 0 0 100px;
  text-transform: uppercase;
}

@keyframes crawl {
  0% {
    top: -100px;
    transform: rotateX(20deg) translateZ(0);
  }
  100% {
    top: -6000px;
    transform: rotateX(25deg) translateZ(-2500px);
  }
}`;

document.head.appendChild(styles);

filmsList.innerHTML = `
  <div class="star-wars">
    <div class="crawl">
      <div class="title">
        <h1>Давно, далеко-далеко...
          Це період громадянської війни.
          Військові кораблі повстанців, атакуючи з таємної бази, здобули першу перемогу
          над зловісною Галактичною імперією....</h1>
      </div>
      <p></p>
    </div>
  </div>
`;


const filmsEndpoint = "https://ajax.test-danit.com/api/swapi/films";
fetch(filmsEndpoint)
  .then((response) => response.json())
  .then((data) => {
    // Remove Star Wars animation after 3 seconds
    setTimeout(() => {
      styles.innerHTML = `body {
  background: #ffffff; }`;
      filmsList.innerHTML = ``;

      data.forEach(({ episodeId, name, openingCrawl, characters }) => {
        const filmInfo = document.createElement("div");
        filmInfo.innerHTML = `
                <h2>Episode ${episodeId}: ${name}</h2>
                <p>${openingCrawl}</p>
            `;
        filmsList.appendChild(filmInfo);

        const charactersLoading = document.createElement("div");
        charactersLoading.textContent = "Loading characters...";
        filmInfo.appendChild(charactersLoading);

        Promise.all(
          characters.map((characterUrl) =>
            fetch(characterUrl).then((response) => response.json())
          )
        )
          .then((characters) => {
            charactersLoading.remove();

            const charactersList = document.createElement("ul");
            characters.forEach(({ name }) => {
              const characterItem = document.createElement("li");
              characterItem.textContent = name;
              charactersList.appendChild(characterItem);
            });
            filmInfo.appendChild(charactersList);
          })
          .catch((error) => console.log("Error fetching characters:", error));
      });
    }, 3000);
  })
  .catch((error) => console.log("Error fetching films:", error));
