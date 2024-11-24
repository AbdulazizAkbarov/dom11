
try {
    document.addEventListener("DOMContentLoaded", () => {
      let container = document.querySelector(".container");
      let loading = document.querySelector(".loading");
      loading.style.display = "block";
    (async function name() {
      let res = await fetch("https://jsonplaceholder.typicode.com/albums");
      let data = await res.json();
      loading.style.display = "none";
      data.forEach((elem) => {
        let card = document.createElement("div");
        let userId = document.createElement("h2");
        let id = document.createElement("h3");
        let title = document.createElement("h2");
        userId.textContent = "''userId:'' " + elem.userId;
        id.textContent = "''id:'' " + elem.id;
        title.textContent = "''title:'' " + elem.title;
        card.append(userId, id, title);
        card.classList.add("card");
        container.append(card);
      });
    })();
  });
  } catch (error) {
    console.log("error");
  }