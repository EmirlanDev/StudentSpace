import React from "react";
import { useStateContext } from "./../../../context/StateContext";

const StudyRoom = () => {
  const {
    setProfil,
    setNews,
    setQuestion,
    setNetworking,
    setStudyRoom,
    setEvent,
    setChats,
    setWork,
    setNewsDetail,
    setMenu,
    setBoard,
  } = useStateContext();

  return (
    <section id="study-room">
      <div className="study-room">
        <div className="study-room__inform-content">
          <h1 className="study-room__inform-content__title">Учебные комнаты</h1>
          <div className="study-room__inform-content__study-option">
            <button
              className="study-room__inform-content__study-option__oflain-study"
              style={{ border: "none" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.75 6C15.75 6.99456 15.3549 7.94839 14.6516 8.65165C13.9484 9.35491 12.9945 9.75 12 9.75C11.0054 9.75 10.0516 9.35491 9.34833 8.65165C8.64506 7.94839 8.24998 6.99456 8.24998 6C8.24998 5.00544 8.64506 4.05161 9.34833 3.34835C10.0516 2.64509 11.0054 2.25 12 2.25C12.9945 2.25 13.9484 2.64509 14.6516 3.34835C15.3549 4.05161 15.75 5.00544 15.75 6ZM4.50098 20.118C4.53311 18.1504 5.33731 16.2742 6.74015 14.894C8.14299 13.5139 10.0321 12.7405 12 12.7405C13.9679 12.7405 15.857 13.5139 17.2598 14.894C18.6626 16.2742 19.4668 18.1504 19.499 20.118C17.1464 21.1968 14.5881 21.7535 12 21.75C9.32398 21.75 6.78398 21.166 4.50098 20.118Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h1>Индивидуальная учебная комната</h1>
            </button>
            <button
              className="study-room__inform-content__study-option__onlain-study"
              style={{ border: "none" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path d="M10 17L16 12L10 7V17Z" fill="black" />
                <path
                  d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z"
                  fill="black"
                />
              </svg>
              <h1>Обучение в прямом эфире</h1>
            </button>
          </div>
          <div className="study-room__inform-content__study-schedule">
            <div className="study-room__inform-content__study-schedule__group">
              <div className="study-room__inform-content__study-schedule__group__today">
                <p>Сегодня в 13:00</p>
              </div>
              <div className="study-room__inform-content__study-schedule__group__robotics">
                <p>Робототехника</p>
              </div>
              <div className="study-room__inform-content__study-schedule__group__time">
                <p>Длительность 1 час</p>
              </div>
            </div>

            <div className="study-room__inform-content__study-schedule__btn">
              <div>
                <button
                  onClick={() => {
                    setProfil(false);
                    setNews(false);
                    setQuestion(false);
                    setNetworking(false);
                    setStudyRoom(false);
                    setEvent(false);
                    setChats(false);
                    setWork(false);
                    setNewsDetail(false);
                    setMenu(false);
                    setBoard(true);
                  }}
                >
                  Начать сессию
                </button>
              </div>
            </div>
          </div>
          <button
            className="study-room__inform-content__group-study"
            style={{ border: "none" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M17.059 15.521C17.5268 15.2015 18.0755 15.0211 18.6415 15.0004C19.2076 14.9798 19.768 15.1199 20.2578 15.4044C20.7476 15.689 21.1468 16.1064 21.4093 16.6084C21.6718 17.1104 21.7868 17.6764 21.741 18.241C20.5412 18.6603 19.2668 18.8235 18 18.72C17.9961 17.5866 17.6697 16.4768 17.059 15.522C16.5169 14.6718 15.7691 13.972 14.8848 13.4875C14.0005 13.003 13.0083 12.7493 12 12.75C10.9918 12.7495 9.99981 13.0032 9.11571 13.4877C8.23162 13.9723 7.48399 14.6719 6.94199 15.522M17.999 18.719L18 18.75C18 18.975 17.988 19.197 17.963 19.416C16.1483 20.4571 14.0921 21.0033 12 21C9.82998 21 7.79299 20.424 6.03699 19.416C6.01128 19.1846 5.99892 18.9519 5.99999 18.719M5.99999 18.719C4.73361 18.8263 3.45989 18.6637 2.26099 18.242C2.21534 17.6776 2.33038 17.1117 2.59281 16.6099C2.85525 16.1081 3.25435 15.6908 3.74399 15.4063C4.23362 15.1218 4.79378 14.9817 5.3597 15.0021C5.92563 15.0226 6.4742 15.2028 6.94199 15.522M5.99999 18.719C6.00358 17.5857 6.33161 16.4769 6.94199 15.522M15 6.75C15 7.54565 14.6839 8.30871 14.1213 8.87132C13.5587 9.43393 12.7956 9.75 12 9.75C11.2043 9.75 10.4413 9.43393 9.87866 8.87132C9.31606 8.30871 8.99999 7.54565 8.99999 6.75C8.99999 5.95435 9.31606 5.19129 9.87866 4.62868C10.4413 4.06607 11.2043 3.75 12 3.75C12.7956 3.75 13.5587 4.06607 14.1213 4.62868C14.6839 5.19129 15 5.95435 15 6.75ZM21 9.75C21 10.0455 20.9418 10.3381 20.8287 10.611C20.7156 10.884 20.5499 11.1321 20.341 11.341C20.132 11.5499 19.884 11.7157 19.611 11.8287C19.338 11.9418 19.0455 12 18.75 12C18.4545 12 18.1619 11.9418 17.8889 11.8287C17.616 11.7157 17.3679 11.5499 17.159 11.341C16.9501 11.1321 16.7843 10.884 16.6713 10.611C16.5582 10.3381 16.5 10.0455 16.5 9.75C16.5 9.15326 16.737 8.58097 17.159 8.15901C17.581 7.73705 18.1532 7.5 18.75 7.5C19.3467 7.5 19.919 7.73705 20.341 8.15901C20.7629 8.58097 21 9.15326 21 9.75ZM7.49999 9.75C7.49999 10.0455 7.44179 10.3381 7.32871 10.611C7.21564 10.884 7.04991 11.1321 6.84098 11.341C6.63204 11.5499 6.38401 11.7157 6.11102 11.8287C5.83804 11.9418 5.54546 12 5.24999 12C4.95451 12 4.66193 11.9418 4.38895 11.8287C4.11596 11.7157 3.86793 11.5499 3.65899 11.341C3.45006 11.1321 3.28433 10.884 3.17126 10.611C3.05818 10.3381 2.99999 10.0455 2.99999 9.75C2.99999 9.15326 3.23704 8.58097 3.65899 8.15901C4.08095 7.73705 4.65325 7.5 5.24999 7.5C5.84672 7.5 6.41902 7.73705 6.84098 8.15901C7.26293 8.58097 7.49999 9.15326 7.49999 9.75Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h1>Групповые учебные комнаты</h1>
          </button>
          <div className="study-room__inform-content__study-scheduleOne">
            <div className="study-room__inform-content__study-scheduleOne__groupTwo">
              <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
                <div className="study-room__inform-content__study-scheduleOne__groupTwo__todayOne">
                  <p>Сегодня в 13:00</p>
                </div>
                <div className="study-room__inform-content__study-scheduleOne__groupTwo__roboticsTwo">
                  <p>Робототехника</p>
                </div>
                <div className="study-room__inform-content__study-scheduleOne__groupTwo__timeThree">
                  <p>Длительность 1 час</p>
                </div>
              </div>
              <div className="study-room__inform-content__study-scheduleOne__groupTwo__positionGroup">
                <div className="study-room__inform-content__study-scheduleOne__groupTwo__positionGroup__img-group">
                  <img
                    style={{
                      width: "50px",
                      height: "45px",
                      borderRadius: "50%",
                      position: "absolute",
                      left: "20px",
                      position: "absolute",
                    }}
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                  <img
                    style={{
                      width: "50px",
                      height: "45px",
                      borderRadius: "50%",
                      position: "absolute",
                      left: "55px",
                    }}
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                  <img
                    style={{
                      width: "50px",
                      height: "45px",
                      borderRadius: "50%",
                      position: "absolute",
                      left: "90px",
                    }}
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                  <img
                    style={{
                      width: "50px",
                      height: "45px",
                      borderRadius: "50%",
                      position: "absolute",
                      left: "124px",
                    }}
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                  <img
                    style={{
                      width: "50px",
                      height: "45px",
                      borderRadius: "50%",
                      position: "absolute",
                      left: "155px",
                    }}
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                  <img
                    style={{
                      width: "50px",
                      height: "45px",
                      borderRadius: "50%",
                      position: "absolute",
                      left: "185px",
                    }}
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                  <div
                    className="circle"
                    style={{
                      width: "47px",
                      height: "47px",
                      borderRadius: "50%",
                      background: "#fff",
                      padding: "12px 12px",
                      position: "absolute",
                      left: "215px",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M19 8.00008H17V11.0001H14V13.0001H17V16.0001H19V13.0001H22V11.0001H19V8.00008ZM4 8.00008C3.98768 8.52874 4.08273 9.0544 4.27939 9.54527C4.47605 10.0361 4.77024 10.482 5.14415 10.8559C5.51807 11.2298 5.96395 11.524 6.45482 11.7207C6.94569 11.9174 7.47134 12.0124 8 12.0001C8.52866 12.0124 9.05431 11.9174 9.54518 11.7207C10.0361 11.524 10.4819 11.2298 10.8558 10.8559C11.2298 10.482 11.524 10.0361 11.7206 9.54527C11.9173 9.0544 12.0123 8.52874 12 8.00008C12.0123 7.47143 11.9173 6.94577 11.7206 6.4549C11.524 5.96403 11.2298 5.51815 10.8558 5.14424C10.4819 4.77032 10.0361 4.47613 9.54518 4.27947C9.05431 4.08282 8.52866 3.98777 8 4.00008C7.47134 3.98777 6.94569 4.08282 6.45482 4.27947C5.96395 4.47613 5.51807 4.77032 5.14415 5.14424C4.77024 5.51815 4.47605 5.96403 4.27939 6.4549C4.08273 6.94577 3.98768 7.47143 4 8.00008ZM10 8.00008C10.0129 8.26613 9.96993 8.53193 9.87398 8.78041C9.77802 9.02888 9.63115 9.25454 9.4428 9.44289C9.25446 9.63123 9.0288 9.7781 8.78032 9.87406C8.53185 9.97002 8.26605 10.0129 8 10.0001C7.73395 10.0129 7.46815 9.97002 7.21968 9.87406C6.9712 9.7781 6.74554 9.63123 6.5572 9.44289C6.36885 9.25454 6.22198 9.02888 6.12602 8.78041C6.03007 8.53193 5.98714 8.26613 6 8.00008C5.98714 7.73403 6.03007 7.46824 6.12602 7.21976C6.22198 6.97128 6.36885 6.74563 6.5572 6.55728C6.74554 6.36894 6.9712 6.22207 7.21968 6.12611C7.46815 6.03015 7.73395 5.98722 8 6.00008C8.26605 5.98722 8.53185 6.03015 8.78032 6.12611C9.0288 6.22207 9.25446 6.36894 9.4428 6.55728C9.63115 6.74563 9.77802 6.97128 9.87398 7.21976C9.96993 7.46824 10.0129 7.73403 10 8.00008ZM4 18.0001C4 17.2044 4.31607 16.4414 4.87868 15.8788C5.44129 15.3162 6.20435 15.0001 7 15.0001H9C9.79565 15.0001 10.5587 15.3162 11.1213 15.8788C11.6839 16.4414 12 17.2044 12 18.0001V19.0001H14V18.0001C14 17.3435 13.8707 16.6933 13.6194 16.0867C13.3681 15.48 12.9998 14.9288 12.5355 14.4646C12.0712 14.0003 11.52 13.632 10.9134 13.3807C10.3068 13.1294 9.65661 13.0001 9 13.0001H7C5.67392 13.0001 4.40215 13.5269 3.46447 14.4646C2.52678 15.4022 2 16.674 2 18.0001V19.0001H4V18.0001Z"
                        fill="#828282"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="study-room__inform-content__study-schedule__btn">
              <div>
                <button>Начать сессию</button>
              </div>
            </div>
          </div>
          <div className="study-room__inform-content__study-scheduleOne">
            <div className="study-room__inform-content__study-scheduleOne__groupTwo">
              <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
                <div className="study-room__inform-content__study-scheduleOne__groupTwo__todayOne">
                  <p>Сегодня в 13:00</p>
                </div>
                <div className="study-room__inform-content__study-scheduleOne__groupTwo__roboticsTwo">
                  <p>Робототехника</p>
                </div>
                <div className="study-room__inform-content__study-scheduleOne__groupTwo__timeThree">
                  <p>Длительность 1 час</p>
                </div>
              </div>
              <div className="study-room__inform-content__study-scheduleOne__groupTwo__positionGroup">
                <div className="study-room__inform-content__study-scheduleOne__groupTwo__positionGroup__img-group">
                  <img
                    style={{
                      width: "50px",
                      height: "45px",
                      borderRadius: "50%",
                      position: "absolute",
                      left: "20px",
                      position: "absolute",
                    }}
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                  <img
                    style={{
                      width: "50px",
                      height: "45px",
                      borderRadius: "50%",
                      position: "absolute",
                      left: "55px",
                    }}
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                  <img
                    style={{
                      width: "50px",
                      height: "45px",
                      borderRadius: "50%",
                      position: "absolute",
                      left: "90px",
                    }}
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                  <img
                    style={{
                      width: "50px",
                      height: "45px",
                      borderRadius: "50%",
                      position: "absolute",
                      left: "124px",
                    }}
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                  <img
                    style={{
                      width: "50px",
                      height: "45px",
                      borderRadius: "50%",
                      position: "absolute",
                      left: "155px",
                    }}
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJAAYwMBIgACEQEDEQH/xAAbAAAABwEAAAAAAAAAAAAAAAABAgMEBQYHAP/EADQQAAIBAwMCBAQFBAIDAAAAAAECAwAEEQUSITFRBhNBYRQiMnEjUoGRsQehwdFC8BaS4f/EABkBAAIDAQAAAAAAAAAAAAAAAAADAQIEBf/EACERAAIDAAMAAgMBAAAAAAAAAAABAgMREiExBEEiMmFR/9oADAMBAAIRAxEAPwDEK6hrqAArgpNGApRRzQAVV+9KKveu24pQDvQQCqA+lc6iPkEUoRhflOKbNvJ5NAAPJkcjn0NJNzRnUjqP1xXIuTyKCRMjjii068sGgeH5c46daAG46V1CUIPSuoAGurqEUAGVelKgUVaP+9BAYcUdfakgaWiQuwA69qCQ/lkijx2rM4BU81I2ti5AqxafpSSr86Fsg7aVOxJDYV76VSfS5TEGCn6d3Sop42jJBB4rW20dngZT9SqAFHOQPeqHr+nG0kJK4FUrt14y9lOLUQS0sDgcjINFKYIA6UJOBitBmEivPHSuoSuTnNdQA0NCK4daXhi82VFHOTQSgqjPSncNnK4DHhT04qx6No0BO6RMkehq2afpkJIYwZz6AcVnlevEaI/Hb7ZnS6a/QLk+3NTek6LKDv2An3GMVokejKyZWNVyPRa630nyifM6Z44pcrWxkaoortlou9/Mm3N/FWfSrCJCVDKWHXIzinaWbBgI0OPbipKCCZU4iUDtmla2xySXgk0Map9Iz6tVH8a6Z59rLMi9F9PSr1Ksig71x7Zphqln5umTKRnKHjuajckDXRgq53lTwQcYosnytg091SD4a9kX3IFMJzkDuK6Keo5rWMAAMM9/eupDPvXVJAVetSeix7rlfbmotetT3hxcySnHQYzVJvIsZWtkici1JLKblN3fipuz8VwrtAhxjocVGQW8cyMX2qF5Z24Ao5s9LWMn4mYP+ZYzt/3WX8c8NX5aXjTtejmhJyOSBT2e+h2hiR9WKzKO5NnNmKdZYj0ZTV10vTpdRsTlwAV3bg3SlPUNXYN94o+DysSbm9zio5PFGqTthCqj0OTUPdRxw3cq3cjYj68ZJp1pV3oplEc3w6MTx5txtP8Ab/7UpshxW+lq0e61meXF0EnhIzwwBWp7CyIEkA9xVctpDauWsWJQnlN28H3B9ftwfap2OUsiMwIz6Y61VvWCjiMc8d2ps9Zlt3UAZ3I3cVUpG+bB6jitY/qjpPxNkt7EPxIyN2O1ZNMCWyRg9K20y2JjujxkJ7iK6gzQ04UFFWPw1ja57kA1XKs3hNdwHPV6Xb+o2n9yxz2aPHH5xYgf8Y+Gb788Ug+n6a8gYaTcSuOhLt/urjpyIIQrgFcdCKWe2tN+4RKMduKx8mvDZwRVINKjQbjZGGNmzhpN2D7dq0nw9beRZBQvRcGqxJi6lKxHO3jHpV50xWSAYTJ9cUZpPiKl4j0GeV5Z7e2gkMmDIso6n9KrlvAY7gC98OQTnplNp4/XFajqd/b2EZkuw6xHAaQLlU+/amDRQPiaLy5Y26MvrUa10gxP0i9Is4TMs8Fg9gcciAp8w9xnH9s1KToBjYd3rlsg/wBzT21iRlwmM9qbXaNHLtf6f4qktzsleld8U4l0e5DDjZ0qh2Xgt7i0lu5CTIkfmJH+b2NaLqUayOsTcozAEe1RVtDeWviaTzJQ8E7nywOgTtiohOUU0iXXGTTZjOs7V1S5SJVCo+wAdOOP8UFDq5B1a9IPBuJMf+xoK6i6RzJdsa1Y/CUmGI9A2f4qu4qW8MzGPU1iP0yAg/cCq2LYstW8kjTIb5UiU7sCofVdbubp/hbDIL9WHpSMiufw93HtS0ZtrF0iUDzZD+prEkbnLCYsbuK3SGNGAZFwwJ5PvVp0PXo04d/71Q7uxM585QQ46EelNrOxvZrhUYyeWx5ZeMirSWEJ70ald6xYXltPaxAXBaNg6Kc9R0NZrpWr6j4eufhrlne3Jx83oe1XvSdPFnbIkKqmeoGP4FQviKCzOoR216u0Tg4NVfa0snhOaXrkVwNyNgGn804nOMg+9Z/b6Pd6exeGXzIgxUjtVp0x2UBXJPHGaTJ/RdL7DXGTIMDLAnApnr1/aaPoU+qb/MlEZETMMEseij9ab+KdbGiWj3yqJGjZdik43EnpWV+KfFN94hdFuFSK3jYskMfQE+p7mm0VOb36F3WqCz7IFmZmLMcknJJ711AOldXQOcHNK2c/w13DOP8AgwJ+3rSRoMVII0iORZAkiHKkUW500Xl1G7Oy7QfmU4Iqr+H9WMRW0mJKnhD/AIq6WJMiiReccMPbvWKUXBm2MlNEVBYX8V00VxdyywE/K6/Uv3HrT2Sxu0a3Rr+4WNzhvwnO39qkLiMsA6ZDg8EUgNW1GElAd3PHAqzaa7LqC/0m7Xw1HLsME1/N8zcjEYwBweeetRk/g/WItt3qOptczxt8keSVQfr61N6DfXk+PNJwMfKOlWC4zNCVA5xxiluSUcRZx79IKyk32s/mdVfHNKNIYpNx9BmiyWbW0UgY/NJNk01cvdXJjU/gj6m7+1Zs1jCi/wBRb9rq7gs84QL5x9yeB/FU7yTgirJ48x/5Izj6GjAX22kr/ioYDiurVDjBI5lsuU2yNK7Tgg8V1SXlK3JArqZhQYGgxzQ1MaLpT3DCV1/DHTPrUqLZDeC2g6eBPDI4BYnOe1WCwvPgNQaGThVOCD+U9KWtLTy5U6bR0o2uaU9zELq1GbiIfT+dfUVaynYEV25Is9rFb3OG3Dp3qSjtbBR86o571mVhrE0KBULYHGO1Pxr1wh5dsZzjNc9xZ0I2I1Czis0wUwD9utOp7q2tLcu7BQO/rWXweJLhVypd+eATxSk1ze6ky+c5VPyrSpJr0ZyT8J641N9UuCkAxGM5btTsPFp1k08gyqDgDqx9AO5JpnpNqVhEVsjSynoqj+T6VadE8P7riK81R0lkiOYYE5SNvQk+p/ippplY/wCC7LowX9MV/qDbyW2u28E4xOlmjTAejszOw/dqhl+kVMf1Auxe+M9WmByBP5YPsoC/yDUPF9ArqSjjwwJ6GA4rqOBxXUAG8OaSdQud7g+Uh57E1fUtRCmI1KkdcDGBSHhzTPhdLhKhUmKZJb1PGeKmWiRVJbG3HJrXXVnoiUtIsI3mgkHp+1SNtz9jTVZ4HkCo+MjgMcYpxa4R9nJOeCBxj70xxRTSJ1vw6qvJfWZwcbpY/Q+49/8Av3ryBZHGTxV71yXy9DvWBwfJYA/fj/NULRbC61bUYLCzx5krY3McKo9ST2rn/JrXLo2UTfHskdPgmvboW1jbvNIvO1B0Hc9h71d9K8MyIqy6k+emIIj1+7f6/epzQNBg0LTxawfPI53TS4wXP+uwqTVVixk+9RD4sV3IifyJeRC2kO2FUSJYogchEGKDWNbttC02a6mZQyIdi56nHFBLqEEQ3TSqkeSC5OP271kX9R9X+OvJY4JT8OpAVTnJ/f8AetfHFudGfW2Ux3ed5JZDl5HLMe5JyaUtzxjtSajCUMZ5zSGhqHVBQjpXVGEn/9k="
                    alt=""
                  />
                  <img
                    style={{
                      width: "50px",
                      height: "45px",
                      borderRadius: "50%",
                      position: "absolute",
                      left: "185px",
                    }}
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                  <div
                    className="circle"
                    style={{
                      width: "47px",
                      height: "47px",
                      borderRadius: "50%",
                      background: "#fff",
                      padding: "12px 12px",
                      position: "absolute",
                      left: "215px",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M19 8.00008H17V11.0001H14V13.0001H17V16.0001H19V13.0001H22V11.0001H19V8.00008ZM4 8.00008C3.98768 8.52874 4.08273 9.0544 4.27939 9.54527C4.47605 10.0361 4.77024 10.482 5.14415 10.8559C5.51807 11.2298 5.96395 11.524 6.45482 11.7207C6.94569 11.9174 7.47134 12.0124 8 12.0001C8.52866 12.0124 9.05431 11.9174 9.54518 11.7207C10.0361 11.524 10.4819 11.2298 10.8558 10.8559C11.2298 10.482 11.524 10.0361 11.7206 9.54527C11.9173 9.0544 12.0123 8.52874 12 8.00008C12.0123 7.47143 11.9173 6.94577 11.7206 6.4549C11.524 5.96403 11.2298 5.51815 10.8558 5.14424C10.4819 4.77032 10.0361 4.47613 9.54518 4.27947C9.05431 4.08282 8.52866 3.98777 8 4.00008C7.47134 3.98777 6.94569 4.08282 6.45482 4.27947C5.96395 4.47613 5.51807 4.77032 5.14415 5.14424C4.77024 5.51815 4.47605 5.96403 4.27939 6.4549C4.08273 6.94577 3.98768 7.47143 4 8.00008ZM10 8.00008C10.0129 8.26613 9.96993 8.53193 9.87398 8.78041C9.77802 9.02888 9.63115 9.25454 9.4428 9.44289C9.25446 9.63123 9.0288 9.7781 8.78032 9.87406C8.53185 9.97002 8.26605 10.0129 8 10.0001C7.73395 10.0129 7.46815 9.97002 7.21968 9.87406C6.9712 9.7781 6.74554 9.63123 6.5572 9.44289C6.36885 9.25454 6.22198 9.02888 6.12602 8.78041C6.03007 8.53193 5.98714 8.26613 6 8.00008C5.98714 7.73403 6.03007 7.46824 6.12602 7.21976C6.22198 6.97128 6.36885 6.74563 6.5572 6.55728C6.74554 6.36894 6.9712 6.22207 7.21968 6.12611C7.46815 6.03015 7.73395 5.98722 8 6.00008C8.26605 5.98722 8.53185 6.03015 8.78032 6.12611C9.0288 6.22207 9.25446 6.36894 9.4428 6.55728C9.63115 6.74563 9.77802 6.97128 9.87398 7.21976C9.96993 7.46824 10.0129 7.73403 10 8.00008ZM4 18.0001C4 17.2044 4.31607 16.4414 4.87868 15.8788C5.44129 15.3162 6.20435 15.0001 7 15.0001H9C9.79565 15.0001 10.5587 15.3162 11.1213 15.8788C11.6839 16.4414 12 17.2044 12 18.0001V19.0001H14V18.0001C14 17.3435 13.8707 16.6933 13.6194 16.0867C13.3681 15.48 12.9998 14.9288 12.5355 14.4646C12.0712 14.0003 11.52 13.632 10.9134 13.3807C10.3068 13.1294 9.65661 13.0001 9 13.0001H7C5.67392 13.0001 4.40215 13.5269 3.46447 14.4646C2.52678 15.4022 2 16.674 2 18.0001V19.0001H4V18.0001Z"
                        fill="#828282"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="study-room__inform-content__study-schedule__btn">
              <div>
                <button>Начать сессию</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyRoom;
