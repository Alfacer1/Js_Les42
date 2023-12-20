const camelCaseToKebabCase = (string) => {
    return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }
  
  console.log(camelCaseToKebabCase('myClass')); // 'my-class'
  console.log(camelCaseToKebabCase('getElementById')); // 'get-element-by-id'
  console.log(camelCaseToKebabCase('class')); // 'class'
  