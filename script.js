const apiUrl = "./data.json"

async function getData(api,callbackdata){
    const res=await fetch(api);
    const data=await res.json();
    callbackdata(data);
}
function displayData(data){
    console.log(data)
    const withoutDescription=data.map((value,index,array)=>{
        // console.log("My value:", value);
        let obj={...value}
        // console.log("My Cloned Object",obj);
        delete obj["description"];
        return obj;
    })
    console.log(withoutDescription);
    let released2020 =data.filter((value,index,array)=>value.year==2020);
    console.log("Released Movie List",released2020);
    //  Filter Method using index 
    const releasedMovie2020=withoutDescription.filter((value,index,array)=> index %2 ==0)
    console.log("Filter method using index",releasedMovie2020);
    
//    Reduce method-1
   data.reduce((accum,value,index)=>{
    console.log("my accumalor",accum);
    console.log("my value", value);
    return index;
   },0) 
// Reduce method 2
let released2020Votes = released2020.reduce((accum,value,index)=>{
    return accum+value.votes;
},0)
console.log("sum of Votes", released2020Votes);
// Reduce Method - 3
const genreObj =released2020.reduce((accum,value)=>{
   value.genreIds.forEach(element=>{
    if(accum[element]){
        accum[element].push(value)
    }else{
        accum[element] = [value];
    }
    
   })
   return accum;
},{})

console.log("GenereID listed",genreObj);
   
}
const data = getData(apiUrl, displayData);
console.log(data);