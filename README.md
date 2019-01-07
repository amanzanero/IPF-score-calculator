# Load the barbell!
#### _Status_: In Progress
[Visit me!](https://load-the-barbell.herokuapp.com/)

## Description
This is a web application that serves as a calculator for 
powerlifters to calculate their new IPF score.

## Background
Prior to the new IPF Formula (as of Jan 2018), the 
Wilks formula was used. Check it out 
[here](https://www.usapowerlifting.com/lifters-corner/wilks-formula-for-men-lbs/). 

A letter from the President of the IPF can be found 
[here](https://www.powerlifting.sport/about-ipf/news/news-detail.html?tx_news_pi1%5Bnews%5D=277&tx_news_pi1%5Bcontroller%5D=News&tx_news_pi1%5Baction%5D=detail&cHash=e9cb9d4c76f3ac2c02a2885d63386175) explaining
the motivation for this new metric as well as a document with the constants below. 

## Calculation
IPF Score = 500 + 100 * ( (lift type total) - ( C1 * LN(body weight) - C2 ))
    / ( C3 * LN(body weight) - C4 )

Constants can be found in the [letter from the IPF President](https://www.powerlifting.sport/about-ipf/news/news-detail.html?tx_news_pi1%5Bnews%5D=277&tx_news_pi1%5Bcontroller%5D=News&tx_news_pi1%5Baction%5D=detail&cHash=e9cb9d4c76f3ac2c02a2885d63386175). 

# Tech
Created with React.js and Material UI.