const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
    let inpWord = document.getElementById("inp-word").value;
    fetch(`${url}${inpWord}`)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            result.innerHTML = `
            <div class="word">
                <h3>${inpWord}</h3>
                <button"><i class="fa-solid fa-volume-high"></i></button>
            </div>
            <div class="details">
                <p>${json[0].meanings[0].partOfSpeech}</p>
                <p>${json[0].phonetics[1].text}</p>
            </div>
            <p class="word-meaning">
                ${json[0].meanings[0].definitions[0].definition}
            </p>
            <p class="word-example">
            ${json[0].meanings[0].definitions[0].example || ""}
            </p>`;
    })
})