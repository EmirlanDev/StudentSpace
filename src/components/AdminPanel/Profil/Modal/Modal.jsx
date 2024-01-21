import React, { useEffect, useRef, useState } from "react";
import { useStateContext } from "./../../../../context/StateContext";
import { GrClose } from "react-icons/gr";
import { useAuthContext } from "./../../../../context/AuthContext";
import { updatePhoneNumber, updateProfile } from "firebase/auth";

const Modal = () => {
  const ref = useRef();
  const { setModal, modal } = useStateContext();
  const { user } = useAuthContext();
  const [values, setValues] = useState({
    name: "",
    lastName: "",
    profession: "",
    univer: "",
    date: "",
    description: "",
    image: "",
  });

  function Img(e) {
    const file = e.target.files[0];
    if (file) {
      setValues({ ...values, image: URL.createObjectURL(file) });
    }
  }

  console.log(values);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setModal(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [modal]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  function submitupdateProfile() {
    updateProfile(user, {
      displayName: `
      1${values.name} 
      2${values.lastName} 
      3${values.profession} 
      ?${values.date} 
      #${values.univer} 
      <${values.description}>`,
      photoURL: values.image ? values.image : "",
    });
    setModal(false);
  }

  return (
    modal && (
      <div id="modal">
        <div className="bg">
          <div className="modal" ref={ref}>
            <div className="modal__title">
              <h1>Редактировать</h1>
              <button onClick={() => setModal(false)}>
                <GrClose />
              </button>
            </div>
            <div className="modal__update-inputs">
              <div className="modal__update-inputs__name">
                <label>
                  Имя:
                  <input
                    onChange={(e) =>
                      setValues({ ...values, name: e.target.value })
                    }
                    type="text"
                  />
                </label>
                <label>
                  Фамилие:
                  <input
                    onChange={(e) =>
                      setValues({ ...values, lastName: e.target.value })
                    }
                    type="text"
                  />
                </label>
              </div>
              <div className="modal__update-inputs__date">
                <label>
                  Профессия:
                  <input
                    onChange={(e) =>
                      setValues({ ...values, profession: e.target.value })
                    }
                    type="text"
                  />
                </label>
                <label>
                  Дата рождения:
                  <input
                    onChange={(e) =>
                      setValues({ ...values, date: e.target.value })
                    }
                    type="date"
                  />
                </label>
              </div>
              <div className="modal__update-inputs__img">
                <label>
                  Университет:
                  <input
                    onChange={(e) =>
                      setValues({ ...values, univer: e.target.value })
                    }
                    type="text"
                  />
                </label>
                <label className="labelFile">
                  Фото:
                  <input onChange={Img} className="file" type="file" />
                </label>
              </div>

              <label>
                Описание:
                <textarea
                  onChange={(e) =>
                    setValues({ ...values, description: e.target.value })
                  }
                ></textarea>
              </label>

              <button onClick={submitupdateProfile}>Сохранить</button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
