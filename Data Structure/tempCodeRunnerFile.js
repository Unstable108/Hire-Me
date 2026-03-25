let temp=x;
    if(x<0) return false;

    let revers=0; 
    while(temp>0)
    {
        let  lastDigit= temp%10;
        temp = Math.floor(temp/10);
        revers = revers*10 + lastDigit; //main logic
    }
    return x===revers;