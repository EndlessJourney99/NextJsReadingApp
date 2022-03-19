import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface exampleState {
	value: string;
}

const initialState: exampleState = {
	// comments: [],
	value: 'initial value',
};

export const exampleSlices = createSlice({
	name: 'authStatus',
	initialState,
	reducers: {
		setValue: (state, action: PayloadAction<exampleState>) => {
			state.value = action.payload.value;
		},
	},
});

export const { setValue } = exampleSlices.actions;

export const selectExampleValue = (state: RootState) => state.auth;

export default exampleSlices.reducer;
