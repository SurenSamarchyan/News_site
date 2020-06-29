import {request} from "./request_news.js";
import {parseData} from "./column_and_row.js";

const API_KEY = "41b88290fdb84562a4448e3ecd1d7498";
//select radio, get value
(async ()=>{
    const newsData = await request(API_KEY)
    parseData(newsData)
})()

// Call  "parseData(newsData)"  when a ".button_news" is pressed

document.querySelector(".button_search_news").addEventListener("click",async ()=>{
    const searchValue = document.querySelector(".input_news_search").value;
    const newsData = await request(API_KEY, searchValue)
    parseData(newsData)
})

// Click simulation for ".button_news"

document.querySelector(".input_news_search")
    .addEventListener("keyup", function(e) {
        if (e.keyCode === 13) {
            document.querySelector(".button_search_news").click()
        }
    });





document.querySelectorAll('[name="filter"]').forEach(input => {
    input.addEventListener('change', () => {
        console.log(document.querySelector('[name="filter"]:checked'))
    })
})
