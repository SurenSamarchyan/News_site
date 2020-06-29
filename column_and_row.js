function parseData(array_source_news) {
    document.getElementById("news-container").innerHTML = "";

    const qwt_articles = array_source_news.articles.length;
    const qwt_column = 4;
    const qwt_row = (qwt_articles - qwt_articles % qwt_column) / qwt_column;
    for (let i = 0; i < qwt_row; i++) {
        let index_row = i;
        generateRow(array_source_news, qwt_column, index_row);
    }
}


function generateRow(array_source_news, qwt_column, index_row) {
    const row = document.createElement("div")
    row.className = "row";
    document.querySelector("#news-container").append(row);
    for (let i = 0; i < qwt_column; i++) {
        let newsIndex = index_row * qwt_column + i;
        const newsItem = new NewsItem(array_source_news.articles[newsIndex]);
        const newsColumn = newsItem.generateColumn()
        row.append(newsColumn);
    }
}
class NewsItem {
    constructor(news) {
        this.url = news.url;
        this.title = news.title;
        this.urlToImage = news.urlToImage;
        this.description = news.description;
        this.publishedAt = news.publishedAt;
        }


    generateColumn() {
        const column = document.createElement("div")
        column.className = "col-12 col-sm-6 col-lg-3 news-card-block";
        column.innerHTML = `<a href=${this.url}>
                                      <div class="card">
                                          <h2>${this.title}</h2>
                                              <div class="news-image" style="background-image: url('${this.urlToImage}')">
                                              </div>
                                           <p>${this.description}</p>
                                      </div>
                                   </a>`;
        return column
    }
}

export {parseData}