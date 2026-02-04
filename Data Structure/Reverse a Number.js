function rev(x){
    let revers=0;
    while(x>0)
    {
        let digit= x%10;
        x= Math.floor(x/10);
        revers = (10*revers) + digit;
    }
    console.log(revers);
}
rev(1234);