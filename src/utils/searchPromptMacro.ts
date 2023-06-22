import {type KeyboardEvent} from 'react';
import {store} from './store';
import {toggle} from './slices/searchPromptSlice';

let prevKey = '';
const searchPromptMacro = (e: KeyboardEvent<HTMLElement>) => {
  console.log(prevKey);
  if (prevKey === 'Control' && e.key === 'k') {
    store.dispatch(toggle());
  }
  prevKey = e.key;
};

export default searchPromptMacro;
