//  Sentiment uses the AFFIN-165 Wordlist and Emoji Sentiment Ranking
//  Comparative Score =  Sum of each token / number of tokens

const puppeteer = require("puppeteer")
const Sentiment = require("sentiment")
const sentiment = new Sentiment()

const SentimentSearch = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  // Web Page
  await page.goto(
  "https://www.nytimes.com/"
  )
  const text = await page.$eval("*", (el) => el.innerText)
  const result = await sentiment.analyze(text)
  console.log(result)
  await browser.close()
}
// Call function
SentimentSearch()