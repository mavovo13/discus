function dateTimeFormat(date){
  var y = String(date.getFullYear());
  var m = To2Byte(String(date.getMonth()+1));
  var d = To2Byte(String(date.getDate()));
  var h = To2Byte(String(date.getHours()));
  var mm = To2Byte(String(date.getMinutes()));
  var s = To2Byte(String(date.getSeconds()));
  return y+'/'+m+'/'+d+' '+h+':'+mm+':'+s
}

function To2Byte(str){
  return str.length == 1 ? '0'+str : str
}
