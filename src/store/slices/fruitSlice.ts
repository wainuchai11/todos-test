import { createSlice, PayloadAction } from '@reduxjs/toolkit';



type FruitItem = {
    type: 'Fruit';
    name: string;
}


const initialFruitState: FruitItem[] = [] as FruitItem[];


export const fruitSlice = createSlice({
    name: 'fruit',
    initialState: initialFruitState,
    reducers: {
        addFruit: (state, action: PayloadAction<object>) => {
            state.push(action.payload as FruitItem);
        },
        removeFruit: (state, action: PayloadAction<string>) => {
            return state.filter(item => item.name !== action.payload);
        },
    },
});
export const { addFruit, removeFruit } = fruitSlice.actions;
export default fruitSlice.reducer;