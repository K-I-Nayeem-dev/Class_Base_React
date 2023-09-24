import React, { Component } from 'react'

export class NewsItem extends Component {

    
    render() {
        let {title, description , ImageUrl, readMore , alt , newsUrl} = this.props
        return (
            <div className="card my-3">
                <img src={!ImageUrl ? "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg" : ImageUrl} className="card-img-top img-fluid h-50" alt={alt}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>
                        <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-primary">{readMore}</a>
                    </div>
            </div>
        )
    }
}

export default NewsItem