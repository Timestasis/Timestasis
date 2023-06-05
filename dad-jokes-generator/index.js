const btnEl = document.getElementById("btn"); 
const jokeEl = document.getElementById("joke");



const apiKey = "2Ffr1yVzmG0tgpQE9rV4kA==61K8gF7yMth8Mgob";

const options = {
    method: "GET",
    headers: {
        "X-API-KEY" : apiKey,
    },
};

const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke(){
    try {
    jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "loading";
    const response =  await fetch(apiUrl,options);
    const data = await response.json();
    console.log(data[0].joke);

    btnEl.disabled = false;
    btnEl.innerText = "Tell Me A Joke";

    jokeEl.innerText = data[0].joke;
    } catch (error) {
        jokeEl.innerText = "Error occured, try again later...";
        btnEl.disabled = false;
        btnEl.innerText = "Tell Me A Joke";
        console.log(error);
    }
}

btnEl.addEventListener("click", getJoke);