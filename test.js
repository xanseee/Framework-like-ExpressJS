// const fs = require('fs');
// const path = require('path');
// const os = require('os');
// const Emitter = require('events');

// if (process.argv[2] === 'create') {
//     fs.mkdir(path.resolve('dir', 'dir2', 'dir3'), {recursive: true}, (err) => {
//         if(err) console.error(err);
//         console.log("folders created!");
//     });
// } else if (process.argv[2] === 'delete') {
//     fs.rmdir(path.resolve('dir'), {},(err) => {
//         if(err) console.error(err);
//         console.log("folders deleted!");
//     });
// }

// const writeFileAsync = async (path, data) => {
//     return new Promise((resolve, reject) => fs.writeFile(path, data, {encoding: 'utf8'}, (err) => {
//         if(err) {
//             return reject(err.message);
//         }
//         resolve("successful write!")
//     }))
// }
//
//
// const appendFileAsync = async (path, data) => {
//     return new Promise((resolve, reject) => fs.appendFile(path, data, {encoding: 'utf8'}, (err) => {
//         if(err) {
//             return reject(err.message);
//         }
//         resolve("successful append!")
//     }))
// }
//
// const readFileAsync = async (path) => {
//     return new Promise((resolve, reject) => fs.readFile(path, {encoding: 'utf8'}, (err, data) => {
//         if(err) {
//             return reject(err.message);
//         }
//         resolve(data);
//     }))
// }

// const removeFileAsync = async (path) => {
//     return new Promise((resolve, reject) => fs.rm(path, (err) => {
//         if(err) {
//             return reject(err.message);
//         }
//         resolve("successful remove!");
//     }))
// }

// writeFileAsync(path.resolve('dir', 'text.txt'), '123123123123 ')
//     .then(() => appendFileAsync(path.resolve('dir', 'text.txt'), 'goida'))
//     .then(() => readFileAsync(path.resolve('dir', 'text.txt'))).then(data => console.log(data))
//     .catch(e => console.error(e));

// removeFileAsync(path.resolve('dir', 'text.txt')).then(data => console.log(data)).catch(e => console.error(e));

// const text = process.env.TEXT || '';
// writeFileAsync(path.resolve('dir', 'text.txt'), text)
//     .then(() => readFileAsync(path.resolve('dir', 'text.txt')))
//     .then(data => data.split(' ').length)
//     .then(count => writeFileAsync(path.resolve('dir', 'text.txt'), `${count}`));

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus().length);

// const emitter = new Emitter();
//
// emitter.on("message", (data, second, third) => {
//     console.log('Вы прислали 1 сообщение ' + data);
//     console.log('Вы прислали 2 сообщение ' + second);
//     console.log('Вы прислали 3 сообщение ' + third);
// })
//
// const MESSAGE = process.env.MESSAGE || '';
//
// if (MESSAGE) {
//    emitter.emit('message', MESSAGE, 123, 3124);
// } else {
//     emitter.emit('message', "Ты не указал сообщение ебанат");
// }


const endpoints = {}

console.log(endpoints);

endpoints['/users'] = {}

console.log(endpoints);

endpoint = endpoints['/users']

console.log(endpoints);

endpoint["Get"] = () => {};

console.log(endpoints);

