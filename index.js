
const btn = document.querySelector(".btn");
const title = document.querySelector(".title")
const qoutes = document.querySelector(".qoutes")
const Qauthor = document.querySelector(".author")

const API_KEY = "lK3r4B/0D+TFkqdSA3Fn+g==JQUOzGCArcabfudd"
const URL = "https://api.api-ninjas.com/v1/quotes?category="
const category = {
    method: 'GET',
    mode: 'cors',
    headers: { 'X-Api-Key': API_KEY},
}

btn.addEventListener("click",generateQoute);
async function generateQoute() {
    try {
        qoutes.innerHTML = "Loading...";
        Qauthor.innerHTML = "";
        btn.disabled = true;
        btn.value = "Loading...";
        const jsonData = await fetch(URL, category);
        const data = await jsonData.json();
        let Randomquote = data[0].quote;
        let quoteAuthor = data[0].author;    
        qoutes.innerHTML = Randomquote;
        Qauthor.innerHTML = `- ${quoteAuthor}`;
        btn.disabled = false;
        btn.value = "Get Random Quotes";
    } catch (error) {
        qoutes.innerHTML = "Something Went Wrong, Try Again Later";
        btn.value = "Get Random Quotes";
        btn.disabled = false;
        console.log(error);
    }};
