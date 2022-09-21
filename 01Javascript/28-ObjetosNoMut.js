let obj = {
    name:"FreeCodeCamp",
    review:"Awesome"
  };
  Object.freeze(obj); // permite que las propiedades de un elemento no cambien
  obj.review = "bad";
  obj.newProp = "Test";
  console.log(obj); 