/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, {type KeyboardEvent, useEffect} from 'react';
import {Command} from 'cmdk';
import {useAppSelector} from '~/utils/hooks/useAppSelector';
import {useDispatch} from 'react-redux';
import {setHidden, toggle} from '~/utils/slices/searchPromptSlice';

const SearchPrompt = () => {
  const shown = useAppSelector(state => state.searchPrompt.value.shown);
  const dispatch = useDispatch();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        dispatch(toggle());
      }

      if (e.key === 'Escape') {
        dispatch(setHidden());
      }
    };

    /* The only used prop is shared between both types */
    // @ts-ignore
    document.addEventListener('keydown', onKeyDown);
    return () => {
      // @ts-ignore
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [dispatch]);

  return (
    <>
      <section
        className={`${shown ? `absolute` : `hidden`} h-screen w-screen bg-dark/70`}
      ></section>
      <Command.Dialog
        open={shown}
        className="translate-y-[50%]} absolute left-1/2 top-1/4 order-2 w-1/3 translate-x-[-50%] rounded-md border border-gray bg-lighterdark p-2"
      >
        <Command.Input
          className="w-full bg-lighterdark p-1 text-white outline-none"
          placeholder="Search..."
        />
        {/* command group, item, separator */}
      </Command.Dialog>
    </>
  );
};

export default SearchPrompt;
