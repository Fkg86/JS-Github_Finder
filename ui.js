class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  //profil arayüzünü ekrana basma
  showProfile(user) {
    const created_at = new Date(user.created_at).toLocaleDateString();

    this.profile.innerHTML = `
    <div class="container border my-4 p-4">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid" src="${user.avatar_url}"/>
            <a href="${user.html_url}" target="_blank" class="btn btn-primary my-4 w-100"
              >Show Profile</a
            >
          </div>
          <div class="col-md-9">
            <span class="badge bg-primary fs-6 mt-1">Open Repos:${user.public_repos}</span>
            <span class="badge bg-secondary fs-6 mt-1">Open Gists:${user.public_gists}</span>
            <span class="badge bg-success fs-6 mt-1">Followers:${user.followers}</span>
            <span class="badge bg-info fs-6 mt-1">Followed:${user.following}</span>

            <ul class="list-group my-5">
              <li class="list-group-item">About:${user.bio}</li>
              <li class="list-group-item">Company:${user.company}</li>
              <li class="list-group-item">Website:${user.blog}</li>
              <li class="list-group-item">Location:${user.location}</li>
              <li class="list-group-item">Account Date:${created_at}</li>
            </ul>
          </div>
          
        </div>
    </div>
    
    
    <div class="container p-3" id="repos">
    </div>
      `;
  }

  showRepos(repos) {
    let output = '<h3 class="fs-1">Recent Repos</h3>';

    repos.forEach((repo) => {
      output += `     

    <div class ="border p-3 mb-4">
    <div class ="row">
    <div class ="col-md-6">
    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
    </div>
    <div class="col-md-6">
    <span class="badge bg-primary">Star:${repo.stargazers_count}</span>
    <span class="badge bg-secondary">Watches:${repo.watchers_count}</span>
    <span class="badge bg-success">Forks:${repo.forks_count}</span>
    </div>
    </div>
    </div>
    `;
    });

    //htmle gönderme
    document.getElementById("repos").innerHTML = output;
  }

  //uyari mesaji olusturma
  showAlert(message, classname) {
    //div olusturma
    const div = document.createElement("div");

    //class ekleme
    div.className = classname;

    //yaziyi ekleme
    div.innerText = message;

    //gönderecegimiz yerin elemanini alma
    const outlet = document.querySelector("#alert");

    //htmle gönderme
    outlet.appendChild(div);

    // alerti 4s sonra kaldir
    setTimeout(() => {
      this.clearAlert();
    }, 4000);
  }

  //uyariyi ekrandan silme
  clearAlert() {
    //ekrandaki alert
    const currentAlert = document.querySelector(".alert");
    //alert varsa onu kaldir
    if (currentAlert) {
      currentAlert.remove();
    }
  }
  clearProfile() {
    this.profile.innerHTML = "";
  }
}

export default UI;
