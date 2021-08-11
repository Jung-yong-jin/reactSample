const wrappedComponent = {
  name: 'name',
  displayName: 'displayName',
};

// { 객체 프로퍼티: 목표 변수 }
// {name: componentName} = wrappedComponent;
const { displayName, name: componentName } = wrappedComponent;
console.log(componentName);
console.log(displayName);
