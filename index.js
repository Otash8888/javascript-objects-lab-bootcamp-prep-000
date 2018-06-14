var recipes = {
  key:'value',
  
}


function updateObjectWithKeyAndValue (object, key, value){
 
  var obj2=Object.assign({},object,{[key]:value})
  
  return obj2;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
   object[key]=value
   return object;
}
function deleteFromObjectByKey(object, key){
 var newobj = delete object.key;
}