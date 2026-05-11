import Image from "next/image";
import styles from "./page.module.css";
import { Card } from "./components/Card";
import FlippingCards from "./components/FlippingCards/FlippingCards";

export default function Home() {
  return (
    <div style={{ width: '100%' }}>
        <FlippingCards></FlippingCards>
    </div>
  );
}
