import React from 'react'

    const NewsItem = (props)=> {

        let {title, description , ImageUrl, readMore , alt , newsUrl,author, date, source} = props
        return (
            <div className="card my-3 position-relative">
                <span className="badge bg-danger position-absolute end-0">Source : {source ? source : 'Unknown'}</span>
                <img src={!ImageUrl ? "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg" : ImageUrl} className="card-img-top img-fluid h-50" alt={alt}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>
                        <div className="card-footer text-muted">
                            <p>By : {author ? author : 'Unknown'} & Upload : {new Date(date).toGMTString()} </p>
                            {/* <p>By {author ? author : 'Unknown'} & Upload {[new Date(date).toLocaleDateString() , " ", new Date(date).toLocaleTimeString()]} </p> */}
                        </div>
                        <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-dark">{readMore}</a>
                    </div>
            </div>
        )
}

export default NewsItem