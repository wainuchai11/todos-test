import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { list } from '@/assets/constant';

type ProduceItem = {
    type: 'Fruit' | 'Vegetable';
    name: string;
};

const initialState: ProduceItem[] = list as ProduceItem[];

export const produceSlice = createSlice({
    name: 'produce',
    initialState,
    reducers: {
        addProduce: (state, action: PayloadAction<ProduceItem>) => {
            const existingItem = state.find(item => item.name === action.payload.name);
            if (!existingItem) {
                return [...state, action.payload];
            } else {
                console.log(`Item ${action.payload.name} already exists`)
                return state;
            }
        },
        removeProduce: (state, action: PayloadAction<string>) => {
            return state.filter(item => item.name !== action.payload);
        },
    },
});

export const { addProduce, removeProduce } = produceSlice.actions;

export default produceSlice.reducer;
