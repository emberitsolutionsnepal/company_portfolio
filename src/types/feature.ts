import type { JSX } from "react";

export type Feature = {
  id: number;
  icon: JSX.Element;
  title: string;
  paragraph: string;
  btn: string;
  btnLink: string;
  fullDescription?: string;
};
