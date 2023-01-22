const url = "http://localhost:1000/playlist";

fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    data.forEach((track) => {
      const markup = `
      <li>
        <img src="images/ashikawee.jpg" alt="">
        <p>
            <div class="flex"><h3>${track.audioTitle}</h3>
                <h4>${track.artistName}</h4></div>
                <div class="buttons">
                    <button><i class="fa-solid fa-play"></i></button>
                    <button><i class="fa-solid fa-download"></i></button>
                </div>
        </p>
        
    </li><hr>`;
      document.getElementById("tracks").insertAdjacentHTML("beforeend", markup);
    });
  })
  .catch((e) => console.log(e));
