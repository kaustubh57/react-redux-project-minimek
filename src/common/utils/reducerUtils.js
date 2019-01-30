// https://medium.com/@avremelk/practical-redux-course-1aeb74bd01aa

export function createReducer(initialState, fnMap) {
  return (state = initialState, {type, payload}) => {
    const handler = fnMap[type];

    return handler ? handler(state, payload) : state;
  };
}

export function reduceReducers(...reducersArray) {
  return function (previousState, currentAction) {
    const reducerFunction = function (accumulator, currentReducer) {
      return currentReducer(accumulator, currentAction);
    };

    return reducersArray.reduce(reducerFunction, previousState);
  }
}

// [ORIG Version 1]
// export function reduceReducers(...reducers) {
//   return (previousState, currentAction) => {
//     return reducers.reduce((accumulator, currentReducer) => {
//         return currentReducer(accumulator, currentAction)
//       },
//       previousState
//     );
//   }
// }


// [Version 2: for readability]
// export function reduceReducers(...reducersArray) {
//   return function (previousState, currentAction) {
//     const reducerFunction = function (accumulator, currentReducer) {
//       return currentReducer(accumulator, currentAction);
//     };
//
//     return reducersArray.reduce(reducerFunction, previousState);
//   }
// }