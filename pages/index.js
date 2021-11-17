import Head from "next/head";
import Image from "next/image";
import { HomeComponent } from "../components/home";
import { TipCalculator } from "../components/TipCalculator";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div >
      <HomeComponent />
    </div>
  );
}
