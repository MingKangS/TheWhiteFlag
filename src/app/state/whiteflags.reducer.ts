import {createReducer, on, Action} from '@ngrx/store';
import { WhiteFlag } from '../interfaces/main';

import {setWhiteFlags} from './whiteflags.actions'

export const initialState: WhiteFlag[] = [];

const _whiteflagReducer = createReducer(
  initialState,
  on(setWhiteFlags, (state ,action) => action.payload.WhiteFlags),

)

export function whiteflagReducer(state, action){
  return _whiteflagReducer(state, action);
}