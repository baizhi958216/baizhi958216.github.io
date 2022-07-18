import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Linux",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    link: 'https://bing.com',
  },
  {
    title: "安卓",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    link: 'https://bing.com',
  },
  {
    title: "杂项",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    link: 'https://bing.com',
  },
];

function Feature({ title, Svg, link }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <a href={link}><h3>{title}</h3></a>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
