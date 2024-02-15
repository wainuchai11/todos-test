import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { removeProduce } from "@/store/slices/producesSlice";
import { addFruit } from "@/store/slices/fruitSlice";
import { addVegetable } from "@/store/slices/vegetableSlice";

type Item = {
    type: string;
    name: string;
};

export default function ItemList() {
    const dispatch = useDispatch();
    const produceItems = useSelector((state: RootState) => state?.produce);


    const handleOnclick = (value: object) => {
        dispatch(removeProduce((value as Item).name));
        if ((value as Item).type === "Fruit") {
            dispatch(addFruit(value as Item));
        }
        else if ((value as Item).type === "Vegetable") {
            dispatch(addVegetable(value as Item));
        }
    }
    return (
        <div>
            <div className="button-list">
                {produceItems.map((item, index) => (
                    <button key={`btn-${item.type}-${index}`} id={`btn-${item.type}-${index}`} onClick={() => handleOnclick(item)}>{item.name}</button>
                ))}
            </div>
        </div>
    );
}