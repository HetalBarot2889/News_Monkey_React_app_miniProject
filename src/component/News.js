import React,{useEffect, useLayoutEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner1';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const[articles, setArticles] = useState([])
  const[loading, setLoading] = useState(true)
  const[page, setPage] = useState(1)
  const[totalResults, setTotalResults] = useState(0)

  const capitalizeFLetter = (string) => {
    return string[0].toUpperCase() + string.slice(1);
  }
    const updateNews = async () => {
    props.changeProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.changeProgress(30);
    let parseData = await data.json();
    props.changeProgress(70);
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false)
    props.changeProgress(100);
  }

  useEffect(() => {
    document.title = `${capitalizeFLetter(props.category)} -News Monkey`;
    updateNews();
    //eslint-disable-next-line
  }, [])

  // const handlePreviousEvent = async () => {
  //   setPage({ page: page + 1 })
  //   updateNews();
  // }

  // const handleNextEvent = async () => {
  //   setPage({ page: page - 1 })
  //   this.updateNews();
  // }

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1 )
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles))
    setTotalResults(parseData.totalResults)
  };
    return (
      <>
        <h1 className='text-center' style={{ margin: '30px 0px',marginTop:'90px' }}>News Monkey- Top Headlines from {capitalizeFLetter(props.category)}</h1>
        {!!loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className='container'>
            <div className='row'>
              {articles.map((el) => {
                return <div className='col-md-4' key={el.url}>
                  <NewsItem
                    title={el.title ? el.title.slice(0, 45) : ""}
                    description={el.description ? el.description : ""}
                    imageUrl={el.urlToImage} newsUrl={el.url}
                    author={el.author}
                    date={el.publishedAt}
                    source={el.source.name}
                  />
                </div>
              })
              }
            </div>
          </div>
        </InfiniteScroll>
      </>
    )
            }
News.defaultProps = {
  country: 'in',
  pageSize: 5,
  category: 'general',
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News

