
//const request = require("request");
const fs = require('fs');
const fetch = require('node-fetch');
const path = require('path');
const url = 'http://jsonplaceholder.typicode.com/posts';

let result;

const getData = ( async () => {
    const response = await fetch(`${url}`);
    const data = await response.json();
    result = data;
    console.log(result);

    fs.writeFile(path.join(__dirname, './result', 'posts.json'), JSON.stringify(result), (err)=> {
        if (err) {
            console.log(err);
        }
    })
})();




// request({
//     url:"http://jsonplaceholder.typicode.com/posts",
//     json: true
// }, (err, response, body) => {
//     console.log(body);
//     //console.log(JSON.stringify(body, undefined, 4));
// })

//file system in nodejs



// const getJson = () => {
//     return fetch(`http://jsonplaceholder.typicode.com/posts`)
//         .then(function(response){
//             return response.json();
//         })
//         .then(function(data){
//             fs.writeFileSync('posts.JSON', data , (err) => {
//                 if (err) throw err;
//                 console.log('file created successfully');
//                 //if there is an error throw error
//             });
//         });
// }

// getJson();



// var http = require('http');

//read files

// fs.readFile('test.html', (err, data)=> {
//     if (err) throw err;
//     console.log(data);
// })

// http.createServer((req, res) => {
//     fs.readFile('myFirstFile.txt', (err, data)=> {
//         if (err) throw err;
//         res.writeHead(200, {
//             'Content-Type': 'text/plain'
//         });
//         res.write(data);
//         res.end();

//         //console.log(data);
//     })
// }).listen(5500);


//create files
/*fs.writeFile('myFirstFile.txt', 'Hello World', (err) => {
    if (err) throw err;
    console.log('file created successfully');
    //if there is an error throw error
});*/

/*fs.writeFile('myFirstFile.txt', 'Hello World \nzuri Interns\nLearning Node Js: File system', (err) => {
    if (err) throw err;

    console.log ('file was updated correctly')
} )*/

//Append or update and create a file use appendFile and writeFile

//fs.appendFile

//fs.writeFile

//update files

//delete files

//rename files

