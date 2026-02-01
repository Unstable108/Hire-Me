class LRU{
    constructor(capacity){

    }
    
    put(key, value){

    }

     get(value){}
}

const cache= new LRU(2);

cache.put(1,10);
cache.put(2,20);
console.log(cache.get(1));
cache.put(3,30);
console.log(cache.get(2))