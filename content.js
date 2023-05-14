let version = document.querySelector("span.beta4.label.label-xs.danger");
version.innerHTML += " & MDL+";

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    try {
      let userProfile = document.querySelector(
        "#app > div:nth-child(2) > div.app-header.navbar-xs.black.box-shadow > div > div > ul > li.nav-item.header-dropdown.mdl-dropdown.dropdown > div > div > a:nth-child(3)"
      );
      let userLink = userProfile.href;
      const userName = userLink.split("/").pop();
      const newListItem = document.createElement("li");
      newListItem.classList.add("nav-item", "dropdown");

      const newLink = document.createElement("a");
      newLink.href = "/dramalist/" + userName;
      newLink.classList.add("nav-link");

      const newSpan = document.createElement("span");
      newSpan.classList.add("nav-text");
      newSpan.textContent = "My Watchlist";

      newLink.appendChild(newSpan);

      newListItem.appendChild(newLink);

      const navBar = document.querySelector(
        "ul.nav.navbar-nav.pull-left.nav-active-border.b-blue"
      );
      navBar.appendChild(newListItem);
    } catch (error) {
      if (window.location.href === "https://mydramalist.com/signin") {
      } else {
        window.location.href = "https://mydramalist.com/signin";
        alert(
          "You must be logged in to use MyDramaListPLUS.\nYou will be redirected to the login/registration page once you click yes."
        );
      }
    }
  }
});

let langAlert =
  "The extension MyDramaListPLUS is still in beta and work only with the english version of MyDramaList please use: \nhttps://mydramalist/com";
function checklang() {
  if (window.location.href.match("https://fr.mydramalist.com")) {
    alert(langAlert);
  }

  if (window.location.href.match("https://es.mydramalist.com")) {
    alert(langAlert);
  }
  if (window.location.href.match("https://it.mydramalist.com")) {
    alert(langAlert);
  }
  if (window.location.href.match("https://nl.mydramalist.com")) {
    alert(langAlert);
  }
  if (window.location.href.match("https://pt.mydramalist.com")) {
    alert(langAlert);
  }
  if (window.location.href.match("https://br.mydramalist.com")) {
    alert(langAlert);
  }
  if (window.location.href.match("https://ro.mydramalist.com")) {
    alert(langAlert);
  }
}
setInterval(checklang, 5000);
