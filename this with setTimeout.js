const stud = {
  fname: "Raja",
  lname: "Das",
  getName: function () {
    console.log(this);
    console.log(this.fname, this.lname);
  },
};
stud.getName();

const stud2 = {
  fname: "XYZ",
  lname: "Das",
  getName: function () {
    setTimeout(() => {
      console.log(this);
      console.log(this.fname, this.lname);
    }, 2000);
  },
};
stud2.getName();

const stud3 = {
  fname: "XYZ",
  getName: function () {
    setTimeout(function() { // Regular function keyword
      console.log(this.fname); // 'this' is lost! It points to the Window/Global
    }, 2000);
  },
};

stud3.getName()
