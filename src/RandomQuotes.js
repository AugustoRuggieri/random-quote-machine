import { useEffect, useState } from "react";

const QUOTE_URL = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

const RandomQuotes = () => {

    const [quotesArray, setQuotesArray] = useState();
    const [quote, setQuote] = useState("Life isn’t about getting and having, it’s about giving and being.");
    const [author, setAuthor] = useState("Kevin Kruse");

    const fetchQuotes = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        setQuotesArray(data.quotes);
        console.log(data);
    }

    const getRandomQuote = () => {
        let randomInteger = Math.floor(quotesArray.length * Math.random());
        setQuote(quotesArray[randomInteger].quote);
        setAuthor(quotesArray[randomInteger].author);
    }

    useEffect(() => {
        fetchQuotes(QUOTE_URL);
    }, [QUOTE_URL])

    return (
        <div>
            <div id="quote-box">
                <div id="text">
                    "{quote}"
                </div>
                <div id="author">- {author}</div>
                <section className="btn-container">
                <a className="btn" href="twitter.com/intent/tweet" target="_blank" id="tweet-quote">
                    <i className="fa-brands fa-twitter"></i>
                </a>
                <a className="btn" id="new-quote" onClick={() => getRandomQuote()}>New quote</a>
                </section>
            </div>
        </div>
    )
}

export default RandomQuotes;
