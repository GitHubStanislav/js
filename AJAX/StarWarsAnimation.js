const body = document.body;

// Створюємо елемент списку фільмів
const filmsList = document.createElement("div");
filmsList.id = "films-list";
body.appendChild(filmsList);

// Створюємо стилі за допомогою JavaScript
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
  animation: crawl 60s linear;
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

// Відображаємо анімацію завантаження
filmsList.innerHTML = `
  <div class="star-wars">
    <div class="crawl">
      <div class="title">
        <h1>Loading...</h1>
      </div>
      <p></p>
    </div>
  </div>
`;
