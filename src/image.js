export default function(input, init){
    return new Promise(
        (resolve,reject)=>{
            let image = new Image;
            for(let key in init) image[key] = init[key];
            image.onerror = reject;
            image.onload = () => resolve(image);
            image.src = input;
        }
    )
}