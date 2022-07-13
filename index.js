//imports
const { screen, imageResource, keyboard, Key, mouse, Point, straightTo, centerOf } = require("@nut-tree/nut-js")
const sleep = require('sleep-promise')
require("@nut-tree/template-matcher")

//main function
const main = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            await sleep(1000)
            await screen.waitFor(imageResource("XLII.jpg"))
            await sleep(1000)
            await keyboard.pressKey(Key.V,)
            await keyboard.releaseKey(Key.V)
            await sleep(1000)
            await screen.waitFor(imageResource("marchand.jpg"))
            await sleep(1000)
            const region = await screen.find(imageResource("marchand.jpg"))
            await mouse.drag(straightTo(centerOf(region)))
            await mouse.leftClick()
            await screen.waitFor(imageResource("confirm.jpg"))
            const region2 = await screen.find(imageResource("confirm.jpg"))
            await mouse.drag(straightTo(centerOf(region2)))
            await mouse.leftClick()
            resolve(true)
        }catch(e){
            console.error(e)
            reject(e)
        }
    })
}

//calling the main function
const start = async () => {
    while(1){
        await main()
    }
}

start()