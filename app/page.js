import Image from "next/image";
import styles from "./page.module.css";
import { Card } from "./components/Card";
import FlippingCards from "./components/FlippingCards/FlippingCards";
import SlidingChips from "./components/SlidingChips/SlidingChips";

export default function Home() {
  return (
    <div style={{ width: '100%' }}>
        <FlippingCards></FlippingCards>
        <SlidingChips></SlidingChips>
    </div>
  );
}
