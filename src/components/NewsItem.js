import React, { Component } from 'react'

export class NewsItem extends Component {

    
    render() {
        let {title, description , ImageUrl, readMore , alt} = this.props
        return (
            <div className="card" style={{ width: "22rem" }}>
                <img src={ImageUrl} className="card-img-top" alt={alt}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href="/" className="btn btn-primary">{readMore}</a>
                    </div>
            </div>
        )
    }
}

export default NewsItem