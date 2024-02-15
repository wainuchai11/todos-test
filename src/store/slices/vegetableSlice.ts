import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type VegetableItem = {
    type: 'Vegetable';
    name: string;
}

const initialFruitState: VegetableItem[] = [] as VegetableItem[];


export const vegetableSlice = createSlice({
    name: 'vegetable',
    initialState: initialFruitState,
    reducers: {
        addVegetable: (state, action: PayloadAction<object>) => {
            state.push(action.payload as VegetableItem);
        },
        removeVegetable: (state, action: PayloadAction<string>) => {
            return state.filter(item => item.name !== action.payload);
        },
    },
});
export const { addVegetable, removeVegetable } = vegetableSlice.actions;
export default vegetableSlice.reducer;