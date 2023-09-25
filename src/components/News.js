import React, { Component } from 'react'
import NewsItem from './NewsItem';

export class News extends Component {

    articles = [
        {
            "source": {
            "id": "bloomberg",
            "name": "Bloomberg"
            },
            "author": "Michael Mackenzie, Ye Xie, Liz Capo McCormick",
            "title": "Bond Market Faces Quandary After Fed Signals It's Almost Done - Bloomberg",
            "description": "Bond investors face the crucial decision of just how much risk to take in Treasuries with 10-year yields at the highest in more than a decade and the Federal Reserve signaling it’s almost done raising rates.",
            "url": "https://www.bloomberg.com/news/articles/2023-09-23/bond-market-faces-quandary-after-fed-signals-it-s-almost-done",
            "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i41U7J0n_Q48/v0/1200x800.jpg",
            "publishedAt": "2023-09-23T20:00:00Z",
            "content": "Bond investors face the crucial decision of just how much risk to take in Treasuries with 10-year yields at the highest in more than a decade and the Federal Reserve signaling its almost done raising… [+273 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Cord Cutters News, LLC"
            },
            "author": "Kayla Wassell",
            "title": "As COVID Cases Surge, Department of Health and Human Services Resumes Mailing Free Tests - Cord Cutters News",
            "description": "After a summer of spiking COVID-19 cases, the Department of Health and Human Services will continue to mail out free tests to help ease the financial burden of buying kits out of pocket. Starting September 25, you can request up to four rapid tests per househ…",
            "url": "https://cordcuttersnews.com/as-covid-cases-surge-the-department-of-health-and-human-services-resumes-mailing-free-tests/",
            "urlToImage": "https://cordcuttersnews.com/wp-content/uploads/2023/09/iStock-1356114754-1024x539.jpg",
            "publishedAt": "2023-09-23T19:21:33Z",
            "content": "After a summer of spiking COVID-19 cases, the Department of Health and Human Services will continue to mail out free tests to help ease the financial burden of buying kits out of pocket.\r\nStarting Se… [+1616 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Fox Business"
            },
            "author": "Chris Pandolfo",
            "title": "Rite Aid to close hundreds of stores in bankruptcy: report - Fox Business",
            "description": "Retail pharmacy Rite Aid is reportedly in talks to close as many as 500 stores as the Philadelphia-based company plans to file for Chapter 11 bankruptcy, according to a report.",
            "url": "https://www.foxbusiness.com/retail/rite-aid-close-hundreds-stores-bankruptcy-report",
            "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/09/0/0/rite-aid-pharmacy.jpg?ve=1&tl=1",
            "publishedAt": "2023-09-23T19:01:08Z",
            "content": "Pharmacy giant Rite Aid is negotiating terms of a bankruptcy plan that could see a significant number of its more than 2,100 drugstores permanently close, according to a report.\r\nPeople familiar with… [+3564 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "POLITICO.eu"
            },
            "author": "Hans von der Burchard",
            "title": "German carmakers 'afraid' of China retaliation, economy minister warns - POLITICO Europe",
            "description": "Robert Habeck admits Franco-German divide on EU anti-subsidy probe against Chinese electric vehicles.",
            "url": "https://www.politico.eu/article/german-carmakers-afraid-of-chinese-retaliation-economy-minister-warns/",
            "urlToImage": "https://www.politico.eu/cdn-cgi/image/width=1200,height=630,fit=crop,quality=80,onerror=redirect/wp-content/uploads/2023/09/23/GettyImages-1653664615-scaled.jpg",
            "publishedAt": "2023-09-23T19:00:00Z",
            "content": "BERLIN German carmakers are \"afraid\" that they could be hit by retaliation if the EU were to impose duties on Chinese electric vehicles as a result of a new anti-subsidy probe, German Economy Ministe… [+2403 chars]"
            },
    ]


    constructor(){
        super();
        this.state = {
            articles : [],
            dataLoading: false,
            page:1
        }
    }

    async componentDidMount(){
        let url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2d0c3b40e90646dba952692f75d6a9a0';
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles});
    }



    render() {
        return (
            <>
            <div className="container">
                <div className="row">
                    <h1>This Is News Items</h1>
                    <div className="row">
                        {this.state.articles.map((elemets)=>{
                            return(
                                <div className="col-lg-4" key={elemets.url}>
                                    <NewsItem title={elemets.title} description={elemets.description} ImageUrl={elemets.urlToImage ? elemets.urlToImage : 'https://media.istockphoto.com/id/1182477852/photo/breaking-news-world-news-with-map-backgorund.jpg?s=612x612&w=0&k=20&c=SQfmzF39HZJ_AqFGosVGKT9iGOdtS7ddhfj0EUl0Tkc='} readMore="Read More" newsUrl={elemets.url}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="container d-flex justify-content-between pb-3">
                <button disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handleOnprev}>Previous</button>
                <button className="btn btn-dark" onClick={this.handleOnNext}>Next</button>
            </div>
        </>
        )
    }
}

export default News