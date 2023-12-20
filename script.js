const camelCaseToKebabCase = (string) => {
    return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }
  
  console.log(camelCaseToKebabCase('myClass'));
  console.log(camelCaseToKebabCase('getElementById'));
  console.log(camelCaseToKebabCase('class'));
  
