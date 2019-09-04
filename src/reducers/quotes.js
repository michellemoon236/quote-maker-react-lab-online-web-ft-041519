//what is given
// export default (state = [], action) => {
//   return state;
// }


export default function quotes(state = {
  quotes: [],
}, action) {
  switch (action.type) {
    case 'ADD_QUOTE':
 
      console.log({ quotes: state.quotes.concat(action.payload) });
 
      return { quotes: state.quotes.concat(action.payload) };
    // case 'REMOVE_QUOTE':
      
    // case 'UPVOTE_QUOTE':

    // case 'DOWNVOTE_QUOTE':

    default:
      return state;
  }
}