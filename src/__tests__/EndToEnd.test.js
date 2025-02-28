import puppeteer from "puppeteer";

describe('show/hide an event details', ()=>{
    let browser;
    let page;

    beforeAll(async () => {
        jest.setTimeout(60000);
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto('http://localhost:5173/');
        await page.waitForSelector('.event');
    });
    
    afterAll( () => {
        if (browser) {
            browser.close();
        }
    });


    test('An event element is collapsed by default', async () => {
   
        const eventDetails = await page.$('#event');
        expect(eventDetails).toBeNull();
    });

    test('User can expand an event to see its details', async () => {
        await page.click('.event .details');
        const eventDescription = await page.$('.event-description');
        expect(eventDescription).toBeDefined();
      });
    
    test('User can collapse an event to hide details', async () => {
        await page.click('.event .details'); //expand
        const eventDescription = await page.$('.event-description');
        expect(eventDescription).toBeNull();
    });

});

