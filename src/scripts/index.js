let base_url = "https://api.github.com/users";
let seach_button = document.querySelector(".seach_button");
let search_bar = document.querySelector("#search_bar");

async function getUser(userName) {
    const response = await fetch(`${base_url}/${userName}`);
    console.log(await response.json());
}

seach_button.addEventListener("click", () => {
    const userName = search_bar.value;
    getUser(userName);
});
