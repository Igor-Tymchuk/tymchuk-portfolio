export interface MyProject {
  title: string;
  description: string;
  img: string;
  urlLive: string;
  urlGit: string;
}

import img from "../images/hero.webp";

export const myProjects: MyProject[] = [
  {
    title: "Test1",
    description:
      "It is my projects Lorem, ipsum dolor sit amet consectetur adipisicing elit. At delectus consectetur quo quasi aut, soluta rerum? Quasi earum hic impedit!",
    img,
    urlGit: "http://example",
    urlLive: "http://example",
  },
  {
    title: "Test2",
    description:
      "It is my projects Lorem, ipsum dolor sit amet consectetur adipisicing elit. At delectus consectetur quo quasi aut, soluta rerum? Quasi earum hic impedit!",
    img,
    urlGit: "http://example",
    urlLive: "http://example",
  },
  {
    title: "Test3",
    description:
      "It is my projects Lorem, ipsum dolor sit amet consectetur adipisicing elit. At delectus consectetur quo quasi aut, soluta rerum? Quasi earum hic impedit!",
    img,
    urlGit: "http://example",
    urlLive: "http://example",
  },
  {
    title: "Test4",
    description:
      "It is my projects Lorem, ipsum dolor sit amet consectetur adipisicing elit. At delectus consectetur quo quasi aut, soluta rerum? Quasi earum hic impedit!",
    img,
    urlGit: "http://example",
    urlLive: "http://example",
  },
];
