function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var a=[]; c=0 ;
  for ( var j=0 ;j<collection_a.length ;j++)
  for ( var i=0 ;i<collection_b.length ;i++)
  if(collection_a[j]===collection_b[i]){
    a[c]=collection_a[j];
  c++}
  return a ;
}

module.exports = collect_same_elements;
