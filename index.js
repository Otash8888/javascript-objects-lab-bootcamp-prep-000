var recipes = {
  key:'value',
  
}
function updateObjectWithKeyAndValue (object, key, value){
  object[key]=value
  var obj2=Object.assign({},object,{[key]:value})
  
  return obj2;
}
function updateObjectWithKeyAndValue (object, key, value){
 
  var obj2=Object.assign({},object,{[key]:value})
  
  return obj2;
}