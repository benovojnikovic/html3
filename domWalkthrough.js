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

document.all[10].textContent = "I just changed the header"