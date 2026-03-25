function countNegatives(arr) {
  //validating if the input is array
  if (!Array.isArray(arr)) return false;

  let count = 0;

  for (let i = 0; i < arr.length; i++)
  {
    let num = arr[i];
    //Number.isFinite -> input is a finite number not Nan, infinite
    if (typeof num !== 'number' || !Number.isFinite(num)) return false;
    if (num < 0) count++;
  }
  return count;
}

//using filter
function countNegatives1(arr) {
  if (!Array.isArray(arr)) return false;
  if (!arr.every(x => typeof x === 'number' && Number.isFinite(x)))
    return false;

  return arr.filter(x => x < 0).length;
}

// using reduce
function countNegatives2(arr) {
  if (!Array.isArray(arr)) return false;
  if (!arr.every(x => typeof x === 'number' && Number.isFinite(x)))
    return false;

  return arr.reduce((count,x)=>count + (x<0? 1:0) ,0);
}
let arr=[-1,0,-5,34,23];
count(arr);
