import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { removeFruit } from "@/store/slices/fruitSlice";
import { addProduce } from "@/store/slices/producesSlice";

export default function ItemList() {
    const dispatch = useDispatch();
    const fruitItems = useSelector((state: RootState) => state?.fruit);

    const handleOnclick = (value: object) => {
        dispatch(removeFruit((value as any).name));
        dispatch(addProduce(value as any));
    }

    return (
        <div className="slot-container">
            <h3>Fruit</h3>
            <div className="button-list">
                {fruitItems.map((item, index) => (
                    <button key={`btn-${item.type}-${index}`} id={`btn-${item.type}-${index}`} onClick={() => handleOnclick(item)}>{item.name}</button>
                ))}
            </div>
        </div>
    );
}