import puppeteer from "puppeteer";

describe('show/hide an event details', ()=>{
    test('An event element is collapsed by default', async () => {
        jest.setTimeout(60000);
   
        const browser = await puppeteer.launch();

        const page = await browser.newPage();
        await page.goto('http://localhost:5173/'); // If your Vercel app is running in a different port please update it here

        // If your event element has a different selector, use it instead of .event
        await page.waitForSelector('.event');

        // If your event's details have a different selector, use it instead of .event .details
        const eventDetails = await page.$('#event');
        expect(eventDetails).toBeNull();
        await browser.close();
    });
});

