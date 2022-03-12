import React from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import data from '../temp/temporal_data.json'
const ArticlePage = () => {
    const { id } = useParams();
    const news = data.learning_center.news;
    const article = news.filter(el => el.id === id)[0]
    console.log(article)
    return (
        <Container style={{ background: "#fff", padding: "30px", borderRadius: "10px" }}>
            <h1 className='text-center'>{article.title}</h1>
            <img style={{ borderRadius: "10px", maxWidth: "440px", width: "94%", margin: "20px auto", display: "flex" }} src={article.image} alt="" />
            <div dangerouslySetInnerHTML={{ __html: article.article }}></div>
        </Container>
    )
}

export default ArticlePage