import React, { Component } from 'react'

export class NewsItem extends Component {

    
    render() {
        let {title, description , ImageUrl, readMore , alt , newsUrl,author, date, source} = this.props
        return (
            <div className="card my-3 ">
                <span className="badge bg-danger ">Source : {source ? source : 'Unknown'}</span>
                <img src={!ImageUrl ? "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg" : ImageUrl} className="card-img-top img-fluid h-50" alt={alt}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>
                        <div className="card-footer text-muted">
                            <p>By : {author ? author : 'Unknown'} & Upload : {new Date(date).toGMTString()} </p>
                            {/* <p>By {author ? author : 'Unknown'} & Upload {[new Date(date).toLocaleDateString() , " ", new Date(date).toLocaleTimeString()]} </p> */}
                        </div>
                        <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-primary">{readMore}</a>
                    </div>
            </div>
        )
    }
}

export default NewsItem