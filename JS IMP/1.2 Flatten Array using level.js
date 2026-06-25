let arr = [1,2,3,[4,[5,6]],[7,9],[1,[2,[3,[56,68]]]]];

//recursive
function flatten(array,level=1)
{
    let ans=[];
    array.forEach(element => {
        if(Array.isArray(element) && level >0)
        {
            ans = ans.concat(flatten(element,level-1))
        }
        else{
            ans.push(element);
        }
    });
    return ans;
}

console.log(flatten(arr));