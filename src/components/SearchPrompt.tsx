/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, {type KeyboardEvent, useEffect, useState} from 'react';
import {Command} from 'cmdk';
import {useAppSelector} from '~/utils/hooks/useAppSelector';
import {useDispatch} from 'react-redux';
import {setHidden, toggle} from '~/utils/slices/searchPromptSlice';
import {api} from '~/utils/trpc';
import getKeywords from '~/utils/getKeywords';
import {type TKeyword} from '~/utils/types';
import Link from 'next/link';

const SearchPrompt = () => {
  const [keywords, setKeywords] = useState<TKeyword[]>([]);
  const [searchResults, setSearchResults] = useState<TKeyword[]>([]);
  const [searchVal, setSearchVal] = useState('');
  const shown = useAppSelector(state => state.searchPrompt.value.shown);
  const dispatch = useDispatch();

  const allPages = api.posts.getAllPosts.useQuery().data;
  useEffect(() => {
    const matchingResults: TKeyword[] = [];
    if (keywords?.length && searchVal) {
      keywords.forEach(keyword => {
        if (keyword.title.toLowerCase().includes(searchVal)) {
          matchingResults.push(keyword);
          return;
        }
        if (keyword.linkName?.toLowerCase().includes(searchVal)) {
          matchingResults.push(keyword);
        }
      });
    }

    setSearchResults(matchingResults);
  }, [searchVal, keywords]);

  useEffect(() => {
    if (allPages) {
      const allKeywords = getKeywords(allPages);
      setKeywords(allKeywords);
    }

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
  }, [dispatch, allPages]);

  return (
    <>
      <section
        className={`${shown ? `absolute` : `hidden`} h-screen w-screen bg-dark/70`}
      ></section>
      <Command.Dialog
        open={shown}
        className="translate-y-[50%]} absolute left-1/2 top-1/4 order-2 w-1/3 translate-x-[-50%] rounded-md border border-gray bg-lighterdark p-2 text-white"
      >
        <Command.Input
          className="w-full bg-lighterdark p-1 text-white outline-none"
          placeholder="Search..."
          value={searchVal}
          onValueChange={setSearchVal}
        />
        <section className="flex flex-col gap-2">
          {searchResults?.length > 0 &&
            searchResults.map(({type, path, linkName, title}, idx) => {
              if (idx < 5) {
                if (type === 'Page') {
                  return (
                    <Link href={`/info/${path}`} key={idx}>
                      <span className=" hover:text-blue">{title}</span>
                    </Link>
                  );
                } else {
                  return (
                    <a href={path} key={idx} target="_blank">
                      <span className=" hover:text-blue">
                        {linkName && `${linkName} (${title})`}
                      </span>
                    </a>
                  );
                }
              }
            })}
        </section>
      </Command.Dialog>
    </>
  );
};

export default SearchPrompt;
