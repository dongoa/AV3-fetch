import { csvParse,dsvFormat,tsvParse } from "d3-dsv";
import text from "./text.js"

function dsvParse(parse){
    return (input, init, row) => {
        if(arguments.length === 2 && typeof init === "function") row = init=undefined;
        return text(input,init).then( (response) => format.parse(response,row) );
    }
}

export default function dsv(delimiter, input, init, row){
    if(arguments.length === 3 && typeof init === "function") row=init, init=undefined;
    let format = dsvFormat(delimiter);
    return text(input,init).then( (response) => format.parse(response,row) );
}

export var csv = dsvParse(csvParse);
export var tsv = dsvParse(tsvParse);