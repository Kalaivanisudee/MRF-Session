const apiUrl = "https://cors-anywhere.herokuapp.com/gitlab.com/gvanderput/gerard-movie-filtering/-/raw/master/data/movies.json"

async function getData(api,callbackdata){
    const res=await fetch(api);
    const data=await res.json();
    callbackdata(data);
}
function displayData(data){
    console.log(data)
    const withoutDescription=data.map((value,index,array)=>{
        console.log("My value:", value);
        let obj={...value}
        console.log("My Cloned Object",obj);
        delete obj["description"];
        return obj;
    })
    console.log(withoutDescription);
}
const data = getData(apiUrl, displayData);
console.log(data);