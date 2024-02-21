import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FruitItem = {
    type: 'Fruit';
    name: string;
}

const initialFruitState: FruitItem[] = [];

export const fruitSlice = createSlice({
    name: 'fruit',
    initialState: initialFruitState,
    reducers: {
        addFruit: (state, action: PayloadAction<FruitItem>) => {
            state.push(action.payload);
        },
        removeFruit: (state, action: PayloadAction<string>) => {
            return state.filter(item => item.name !== action.payload);
        },
        shiftFruit: (state) => {
            return state.slice(1);
        }
    },
});

export const { addFruit, removeFruit, shiftFruit } = fruitSlice.actions;
export default fruitSlice.reducer;
