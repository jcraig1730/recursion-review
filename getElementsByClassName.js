// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   // var a =  document.getElementsByClassName(className);
//   // return a 
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var results = []
  var body = document.body
  //var childNodes = document.body.childNodes
  
  // need to see if body has children
  // if (body.children.length === 0){
  //   return []
  // }

  //access each child if body has children to see if className ==== class Name 
  var func = function (node) {
    if (node.classList){
      if (node.classList.contains(className)){
        results.push(node)
      //console.log(results)
      }
    }
    
    if (node.hasChildNodes){
      for (var x = 0; x < node.childNodes.length; x++){
        func(node.childNodes[x]) }
        //console.log(results)
    }
    console.log(results)
  } 
  func(body)
  //console.log(results)
  return results
//var a = document.getElementsByClassName(className)
  //console.log(a)
  //console.log(results) 
  //return  
  //console.log(document.querySelectorAll('.' + className))

};
