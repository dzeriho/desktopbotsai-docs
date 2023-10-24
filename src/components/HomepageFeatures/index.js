import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Powerful Chat Bots',
    description: (
      <>
        Get the best content generating bots based on GPT 4+ AI technology. These AI robots solve everything from kids trouble to complex problems and provide quick, fun and easy solutions.
      </>
    ),
  },
  {
    title: 'Army of AI Assistance',
    description: (
      <>
        Build your own private artificial intelligence army. Hundreds of custom trained robots that work for you and make your life better. Upgrade problem solving and understanding to another level.
      </>
    ),
  },
  {
    title: 'Unlimited Private Workforce',
    description: (
      <>
        Create limitless custom trained bots for unique and specific. These bots generate content and images based on your prompts and system training. Use them for joy or science, they handle anything!
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
