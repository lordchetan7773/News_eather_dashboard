import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyNews = () => {
    const [news, setNews] = useState([]);
    const [error, setError] = useState(null);
    const apiKey = '7fe7f65aad4f4f8d84755fdb0b33aac3';
    const country = 'us';

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`);
                setNews(response.data.articles);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchNews();
    }, [country, apiKey]);

    if (error) return <div className="alert alert-danger">Error: {error}</div>;
    if (news.length === 0) return <div>Loading...</div>;

    return (
        <div className="container">
            <h3 className="my-4">Top News of the Day</h3>
            <div className="row">
                {news.slice(0, 5).map((article, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card h-100 d-flex flex-column">
                            {article.urlToImage && (
                                <img src={article.urlToImage} className="card-img-top" alt={article.title} />
                            )}
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{article.title}</h5>
                                <p className="card-text">{article.source.name} ({new Date(article.publishedAt).toLocaleDateString()})</p>
                                <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-auto">Read More</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyNews;
