const promiseOne = new Promise((resolve, rejection) => {
  //do async task
  //like db call,

  setTimeout(() => {
    console.log("Promise written");
    resolve(); // to use .then function
  }, 1000);
});

promiseOne.then(() => {
  console.log("====================================");
  console.log("promise consume");
  console.log("====================================");
});

//promise takes callback function
new Promise((resolve, rejection) => {
  setTimeout(() => {
    console.log("Async operation is done");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Consuming promise");
});

const promiseThree = new Promise((resolve, rejection) => {
  setTimeout(() => {
    console.log("====================================");
    console.log("Async Task 3");
    console.log("====================================");
    resolve({ name: "raja", sex: "M" });
  }, 1000);
});

promiseThree.then((data) => {
  console.log(data);
});

const promiseFour = new Promise((resolve, rejection) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "unstable" });
    } else {
      rejection("ERROR: wrong");
    }
  }, 1000);
});

const username = promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "promise5", password: "123456" });
    } else {
      reject("ERROR: 5 went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    const data = await response.username;
    console.log(response);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

consumePromiseFive();

console.log("----------------------");

async function getAllusers() {
  try {
    const response = await fetch("https://dummyjson.com/users/search?q=John");
    const data = await response.json();
    console.log('====================================');
    console.log(data);
    console.log('====================================');
  } catch (error) {
    console.log(error);
  }
}
getAllusers();

//chainable
fetch("https://dummyjson.com/users/search?q=John")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})
