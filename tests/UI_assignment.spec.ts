import {test,expect} from "@playwright/test";
import * as fs from 'fs';

test("QA Demo Application Testing", async({page})=>{
    console.log('Opening the website URL....')
    const website_url = 'https://demoqa.com/';
    await page.goto(website_url);
    console.log("Website opened successfully!");

    console.log("Navigating to the book store application...")
    const book_store_application_open = page.getByRole('heading',{name:'Book Store Application'})
    await book_store_application_open.click();
    console.log("Book store application opened successfully");

    console.log("clicking the login button...")
    const login_button_clicking = page.getByRole('button',{name:'Login'});
    await login_button_clicking.click();
    console.log("login button clicked successfully");

    console.log("Entering username....")
    const username = page.locator('#userName')
    await username.fill('Akanksha');
    console.log("Username entered successfully")

    console.log('Entering password.....');
    const password = page.locator('#password');
    await password.fill('Akanksha@2006');
    console.log('password entered successfully');

    console.log('clicking login buttton...')
    await login_button_clicking.click();
    console.log('lohin button clicked successfully')

    //validation
    console.log("Validating the username....")
    const Username = page.locator('#userName-value');
    await expect(Username).toHaveText('Akanksha');
    console.log("Username is correct")
    console.log("validating logout button...")
    await expect(page.locator('#submit').filter({hasText:'Logout'}));
    console.log("validating logout button successfully done");

    const back_to_bookstore = page.getByRole('button',{name:'Go To Book Store'});
    await back_to_bookstore.click();

    const book_name = 'Learning JavaScript Design Patterns'
    console.log("Searching for the book named ",book_name);
    const searching_book = page.getByPlaceholder('Type to search');
    await searching_book.fill(book_name);

    //validation
    console.log("validating the book with result...")
    await expect(page.getByRole('link',{name:book_name})).toBeVisible();
    console.log('result is matched with searched one');

    const title = book_name;
    const author = 'Addy Osmani';
    const publisher = `O'Reilly Media`;
    console.log(`Creating a new text file containing the details ${title},${author},${publisher}`);

    const book_details = `Book Title:${title}
                          Author:${author}
                          Publisher:${publisher}`;

    fs.writeFileSync('book_details.txt', book_details);
    console.log('Text file created successfully');
    
})