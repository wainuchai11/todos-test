'use client';
import React from "react";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import ItemList from "@/components/ItemList"
import FruitList from "@/components/FruitList"
import VagetableList from "@/components/VagetableList"
import "@/css/style.css";

export default function Home() {
  return (
    <Provider store={store}>
    <main >
      <div className="container">
        <ItemList />
        <FruitList />
        <VagetableList />
      </div>
    </main>
    </Provider>
  );
}
