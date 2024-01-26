let base_url = "https://api.github.com/users";
let seach_button = document.querySelector(".seach_button");
let search_bar = document.querySelector("#search_bar");
let profile_data = document.querySelector(".profile_data");

async function getUser(userName) {
    const response = await fetch(`${base_url}/${userName}`);
    const userData = await response.json();

    profile_data.innerHTML = `
        <section class="profile_data">
                <img
                    src="${userData.avatar_url}"
                    alt="A picture chosen by the user"
                    class="user_avatar"
                />

                <section class="user_info">
                    <h2>${userData.name ?? "The user hasn't put one 😒"}</h2>
                    <h2>${userData.login}</h2>
                    <p>${userData.bio ?? "The user hasn't put one 😒"}</p>
                </section>

                <section class="followers">
                    <i class="fa-solid fa-user-group follow-icon"></i>
                    Followers: ${userData.followers}
                    <i class="fa-solid fa-user-group follow-icon"></i>
                    Following: ${userData.following}
                </section>
            </section>
    `;
}

seach_button.addEventListener("click", () => {
    const userName = search_bar.value;
    getUser(userName);
});
