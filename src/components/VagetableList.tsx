import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { removeVegetable } from "@/store/slices/vegetableSlice";
import { addProduce } from "@/store/slices/producesSlice";

export default function ItemList() {
    const dispatch = useDispatch();
    const vegetableItems = useSelector((state: RootState) => state?.vegetable);

    const handleOnclick = (value: object) => {
        dispatch(removeVegetable((value as any).name));
        dispatch(addProduce(value as any));
    }

    return (
        <div className="slot-container">
            <h3>Vagetable</h3>
            <div className="button-list">
                {vegetableItems.map((item, index) => (
                    <button key={`btn-${item.type}-${index}`} id={`btn-${item.type}-${index}`} onClick={() => handleOnclick(item)}>{item.name}</button>
                ))}
            </div>
        </div>
    );
}