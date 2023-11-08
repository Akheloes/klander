const myObject = {
  value: 42,

  traditionalFunction: function () {
    console.log("oldie but baddie =", this.value);
  },

  arrowFunction: () => {
    console.log("new can screw =", this.value);
  },
};

myObject.traditionalFunction();
myObject.arrowFunction();
