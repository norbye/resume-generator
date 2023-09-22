"use client";
import type { NextPage } from "next";
import { PDFViewer } from "@react-pdf/renderer";
import Resume from "../_components/pdf/Resume";

const Home: NextPage = () => {
  return (
    <PDFViewer>
      <Resume />
    </PDFViewer>
  );
};

export default Home;
