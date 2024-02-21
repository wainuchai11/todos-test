import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { addProduce, removeProduce } from "@/store/slices/producesSlice";
import { addFruit, removeFruit } from "@/store/slices/fruitSlice";
import { addVegetable, removeVegetable } from "@/store/slices/vegetableSlice";

type Item = {
    type: string;
    name: string;
};

export default function ItemList() {
    const dispatch = useDispatch();
    const produceItems = useSelector((state: RootState) => state?.produce);

    const handleOnclick = (value: Item) => {
        dispatch(removeProduce(value.name));
        if (value.type === "Fruit") {
            dispatch(addFruit(value as any));
        } else if (value.type === "Vegetable") {
            dispatch(addVegetable(value as any));
        }
        onCountdown(value);
    }

    const onCountdown = (value: Item) => {
        setTimeout(() => {
            const { name } = value;
            dispatch(removeFruit(name));
            dispatch(removeVegetable(name));
            dispatch(addProduce(value as any));
        }, 10000);
    };

    return (
        <div>
            <div className="button-list">
                {produceItems.map((item, index) => (
                    <button key={`btn-${item.type}-${index}`} onClick={() => handleOnclick(item)}>
                        {item.name}
                    </button>
                ))}
            </div>
        </div>
    );
}
