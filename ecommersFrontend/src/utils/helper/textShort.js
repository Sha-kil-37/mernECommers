const textShort = (description) => {
  if (description.length > 20) {
    let result = description.substr(0, 20);
    return result + "...";
  }else{
    return description
  }
};
//
export default textShort;
