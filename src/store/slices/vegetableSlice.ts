import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type VegetableItem = {
    type: 'Vegetable';
    name: string;
}

const initialVegetableState: VegetableItem[] = [];

export const vegetableSlice = createSlice({
    name: 'vegetable',
    initialState: initialVegetableState,
    reducers: {
        addVegetable: (state, action: PayloadAction<VegetableItem>) => {
            state.push(action.payload);
        },
        removeVegetable: (state, action: PayloadAction<string>) => {
            return state.filter(item => item.name !== action.payload);
        },
        shiftVegetable: (state) => {
            return state.slice(1);
        }
    },
});

export const { addVegetable, removeVegetable, shiftVegetable } = vegetableSlice.actions;
export default vegetableSlice.reducer;
