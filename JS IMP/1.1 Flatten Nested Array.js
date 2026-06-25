let arr = [1,2,3,[4,[5,6]],[7,9],[1,[2,[3,[56,68]]]]];

//using flat
console.log(arr.flat(Infinity));


//recursive
function flatten(array)
{
    let ans=[];
    array.forEach(element => {
        if(Array.isArray(element))
        {
            //flatten(element) -> gives an array
            //so using spread operator, instead of pushing whole array
            //we push each element of that array
            // ans.push(...flatten(element));

            //best approach
            ans = ans.concat(flatten(element))
        }
        else{
            ans.push(element);
        }
    });
    return ans;
}

console.log(flatten(arr));

//using reduce
function flatReduce(array)
{
    return array.reduce((ans,element)=>{
        if(Array.isArray(element))
        {
            ans= ans.concat(flatReduce(element))
        }
        else{
            ans= ans.concat(element);
        }
        return ans;
    },[])
}
console.log(flatReduce(arr));

function flatReduce2(array){
    return array.reduce((ans,element)=>{
        Array.isArray(element) ? ans= ans.concat(flatReduce(element)) : ans= ans.concat(element);
        return ans;
    },[]);
}
console.log(flatReduce2(arr));