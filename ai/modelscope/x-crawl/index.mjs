// es6 模块化 导包
// 解构运算符
import {
    createCrawl, // 返回爬虫实例
    createCrawlOpenAI // openai 配置项
} from "x-crawl";

// 实例化爬虫应用
const crawlApp = createCrawl({
    maxRetry: 3, // 最多重试次数
    intervalTime: { max: 2000, min: 1000 }
})

// 一个集成OpenAI功能的爬虫实例
const crawlOpenAIApp = createCrawlOpenAI({
    clientOptions: {
        apiKey: 'xxxxx',
        baseURL: 'https://api.302.ai/v1/'
    },
    defaultModel: {
        chatModel: 'gpt-4-turbo-preview'
    }
})

crawlApp.crawlPage('https://movie.douban.com/chart')
    .then(async (res) => {
        const { page, browser } = res.data;
        const targetSelector = '.indent';
        await page.waitForSelector(targetSelector);
        const highlyHTML = await page.$eval(targetSelector, (el) => el.innerHTML);
        // console.log(highlyHTML)
        const result = await crawlOpenAIApp.parseElements(
            highlyHTML,
            `获取图片的链接、电影名称、电影评分、电影简介
             输出格式为json数组
             如:
             [{
             "src":"...",
             "title":"...",
             "score":"...",
             "desc":"..."
             }]
             `
        )
        browser.close();

        console.log(result)

        /*cralwApp.crawlFile({
            targets: result.elements[0].src,// 下载第一个元素中的图片链接
            storeDirs: './upload'// 存储下载文件的目录
        })*/
    })