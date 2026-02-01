const p1= {
    xp1:"I am in p1",
}

const p2={
    xp2:"I am in p2",
    __proto__:p1,
}

const p3={
    xp3:"I am in p3",
    __proto__:p2,
}

console.log(p3.xp1);