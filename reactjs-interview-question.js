/*
  useMemo
  useCallback
*/

//Both Are same - and work for memorized values and do not render again once component called
//Usememo is used when you have to work with data value = Memoaized value
//Usememo is used when you have to work with data and whole function or child component Memoaized Funciion


/*
  Change Detection
*/

//The idea is simple: each time setState is called, React created a new VDOM from a component with the new state. 
//Then the current and the new VDOM are compared and differences (if there are?) are concretely applied to the DOM.
