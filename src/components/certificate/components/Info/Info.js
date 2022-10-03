import React, { useState } from "react";
import noImage from "../../assets/icons/noImage.png";
import arrow from "../../assets/icons/arrow.png";
import Pdf from "../../assets/icons/pdfImg.svg";
import "./Info.css";

const Info = ({ items }) => {
  const [showComand, setShowComand] = useState(false);
  // const items = [
  //   {
  //     project: "ZNS",
  //     link: " http://zns.by",
  //     description:
  //       "Система персонального управления личными данными. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam ac at euismod ridiculus porttitor iaculis neque. Amet, accumsan, sagittis convallis non amet maecenas semper. Ac donec faucibus integer tortor. Tellus egestas velit gravida egestas. At ornare volutpat velit sodales. Euismod convallis sollicitudin purus volutpat eget malesuada lorem et aliquam. Viverra lacus massa neque semper ornare. Enim sapien libero ac vulputate sapien enim id posuere purus. Magna et ultrices interdum ut feugiat massa sociis. Eget diam sed augue rhoncus turpis lectus tempor a. Et cursus suspendisse iaculis nibh nibh ligula sit consequat risus.",
  //     role: "Front-end developer",
  //     period: "1 месяц (Июнь 2022 - Июль 2022)",
  //     comand: [
  //       { img: false, name: "Руслан", role: "beck-end dev" },
  //       { img: false, name: "Александр", role: "beck-end dev" },
  //       { img: false, name: "Мехди", role: "front-end dev" },
  //       { img: false, name: "Никита", role: "front-end dev" },
  //       { img: false, name: "Настя", role: "UX/UI" },
  //       { img: false, name: "Егор", role: "PM" },
  //     ],
  //     implemented:
  //       "Система персонального управления личными данными. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam ac at euismod ridiculus porttitor iaculis neque. Amet, accumsan, sagittis convallis non amet maecenas semper. Ac donec faucibus integer tortor. Tellus egestas velit gravida egestas. At ornare volutpat velit sodales. Euismod convallis sollicitudin purus volutpat eget malesuada lorem et aliquam.Авторизация в LinkedinПарсинг контактов пользователя Viverra lacus massa neque semper ornare. Enim sapien libero ac vulputate sapien enim id posuere purus. Magna et ultrices interdum ut feugiat massa sociis. Eget diam sed augue rhoncus turpis lectus tempor a. Et cursus suspendisse iaculis nibh nibh ligula sit consequat risus.",
  //     attachments: [
  //       { file: "okdc.pdf", name: "Письмо от ментора по Управлению проектами" },
  //       { file: "okdc.pdf", name: "Письмо от ментора по Разработке" },
  //     ],
  //   },
  // ];
  return (
    <div className="info__container">
      <div className="info__header-container">
        <div className="info__header-item">Курсы(теория)</div>
        <div className="info__header-item active">Проекты(практика)</div>
        <div className="info__header-item">Скилы</div>
      </div>
      {items.map((item, key) => {
        return (
          <div className="info" key={key}>
            <div className="info__block">
              <div className="info__block-title">Проект</div>
              <div className="info__block-description-project">
                {item.project}
                <span className="info__block-description-link">
                  {item.link}
                </span>
              </div>
            </div>
            <div className="info__block">
              <div className="info__block-title">Описание</div>
              <div className="info__block-description">{item.description}</div>
            </div>
            <div className="info__block">
              <div className="info__block-title">Роль на проекте</div>
              <div className="info__block-description">{item.role}</div>
            </div>
            <div
              className="info__block"
              onClick={() => setShowComand(!showComand)}
            >
              <div className="info__block-title">Команда</div>
              <div className="info__block-description-comand">
                {item.comand.length} человек
                <span className="info__comand-img-container">
                  {item.comand.map((comand, key) => {
                    return (
                      <span key={key}>
                        <img
                          src={comand.img ? comand.img : noImage}
                          alt="avatar"
                          className="info__comand-img"
                        />
                      </span>
                    );
                  })}
                </span>
                <span>
                  <img src={arrow} alt="arrow" className="info__comand-arrow" />
                </span>
              </div>
            </div>
            {showComand && (
              <div className="info__block">
                <div className="info__block-title"></div>
                <div className="info__block-description">
                  {item.comand.map((people, key) => (
                    <div className="info__comand-list" key={key}>
                      <div>
                        <img
                          alt="avatar"
                          src={people.img ? people.img : noImage}
                          className="info__comand-img"
                        />
                      </div>
                      <div className="info__comand-list-name">
                        {people.name} - {people.role}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="info__block">
              <div className="info__block-title">Реализованно</div>
              <div style={{ width: "95%" }}>
                {item.implemented.map((itemImpl, index) => {
                  return (
                    <div className="info__block-description">{itemImpl}</div>
                  );
                })}
              </div>
            </div>
            <div className="info__block">
              <div className="info__block-title">Вложения</div>
              {item.attachments.map((file, index) => (
                <div className="info__attachments">
                  <div>
                    <img src={Pdf} alt="pdf" />
                  </div>
                  <div className="info__attachments-name">{file.name}</div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Info;
