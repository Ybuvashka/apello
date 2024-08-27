import React from 'react';
import {Wrapper} from '../assets/wrappers/OurWork'


const counters = [
  {
    val: 50,
    time: 50,
    addPlus: true,
    text: "Successfully completed projects",
  },
  {
    val: 35,
    time: 50,
    addPlus: true,
    text: "Happy and appreciative customers",
  },
  {
    val: 10,
    time: 50,
    text: "Combined years of experience",
  },
  {
    val: 23,
    time: 50,
    text: "Experienced and talented workers",
  },
];

function Counter({ val, time, addPlus, text }) {
  const [currVal, setCurrVal] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);
  const counterRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Зупиняємо спостереження після першого спрацьовування
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  React.useEffect(() => {
    if (isVisible && currVal < val) {
      const timeoutId = setTimeout(() => setCurrVal(currVal + 1), time);

      return () => clearTimeout(timeoutId); // Очищаємо timeout при відміненні
    }
  }, [currVal, isVisible, val, time]);

  return (
    <div className="counter">
      <h2 className="counter__numbers" ref={counterRef}>
        {currVal}
        {addPlus ? "+" : ""}
      </h2>
      <div className="counter__text">{text}</div>
    </div>
  );
}
const OurWork = () => {
  return (
    <Wrapper className="our-work full-width">
      <div className="our-work__data fixed-width">
          <h2 className="our-work_header">We’re proud of our work</h2>
          <div className="our-work__statistics">
            {counters.map((item, index) => (
              <Counter key={index} {...item} />
            ))}
          </div>
        </div>
    </Wrapper>
  )
}
export default OurWork