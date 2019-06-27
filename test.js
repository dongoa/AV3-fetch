import blob from './src/blob.js'
import buffer from './src/buffer.js'
import text from './src/text.js'
import json from './src/json.js'

import xml,{html,svg} from './src/xml.js'

import image from './src/image.js'

let blobresult = blob('./1.txt');
console.log(blobresult);
let bufferresult = buffer('./1.txt');
console.log(bufferresult);
let textresult = text('./1.txt');
console.log(textresult);
let jsonresult = json('./1.txt');
console.log(jsonresult);

let xmlresult = xml('./1.txt');
console.log(xmlresult);
let htmlresult = html('./1.txt');
console.log(htmlresult);
let svgresult = svg('./1.txt');
console.log(svgresult);

let x = image("1.png", {crossOrigin: "anonymous"})
    .then( (img) => console.log(img) );