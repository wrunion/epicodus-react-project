/* Action creator */ 
export const selectItem = (song) => {
  /* Return an action */
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};