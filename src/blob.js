export default (input, init)=>{
	return fetch(input, init).then((response)=>{
        if(!response.ok) throw new Error(response.status+" "+response.statusText);
        return response.blob();
    });
}