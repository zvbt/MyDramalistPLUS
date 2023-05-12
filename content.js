let version = document.querySelector("span.beta4.label.label-xs.danger");
version.innerHTML += " & MDL+";

let userProfile = document.querySelector(
  "#app > div:nth-child(2) > div.app-header.navbar-xs.black.box-shadow > div > div > ul > li.nav-item.header-dropdown.mdl-dropdown.dropdown > div > div > a:nth-child(3)"
);
let userLink = userProfile.href;
const userName = userLink.split("/").pop();

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
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
  }
});
