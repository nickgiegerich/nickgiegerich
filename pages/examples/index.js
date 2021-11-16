import Head from "next/head";
import Image from "next/image";
import { ExampleWorks } from "../../components/FrontendProjects";
import { BaseComponent } from "../../components/Base";
import { Navigation } from "../../components/Navigation";
// import { HomeComponent } from "../components/Home";
// import { TipCalculator } from "../components/TipCalculator";
import styles from "../../styles/Home.module.css";

export default function Exapmples() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseComponent child={<ExampleWorks/>}/>
    </div>
  );
}