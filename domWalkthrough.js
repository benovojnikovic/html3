console.dir(document);

console.log(document.domain);
 // gives the domain of the webpage

 console.log(document.URL);
// gives the url of the webpage

// console.log(document.title);
// gives the title of the webpage
// the document attritube can access different elements
// console.log(document.doctype);
// gives the type of file in the webpage
// console.log(document.head);
// shows everything in the head in console
// console.log(document.body);
// shows everything in the body
// console.log(document.all);

console.log(document.all[10]);

document.all[10].textContent = "I just changed the header";
// changes the header
console.log(document.forms);

console.log(document.images);
// 

// GetElementByID

console.log(document.getElementById('header-title'));

let headerTitle = document.getElementById('header-title');

console.log(headerTitle);

headerTitle.textContent = "changed the title 2wice";
headerTitle.innerText = "Changed it again 3hrice";
headerTitle.style.color = 'hotpink';
// 
var items = document.getElementsByClassName('list-group-item');

console.log(items); 

// 
items[1].style.backgroundColor = 'pink'; 
items[1].style.fontWeight = 'bold'; 
items[1].textContent = 'buried in louie '
items[1].style.color = 'green';

items[0].style.backgroundColor = 'red'; 
items[0].style.fontWeight = 'bold'; 
items[0].textContent = 'remember me like john lennon'
items[0].style.color = 'white';

items[2].style.backgroundColor = 'blue'; 
items[2].style.fontWeight = 'bold'; 
items[2].textContent = 'im talking all brown linen'
items[2].style.color = 'white';

for ( let i = 1; i<=10; i++ ){

console.log(i);

}
// won't go above 10 on the for loop 

for (let i =0; i<=20; i+=2){

console.log(i);

}
// won't go above 20 and in intervals of 2 

for (let i = 100; i>=0; i-=2){

console.log(i);

}
// 

const myDiamonds = ['Snacky','Scary','Lily','IttyBitty','Pinchie','Piggy','Lanky','Nibbles','Kibbles'];

for (let i = 0; i < myDiamonds.length; i++){

console.log(i, myDiamonds[i]);

}

// for (let i = 0; i < myDiamonds.length; i++) {
    //     console.log(i, myDiamonds[i]);
    // }
    
    // for(var i = 0; i < items.length; i++) {
    
    //     items[i].style.backgroundColor = 'grey';
    //     items[i].textContent = "Changing the List Items";
    //     items[i].style.color = 'white';
    
    // }
    
    //////////GetElementByTagName
    
    // 
    // var li = document.getElementsByTagName('li');
    
    // console.log(li); 
    // console.log(li[1]);
    
    // li[1].textContent = "Hello 2 Now"; 
    // li[1].style.fontWeight = 'bold';
    // li[1].style.backgroundColor = 'green';
    // li[1].style.color = 'white'; 
    
    // for(var i = 0; i < li.length; i++) {
    
    // li[i].style.backgroundColor = 'lightgrey';
    // li[i].textContent = "I Changed The Items From the DOM";
    // li[i].style.color = 'white'; 
    
    // }
    
    /////////////////////////////////////////////////////////////////////////////
    ////////////////////////////Query Selector///////////////////////////////////
    
    // 
    var header = document.querySelector('#main-header');
    header.style.borderBottom = 'solid 4px hotpink'; 
    
    var input = document.querySelector('input');
    input.value = "I just changed the text value in the input box.";

    var submit = document.querySelector('input[type="submit"]');

    submit.value = "Hello Button";