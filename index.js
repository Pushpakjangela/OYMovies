let left_btn = document.getElementsByClassName("leftArrow")[0];
let right_btn = document.getElementsByClassName("rightArrow")[0];
let cards = document.getElementsByClassName("cards")[0];
let serch = document.getElementsByClassName("serch")[0];

left_btn.addEventListener("click", () => {
  cards.scrollLeft -= 140;
});
right_btn.addEventListener("click", () => {
  cards.scrollLeft += 140;
});

let json_url = "movie.json";
fetch(json_url)
  .then((Response) => Response.json())
  .then((data) => {
    data.forEach((ele, i) => {
      let { name, imdb, date, sposter, bposter, genre, url } = ele;
      let card = document.createElement("a");
      card.classList.add("card");
      card.href = url;
      card.innerHTML = `
            <img src="${sposter}" class="poster" alt="${name}">
            <div class="rest_card">
              <img src="${bposter}" alt="">
              <div class="count">
                <h4>${name}</h4>
                <div class="sub">
                  <p>${genre}, ${date}</p>
                  <h3><span>IMBD</span><i class="fa-sharp fa-solid fa-star"></i> ${imdb} </h3>
                </div>
              </div>
            </div>
            `;
      cards.appendChild(card);
    });
    document.getElementById("title").innerText = data[0].name;
    document.getElementById("gen").innerText = data[0].genre;
    document.getElementById("date").innerText = data[0].date;
    document.getElementById(
      "rating"
    ).innerHTML = `<span>IMBD</span> <i class="fa-sharp fa-solid fa-star"></i> ${data[0].imdb}`;

    //--------------search data load
    data.forEach((ele) => {
      let { name, imdb, date, sposter, bposter, genre, url } = ele;
      let card = document.createElement("a");
      card.classList.add("card");
      card.href = url;
      card.innerHTML = `
              <img src="${sposter}" alt="" />
              <div class="count">
                <h3>${name}</h3>
                <p>
                  ${genre}, ${date} , <span>IMBD</span
                  ><i class="fa-sharp fa-solid fa-star"></i> ${imdb}
                </p>
              </div>
            `;
      serch.appendChild(card);
    });

    //-----------search filter--------
    search_input.addEventListener("keyup", () => {
      let filter = search_input.value.toUpperCase();
      let a = serch.getElementsByTagName("a");

      for (let index = 0; index < a.length; index++) {
        let b = a[index].getElementsByClassName("count")[0];
        let TextValue = b.textContent || b.innerText;
        if (TextValue.toUpperCase().indexOf(filter) > -1) {
          a[index].style.display = "flex";
          serch.style.visibility = "visible";
          serch.style.opacity = 1;
        } else {
          a[index].style.display = "none";
        }
        if (search_input.value == 0) {
          serch.style.visibility = "hidden";
          serch.style.opacity = 0;
        }
      }
    });

    let video = document.getElementsByTagName('video')[0];
    let play = document.getElementById('play');

    play.addEventListener("click", () => {
      if (video.paused) {
        video.play();
        play.innerHTML = `Play <i class="fa-solid fa-pause"></i>`;
      } else {
        video.pause();
        play.innerHTML = `Paused <i class="fa-solid fa-play"></i>`;
      }
    });

    //------------filtering series-----------
    let series = document.getElementById("series");

    series.addEventListener("click", () => {
      cards.innerHTML = "";

      let series_array = data.filter((ele) => {
        return ele.type === "series";
      });

      series_array.forEach((ele, i) => {
        let { name, imbd, date, sposter, bposter, genre, url } = ele;
        let card = document.createElement("a");
        card.classList.add("card");
        card.href = url;
        card.innerHTML = `
            <img src="${sposter}" class="poster" alt="${name}">
            <div class="rest_card">
              <img src="${bposter}" alt="">
              <div class="count">
                <h4>The Boys</h4>
                <div class="sub">
                  <p>${genre}, ${date}</p>
                  <h3><span>IMBD</span><i class="fa-sharp fa-solid fa-star"></i> ${imbd} </h3>
                </div>
              </div>
            </div>
            `;
        cards.appendChild(card);
      });
    });

    //------------filtering movies
    let movies = document.getElementById("movies");

    movies.addEventListener('click', () => {
      cards.innerHTML = "";

      let movies_array = data.filter((ele) => {
        return ele.type === "movie";
      });

      movies_array.forEach((ele, i) => {
        let { name, imbd, date, sposter, bposter, genre, url } = ele;
        let card = document.createElement("a");
        card.classList.add("card");
        card.href = url;
        card.innerHTML = `
            <img src="${sposter}" class="poster" alt="${name}">
            <div class="rest_card">
              <img src="${bposter}" alt="">
              <div class="count">
                <h4>The Boys</h4>
                <div class="sub">
                  <p>${genre}, ${date}</p>
                  <h3><span>IMBD</span><i class="fa-sharp fa-solid fa-star"></i> ${imbd} </h3>
                </div>
              </div>
            </div>
            `;
        cards.appendChild(card);
      });
    });

    //-------------filtering kids section---------

    let kids = document.getElementById("kids");

    kids.addEventListener("click", () => {
      cards.innerHTML = "";

      let kids_array = data.filter((ele) => {
        return ele.type === "kids";
      });

      kids_array.forEach((ele, i) => {
        let { name, imbd, date, sposter, bposter, genre, url } = ele;
        let card = document.createElement("a");
        card.classList.add("card");
        card.href = url;
        card.innerHTML = `
            <img src="${sposter}" class="poster" alt="${name}">
            <div class="rest_card">
              <img src="${bposter}" alt="">
              <div class="count">
                <h4>The Boys</h4>
                <div class="sub">
                  <p>${genre}, ${date}</p>
                  <h3><span>IMBD</span><i class="fa-sharp fa-solid fa-star"></i> ${imbd} </h3>
                </div>
              </div>
            </div>
            `;
        cards.appendChild(card);
      });
    });
  });



