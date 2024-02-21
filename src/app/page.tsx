'use client';
import React from "react";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import ItemList from "@/components/ItemList"
import FruitList from "@/components/FruitList"
import VegetableList from "@/components/VegetableList" // Fixed typo here
import "@/css/style.css";

export default function Home() {
  return (
    <Provider store={store}>
      <main>
        <div className="container">
          <ItemList />
          <FruitList />
          <VegetableList />
        </div>
      </main>
    </Provider>
  );
}
