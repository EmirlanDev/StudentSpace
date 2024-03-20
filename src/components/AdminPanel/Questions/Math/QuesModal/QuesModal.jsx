import React, { useEffect, useRef } from "react";
import { GrClose } from "react-icons/gr";
import { useStateContext } from "./../../../../../context/StateContext";

const QuesModal = () => {
  const { setMathModal, mathModal } = useStateContext();
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      console.log(e.target);
      if (ref.current && ref.current.contains(e.target)) {
        setMathModal(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <section id="quesModal">
      <div className="bg">
        <div className="quesModal" ref={ref}>
          <div className="quesModal__title">
            <select>
              <option value="math">Математика</option>
              <option value="machine">Машинное обучение</option>
              <option value="program">Введение в программирование</option>
              <option value="creative">Креативное письмо</option>
            </select>
            <button onClick={() => setMathModal(false)}>
              <GrClose />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuesModal;
