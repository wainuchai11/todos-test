import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { shiftVegetable } from "@/store/slices/vegetableSlice";
import { addProduce } from "@/store/slices/producesSlice";

export default function ItemList() {
    const dispatch = useDispatch();
    const vegetableItems = useSelector((state: RootState) => state?.vegetable);



    const onShift = () => {
        if (vegetableItems.length === 0) return;
        const shiftItem = vegetableItems[0];
        dispatch(shiftVegetable());
        dispatch(addProduce(shiftItem));
    };

    return (
        <div className="slot-container" onClick={onShift} style={{ cursor: vegetableItems.length ? 'pointer' : 'default' }}>
            <h3>Vegetable</h3>
            <div className="button-list">
                {vegetableItems.map((item, index) => (
                    <div className="item" key={`btn-${item.type}-${index}`}>
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    );
}
