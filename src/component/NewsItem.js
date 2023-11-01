import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div>
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
            <span className="badge rounded-pill bg-danger">{source}</span></div>
          <img src={!imageUrl ? "https://th-i.thgim.com/public/sci-tech/science/9r3f55/article67341073.ece/alternates/LANDSCAPE_1200/Milky%20way.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknow" : author} on {new Date(date).toUTCString()}</small></p>
            <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-dark btn-sm">Read More</a>
          </div>
        </div>
      </div>
    )
}

export default NewsItem
