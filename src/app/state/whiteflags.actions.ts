import {createAction ,props} from '@ngrx/store'
import { WhiteFlag } from '../interfaces/main'


export const setWhiteFlags = createAction(
	'setWhiteFlags',  
	props<{payload: {WhiteFlags: WhiteFlag[];}}>()
);
