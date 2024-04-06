import Github from "./github.js";
import UI from "./ui.js";

//github ve UI class larinin örnegini olusturma
const github = new Github();
const ui = new UI();

// htmlden alınanlar
const searchUser = document.getElementById("search-user");
const searchButton = document.getElementById("search-button");

//eger ara butonuna tiklanirsa
searchButton.addEventListener("click", getInput);
//eger enter tusuna tiklanirsa
searchUser.addEventListener("keypress", (e) => {
  if (e.code === "Enter") {
    getInput();
  }
});

function getInput() {
  // eğer inputun içi doluysa api isteği at
  if (searchUser.value !== "") {
    github.getUser(searchUser.value).then((data) => {
      // eğer gelen verideki mesaj 'Not Found' ise
      if (data.profile.message === "Not Found") {
        // hata mesajı göster
        ui.showAlert("User Not Found", "alert alert-danger");
      } else {
        ui.showAlert("User Found", "alert alert-success");
        // kullanıcıyı göster
        ui.showProfile(data.profile);
        // projelerini göster
        ui.showRepos(data.repos);
      }
    });
  } else {
    // eğer input boşsa uyarı ver
    ui.showAlert("Please fill in this form", "alert alert-info");
    ui.clearProfile();
  }

  searchUser.value = "";
}

//tema degistirme
const themeBtn = document.getElementById("theme");
themeBtn.addEventListener("click", changeTheme);
function changeTheme() {
  const body = document.querySelector("body");
  body.classList.toggle("bg-dark");
  body.classList.toggle("text-bg-dark");
}
