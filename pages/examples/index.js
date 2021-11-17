import Head from "next/head";
import Image from "next/image";
import { ExampleWorks } from "../../components/examples";
import { HomeComponent } from "../../components/home";
import { Navigation } from "../../components/Navigation";
// import { HomeComponent } from "../components/Home";
// import { TipCalculator } from "../components/TipCalculator";
import styles from "../../styles/Home.module.css";

export default function Exapmples() {
  return (
    <div>
      <ExampleWorks/>
    </div>
  );
}
