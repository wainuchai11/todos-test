import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { shiftFruit } from "@/store/slices/fruitSlice";
import { addProduce } from "@/store/slices/producesSlice";

export default function ItemList() {
    const dispatch = useDispatch();
    const fruitItems = useSelector((state: RootState) => state?.fruit);


    const onShift = () => {
        if (fruitItems.length === 0) return;
        const shiftItem = fruitItems[0];
        dispatch(shiftFruit());
        dispatch(addProduce(shiftItem));
    };

    return (
        <div className="slot-container" onClick={onShift} style={{ cursor: fruitItems.length ? 'pointer' : 'default' }}>
            <h3>Fruit</h3>
            <div className="button-list">
                {fruitItems.map((item, index) => (
                    <div className="item" key={`${item.type}-${index}`}>
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    );
}
