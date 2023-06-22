import {type TypedUseSelectorHook, useSelector} from 'react-redux';
import {type AppState} from '~/utils/store';

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
