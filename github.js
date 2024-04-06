class Github {
  constructor() {
    this.client_id = "990ba6ef305ae54eba54";
    this.client_secret = "c417b44ae6674cddf9927e058fa90d97f97519b8";
    this.repos_count = 10;
    this.repos_sort = "asc";
  }
  async getUser(user) {
    //gelen userla beraber istek atma
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    //kullanicinin repolarini cekme
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    //gelen cevabi jsona cevirme
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    console.log(repos);
    //islenmis veriyi fonksiyonun cagrildigi yere gönderme
    return {
      profile,
      repos,
    };
  }
}

export default Github;
