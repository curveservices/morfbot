import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import group from "../../assets/images/group.webp";
import project from "../../assets/images/projects.webp";
import customers from "../../assets/images/customers.webp";
import awards from "../../assets/images/awards.webp";
import "./index.scss";

const MetricsData = [
  { value: 8, suffix: "+", label: "Team Members", icon: group },
  { value: 200, suffix: "+", label: "Projects Done", icon: project },
  { value: 500, suffix: "+", label: "Happy Customers", icon: customers },
  { value: 12, suffix: "+", label: "Award Winning", icon: awards },
];
const Metrics = () => {
  const { ref, inView } = useInView({
    threshold: 0.9,
    triggerOnce: true,
  });

  return (
    <div className="metrics-container" ref={ref}>
      {MetricsData.map((metric, index) => (
        <div className="metric" key={index}>
          <img
            src={metric.icon}
            alt="ai and automation agency in the UK"
            className="metric-icon"
          />
          <h1 className="metric-value">
            {inView && (
              <CountUp
                start={0}
                end={metric.value}
                duration={1.5}
                suffix={metric.suffix}
              />
            )}
          </h1>
          <p className="metric-label">{metric.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Metrics;
