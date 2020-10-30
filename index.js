
const mongoose = require('mongoose');
const { MONGO_URI } = require("./config")
const axios = require("axios").default;
const cheerio = require('cheerio')
const cron = require('node-cron');
const { BreakingNew } = require('./models');

mongoose.connect(MONGO_URI, {useNewUrlParser: true})

cron.schedule("* /4 * * * *", async() =>{

    const html = await axios.get('https://cnnespanol.cnn.com/');
    const $ = cheerio.load(html.data);
    const referenceClass = $('.news__title a');

    referenceClass.each((index, element) =>{
        const breakingNew = {
            title: $(element).text().replace(/\n\t\t\t\t/g,''),
            link: $(element).attr('href')
        }
        // console.log(breakingNew);
        BreakingNew.create([breakingNew]);
    })
    // console.log(breakingNew);

})

