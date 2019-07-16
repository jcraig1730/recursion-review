// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // keep string
  if (typeof obj === 'string'){ 
    return '"' + obj + '"'
  }
  // convert number to string
  if (typeof obj === 'number'){
    return String(obj)
  }
  // convert null
  if (!obj){
    //console.log('hi')}
    return String(obj)
  }
  //convert true 
  if (typeof obj === 'boolean'){
    return String(obj)
  }
  // convert array to string 
  return stringifyObj(obj);
  
  function stringifyObj(obj){
    //IF obj = array 
    if (obj.constructor === [].constructor){
      if (obj.length === 0) return '[]'
      var string = '[';
      obj.forEach((item, idx) => {
        string += stringifyJSON(item);
        if (idx < obj.length - 1){
          string += ',';
        }
      })
      return string += ']';
    } 

    //If obj = object
    if (obj.constructor === {}.constructor){
      var keys = Object.keys(obj)
      var values = Object.keys(obj)
      if (keys.length === 0) return "{}"
      var string = "{"
      for (var x = 0; x < keys.length; x++){
        if (typeof obj[keys[x]] === 'function' || obj[keys[x]] === undefined){
          continue
        }
        string = string + stringifyJSON(keys[x]) + ":" + stringifyJSON(obj[keys[x]]);
        if (x < keys.length - 1){
          string += ","
        }
      }
    return string + "}"
    }
  }
};
