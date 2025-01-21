// TODO: write your code here
export function orderByProps(objData, sortList) {  
  function Property(key, value) {
    this.key = key;
    this.value = value;
  }
  const listProperties = [];
  sortList.forEach(key => {
    if (Object.prototype.hasOwnProperty.call(objData, key)) {
      listProperties.push(new Property(key, objData[key]));
    }
  });
  Object.keys(objData).forEach(key => {
    if (!sortList.includes(key)) {
      listProperties.push(new Property(key, objData[key]));
    }
  });
  return listProperties;
}
