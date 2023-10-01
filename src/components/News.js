import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";



const News = (props)=> {

    const [articles, setArticles] = useState([]);
    const [dataLoading, setDataLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    // const [btn, setBtn] = useState(false);

    // constructor(props){
    //     super(props);
    //     state = {
    //         articles: [],
    //         dataLoading: false,
    //         page:1,
    //         btn: false,
    //         totalResults: 0
    //     }
    //     document.title =  capitalizeFirstLetter(props.category) + " - Latest News" ;
        // props.category[0].toUpperCase() + props.category.slice(1)
    // }

    const updateNews = async ()=>{
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setDataLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70)
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setDataLoading(false);
        props.setProgress(100);
    }

    
    // async componentDidMount(){
        // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2d0c3b40e90646dba952692f75d6a9a0&page=1&pageSize=${props.pageSize}`;
        // setState({dataLoading:true})
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // setState({ articles: parsedData.articles , totalResults: parsedData.totalResults , dataLoading:false});
    // }

    const fetchMoreData = async () => {
        // setState({page: page + 1 ? page + 1 : page, });
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page + 1)
        setDataLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setDataLoading(false);
    };

    useEffect(() => {
        updateNews();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    // handleOnNext = async ()=>{
        // if(!(page + 1 > Math.ceil(totalResults/props.pageSize))){
        //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3f2027e161094ecdb46d1531bf75bb27&page=${page + 1}&pageSize=${props.pageSize}`;
        //     setState({dataLoading:true})
        //     let data = await fetch(url);
        //     let parsedData = await data.json();
        //     setState({
        //         page: page + 1,
        //         articles: parsedData.articles,
        //         dataLoading:false
        //     })
        // }
    //     setState({page: page + 1})
    //     updateNews();
    // }

    // handleOnprev = async ()=>{
        // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3f2027e161094ecdb46d1531bf75bb27&page=${page - 1}&pageSize=${props.pageSize}`;
        // setState({dataLoading:true})
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // setState({
        //     page: page - 1,
        //     articles: parsedData.articles,
        //     btn: false,
        //     dataLoading:false
        // })
        // setState({page: page - 1})
        // updateNews();
    // }

    const capitalizeFirstLetter = (str) => {
        return str[0].toUpperCase() + str.slice(1);
    }
        return (
            <>
            <div className="container">
                <div className="row">
                    <h1 className="text-center my-3" style={{ color: props.color === 'light' ? 'white' : 'white' }}>Top Headlines Of {capitalizeFirstLetter(props.country)} Form {capitalizeFirstLetter(props.category)}  News</h1>
                    <div className='text-center'>
                    </div>
                    <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMoreData}
                        hasMore={articles !== totalResults}
                        loader={dataLoading && <Spinner/>}
                    >
                        <div className="container">
                            <div className="row">
                                    {articles.map((elemets)=>{
                                        return(
                                            <div className="col-lg-4" key={elemets.url}>
                                                <NewsItem title={elemets.title ? elemets.title : ''} description={elemets.description ? elemets.description : 'Click to Read this News'} ImageUrl={elemets.urlToImage ? elemets.urlToImage : 'https://media.istockphoto.com/id/1182477852/photo/breaking-news-world-news-with-map-backgorund.jpg?s=612x612&w=0&k=20&c=SQfmzF39HZJ_AqFGosVGKT9iGOdtS7ddhfj0EUl0Tkc='} readMore="Read More" newsUrl={elemets.url} author={elemets.author} date={elemets.publishedAt} source={elemets.source.name} />
                                            </div>
                                        )
                                    })}
                            </div>
                        </div>
                    </InfiniteScroll>
                </div>
            </div>
            {/* <div className="container d-flex justify-content-between pb-3">
                <button disabled={page<=1} className="btn btn-dark" onClick={handleOnprev}> &larr; Previous</button>
                <button disabled={page + 1 > Math.ceil(totalResults/props.pageSize)} className="btn btn-dark" onClick={handleOnNext}>Next &rarr; </button>
            </div> */}
        </>
        )
}


News.defaultProps = {
    pageSize : 8,
    country : 'in',
    category : 'business',
}

News.prototype = {
    pageSize : String.prototype,
    country : String.prototype,
    category : String.prototype,
}

export default News
