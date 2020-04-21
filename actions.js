import { Selector } from 'testcafe';

fixture `actions`
    .page `http://google.com`;
test(`maximize window`, async t => {
    await t // set the window size to it's max size
        .maximizeWindow();
            
});
    
const nameInput = Selector('.gLFyf.gsfi');
test(`Input Text`, async t => {
    await t
        .typeText(nameInput, 'Test')   
});
test(`Input Text with Speed`, async t => {
    await t
        .typeText(nameInput, 'Test')   
        .setTestSpeed(0.1)
        .typeText(nameInput, ' Cafe');    
});

test(`Type and Replace`, async t => {
    await t
        .typeText(nameInput, 'Test')   
        .typeText(nameInput, ' Cafe', {replace:true})   
        .wait(3000);
});

const checkbox = Selector('Input#remote-testing')
test
.page('https://devexpress.github.io/testcafe/example/')
(`Click Checkbox`, async t => {
    await t
        .click(checkbox)      
        .wait(3000);
});

test
.page('http://google.com')
(`Press Key`, async t => {
    await t
        .typeText(nameInput, 'Test')
        .pressKey('home right delete *')  
        .wait(3000) 
});

test(`Select Text`, async t => {
    await t
        .typeText(nameInput, 'Test')   
        .selectText(nameInput, 2, 0)
        .wait(3000)   
});

const hoverBrand = Selector('span').withText('Account & Lists')

test
    .page('https://www.amazon.com/')
(`Hover`, async t => {
    await t
        .hover(hoverBrand)  
        .wait(3000) 
});

test
    .page('https://google.com')
(`Navigate To`, async t => {
    await t
        .typeText(nameInput, 'Test')
        .navigateTo("https://iherb.com")
        .wait(3000) 
});

test
    .page('https://google.com')
(`Take Screenshot`, async t => {
    await t
        .typeText(nameInput, 'Test')
        .takeScreenshot("google.png")
        .wait(3000) 
});

// test
//     .page('https://google.com')
// (`Take Screenshot for only failure cases`, async t => {
//     await t
//         .typeText(nameInput, 'Test')
//         .expect(nameInput.value).eql('failure')
//         .wait(3000) 
// });


const dropdown = Selector('select#preferred-interface');
const dropdownBothOption = Selector('option').withText('Both');

test
    .page('https://devexpress.github.io/testcafe/example/')
(`Select from list`, async t => {
    await t
        .click(dropdown)
        .click(dropdownBothOption)
        .wait(3000) 
});

const name_txt_box = Selector('Input#developer-name')
const parent_header = Selector('h1');
const child_header = Selector('header p'); 

test
.page('https://devexpress.github.io/testcafe/example/')
('get text' , async t => {
    await t
    .typeText(name_txt_box, 'TestCafe')
    .wait(2000)

    const name_input_value = await name_txt_box.value
    const heardtxt = await parent_header.innerText
    const child_header_txt = await child_header.innerText

    console.log(name_input_value)
    console.log(heardtxt)
    console.log(child_header_txt)
});
