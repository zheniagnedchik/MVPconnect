import FeebackGraduatesDesktopCss from './FeebackGraduatesDesktop.module.css';
import VectorRight from './img/VectorRight.svg';
import VectorLeft from './img/VectorLeft.svg';
import slider1 from './img/slider1.webp';
import slider2 from './img/slider2.jpg';
import slider3 from './img/slider3.webp';
import slider4 from './img/slider4.webp';
import slider5 from './img/slider5.webp';
import stars from './img/stars.svg';

import Stars from './img/5star.svg';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';

import { useState } from 'react';

const FeebackGraduatesDesktop = () => {
    const [selected1, setSelected1] = useState();
    const [selected2, setSelected2] = useState();
    const [selected3, setSelected3] = useState();
    const [selected4, setSelected4] = useState();
    const [selected5, setSelected5] = useState();
    return (
        <div className={FeebackGraduatesDesktopCss.FeebackGraduatesDesktop}>
            <div className={FeebackGraduatesDesktopCss.titleWrapper}>
                <div className={FeebackGraduatesDesktopCss.title}>
                    Отзывы выпускников
                </div>
                <div className={FeebackGraduatesDesktopCss.subTitle}>
                    {' '}
                    <p>
                        Большие проекты, смелые идеи и новые технологии станут
                        частью твоей работы!
                    </p>
                </div>
            </div>
            <Splide
                hasTrack={false}
                options={{
                    type: 'loop',
                    gap: 2,
                    perPage: 3,
                    rewind: true,
                    rewindByDrag: true,
                    isNavigation: true,
                    pagination: true,
                    focus: 'center',
                    classes: {
                        page: `splide__pagination__page splide__pagination__customPage`,
                        arrows: 'splide__arrows your-class-arrows',
                        arrow: 'splide__arrow your-class-arrow',
                        prev: 'splide__arrow--prev splide__customArrowDesktop-prev',
                        next: 'splide__arrow--next splide__customArrowDesktop-next',
                    },
                }}
                aria-label="..."
            >
                {' '}
                <div className={FeebackGraduatesDesktopCss.splideWrapper}>
                    <SplideTrack
                        className={FeebackGraduatesDesktopCss.splideTrack}
                    >
                        <SplideSlide className="slider_transform">
                            <div
                                className={`${FeebackGraduatesDesktopCss.slider} slider`}
                            >
                                {' '}
                                <div
                                    className={
                                        FeebackGraduatesDesktopCss.starsWrapper
                                    }
                                >
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.number
                                        }
                                    >
                                        5
                                    </div>
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.numberDescr
                                        }
                                    >
                                        Средняя оценка на основании 77 отзывов
                                        выпускников
                                    </div>
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.stars
                                        }
                                    >
                                        <img src={stars} alt="" />
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>

                        <SplideSlide className="slider_transform">
                            <div
                                className={`${FeebackGraduatesDesktopCss.slider} slider`}
                            >
                                <div
                                    className={`${
                                        FeebackGraduatesDesktopCss.slider1
                                    } ${
                                        selected1 === 1
                                            ? FeebackGraduatesDesktopCss.active
                                            : ''
                                    }
                                    `}
                                >
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.sliderImg
                                        }
                                    >
                                        <img src={slider2} alt="" />
                                    </div>
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.linedin
                                        }
                                    >
                                        <a
                                            target="_blank"
                                            href="https://www.linkedin.com/in/andrei-anoshka-a562a0209/"
                                        >
                                            in
                                        </a>
                                    </div>
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.sliderTitle
                                        }
                                    >
                                        Андрей Аношко
                                    </div>
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.sliderProfession
                                        }
                                    >
                                        {' '}
                                        BA in{' '}
                                        <a href="https://www.bytechs.by/">
                                            ByTechSolution
                                        </a>
                                    </div>
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.sliderStars
                                        }
                                    >
                                        <img src={Stars} alt="" />
                                    </div>

                                    <div
                                        className={`${
                                            FeebackGraduatesDesktopCss.sliderSubTitle
                                        } ${
                                            selected1 === 1
                                                ? FeebackGraduatesDesktopCss.active
                                                : ''
                                        }
                                    `}
                                    >
                                        В профессиональном плане я получил
                                        практический опыт системного подхода в
                                        разработке программных продуктов, умение
                                        проявлять гибкость при изменении
                                        ключевых требований к продукту, поиску
                                        решений трудных задач, выстраиванию
                                        устойчивых и продуктивных коммуникаций
                                        между участниками проектной группы. В
                                        личном плане я получил ряд новых и
                                        знакомств с интересными людьми.
                                    </div>
                                    <div
                                        onClick={() => setSelected1(1)}
                                        className={`${
                                            FeebackGraduatesDesktopCss.sliderMore
                                        } ${
                                            selected1 === 1
                                                ? FeebackGraduatesDesktopCss.active
                                                : ''
                                        }
                                    `}
                                    >
                                        <div
                                            className={
                                                FeebackGraduatesDesktopCss.moreGradient
                                            }
                                        ></div>
                                        <div
                                            className={
                                                FeebackGraduatesDesktopCss.moreText
                                            }
                                        >
                                            Подробнее{' '}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                        </SplideSlide>
                        <SplideSlide className="slider_transform">
                            <div
                                className={`${FeebackGraduatesDesktopCss.slider} slider`}
                            >
                                <div
                                    className={`${
                                        FeebackGraduatesDesktopCss.slider1
                                    } ${
                                        selected2 === 2
                                            ? FeebackGraduatesDesktopCss.active
                                            : ''
                                    }
                                    `}
                                >
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.sliderImg
                                        }
                                    >
                                        <img src={slider3} alt="" />
                                    </div>
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.linedin
                                        }
                                    >
                                        <a
                                            target="_blank"
                                            href="https://www.linkedin.com/in/e-maltsev/"
                                        >
                                            in
                                        </a>
                                    </div>
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.sliderTitle
                                        }
                                    >
                                        Евгений Мальцев
                                    </div>
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.sliderProfession
                                        }
                                    >
                                        {' '}
                                        BA in{' '}
                                        <a href="https://www.itransition.com/">
                                            Itransition
                                        </a>
                                    </div>
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.sliderStars
                                        }
                                    >
                                        <img src={Stars} alt="" />
                                    </div>

                                    <div
                                        className={`${
                                            FeebackGraduatesDesktopCss.sliderSubTitle
                                        } ${
                                            selected2 === 2
                                                ? FeebackGraduatesDesktopCss.active
                                                : ''
                                        }
                                    `}
                                    >
                                        Советую всем новичкам пройти стажировку.
                                        Это укрепит уверенность и даст
                                        практические знания. После стажировки
                                        каждому будет проще и быстрее
                                        схватывать, что конкретно от новичка
                                        требуется на проекте
                                    </div>
                                    <div
                                        onClick={() => setSelected2(2)}
                                        className={`${
                                            FeebackGraduatesDesktopCss.sliderMore
                                        } ${
                                            selected2 === 2
                                                ? FeebackGraduatesDesktopCss.active
                                                : ''
                                        }
                                    `}
                                    >
                                        <div
                                            className={
                                                FeebackGraduatesDesktopCss.moreGradient
                                            }
                                        ></div>
                                        <div
                                            className={
                                                FeebackGraduatesDesktopCss.moreText
                                            }
                                        >
                                            Подробнее{' '}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                        </SplideSlide>
                        <SplideSlide className="slider_transform">
                            <div
                                className={`${FeebackGraduatesDesktopCss.slider} slider`}
                            >
                                <div
                                    className={`${
                                        FeebackGraduatesDesktopCss.slider1
                                    } ${
                                        selected3 === 3
                                            ? FeebackGraduatesDesktopCss.active
                                            : ''
                                    }
                                    `}
                                >
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.sliderImg
                                        }
                                    >
                                        <img src={slider4} alt="" />
                                    </div>
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.linedin
                                        }
                                    >
                                        <a
                                            target="_blank"
                                            href="https://www.linkedin.com/in/verkate/"
                                        >
                                            in
                                        </a>
                                    </div>
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.sliderTitle
                                        }
                                    >
                                        Екатерина Веретенникова
                                    </div>
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.sliderProfession
                                        }
                                    >
                                        {' '}
                                        UX/UI in{' '}
                                        <a href="https://www.csinow.edu/">
                                            Computer Systems Institute{' '}
                                        </a>
                                    </div>
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.sliderStars
                                        }
                                    >
                                        <img src={Stars} alt="" />
                                    </div>

                                    <div
                                        className={`${
                                            FeebackGraduatesDesktopCss.sliderSubTitle
                                        } ${
                                            selected3 === 3
                                                ? FeebackGraduatesDesktopCss.active
                                                : ''
                                        }
                                    `}
                                    >
                                        Если в данной момент вы нигде не
                                        работаете, но желаете поддерживать и
                                        совершенствовать практические навыки, а
                                        также есть стремление пополнять
                                        портфолио, то участие в данной
                                        стажировке очень вам пригодиться. Здесь
                                        вы будете тренироваться не над
                                        выдуманной учебной задачей, а над
                                        настоящим проектом, который вот-вот
                                        выйдет в свет и принесет свои плоды) А
                                        также живое общение с командой - это
                                        именно то, что так часто является
                                        основой опыта и ценным пунктом при
                                        прохождении интервью) Спасибо основателю
                                        Александру и команде за предоставленный
                                        шанс!
                                    </div>
                                    <div
                                        onClick={() => setSelected3(3)}
                                        className={`${
                                            FeebackGraduatesDesktopCss.sliderMore
                                        } ${
                                            selected3 === 3
                                                ? FeebackGraduatesDesktopCss.active
                                                : ''
                                        }
                                    `}
                                    >
                                        <div
                                            className={
                                                FeebackGraduatesDesktopCss.moreGradient
                                            }
                                        ></div>
                                        <div
                                            className={
                                                FeebackGraduatesDesktopCss.moreText
                                            }
                                        >
                                            Подробнее{' '}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                        </SplideSlide>

                        <SplideSlide className="slider_transform">
                            <div
                                className={`${FeebackGraduatesDesktopCss.slider} slider`}
                            >
                                <div
                                    className={`${
                                        FeebackGraduatesDesktopCss.slider1
                                    } ${
                                        selected4 === 4
                                            ? FeebackGraduatesDesktopCss.active
                                            : ''
                                    }
                                    `}
                                >
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.sliderImg
                                        }
                                    >
                                        <img src={slider1} alt="" />
                                    </div>
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.linedin
                                        }
                                    >
                                        <a
                                            target="_blank"
                                            href="https://www.linkedin.com/in/alehsaroka/"
                                        >
                                            in
                                        </a>
                                    </div>
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.sliderTitle
                                        }
                                    >
                                        Олег Сорока
                                    </div>
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.sliderProfession
                                        }
                                    >
                                        {' '}
                                        UX/UI designer
                                    </div>
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.sliderStars
                                        }
                                    >
                                        <img src={Stars} alt="" />
                                    </div>

                                    <div
                                        className={`${
                                            FeebackGraduatesDesktopCss.sliderSubTitle
                                        } ${
                                            selected4 === 4
                                                ? FeebackGraduatesDesktopCss.active
                                                : ''
                                        }
                                    `}
                                    >
                                        Мне очень помогло видение разработки
                                        продукта с точки зрения бизнеса, т.к
                                        дизайнерам постоянно нужно чувствовать
                                        этот баланс между удобством пользования
                                        и бизнес-задачами. А чтобы видеть-нужно
                                        понимать. Также я получил интересный
                                        опыт работы в команде дизайнеров.
                                    </div>
                                    <div
                                        onClick={() => setSelected4(4)}
                                        className={`${
                                            FeebackGraduatesDesktopCss.sliderMore
                                        } ${
                                            selected4 === 4
                                                ? FeebackGraduatesDesktopCss.active
                                                : ''
                                        }
                                    `}
                                    >
                                        <div
                                            className={
                                                FeebackGraduatesDesktopCss.moreGradient
                                            }
                                        ></div>
                                        <div
                                            className={
                                                FeebackGraduatesDesktopCss.moreText
                                            }
                                        >
                                            Подробнее{' '}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                        </SplideSlide>
                        <SplideSlide className="slider_transform">
                            <div
                                className={`${FeebackGraduatesDesktopCss.slider} slider`}
                            >
                                <div
                                    className={`${
                                        FeebackGraduatesDesktopCss.slider1
                                    } ${
                                        selected5 === 5
                                            ? FeebackGraduatesDesktopCss.active
                                            : ''
                                    }
                                    `}
                                >
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.sliderImg
                                        }
                                    >
                                        <img src={slider5} alt="" />
                                    </div>
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.linedin
                                        }
                                    >
                                        <a
                                            target="_blank"
                                            href="https://www.linkedin.com/in/aliaksandr-auchynnikau-95a210194/"
                                        >
                                            in
                                        </a>
                                    </div>
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.sliderTitle
                                        }
                                    >
                                        Александр Овчинников
                                    </div>
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.sliderProfession
                                        }
                                    >
                                        {' '}
                                        Frontend developer в{' '}
                                        <a href="https://invento-labs.com/">
                                            invento-labs{' '}
                                        </a>
                                    </div>
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.sliderStars
                                        }
                                    >
                                        <img src={Stars} alt="" />
                                    </div>

                                    <div
                                        className={`${
                                            FeebackGraduatesDesktopCss.sliderSubTitle
                                        } ${
                                            selected5 === 5
                                                ? FeebackGraduatesDesktopCss.active
                                                : ''
                                        }
                                    `}
                                    >
                                        стажировка это очень важно. тут у вас
                                        нет такой большой ответственности как на
                                        реальной работе, но при этом сами задачи
                                        такие же. это позволяет более обширно
                                        понять принципы разработки ПО и работы в
                                        ИТ. залог успеха это 80% практики и 20%
                                        теории, что стажировка восполняет
                                        сполна. стажировка позволит вам получить
                                        большое преимущество перед теми кто
                                        пришел без опыта, так как чтоб компании
                                        обучить стажера, приходиться тратить
                                        деньги и неизвестно останется ли тот
                                        работать. а после прохождения
                                        стажировки, кандидаты уже более
                                        уверенные в себе, они уже подготовлены,
                                        на них надо меньше тратить времени, и
                                        вероятность что такой кандидат не уйдет
                                        на середине стажировки в компании, очень
                                        велика. поэтому таких кандидатов берут
                                        чаще на работу, чем тех у кого нет опыта
                                        работы в ИТ. да и стажировка помогает
                                        развить не только хард скилы, но и софт
                                        скилы, которые так же очень важны для ИТ
                                        специалиста.
                                    </div>
                                    <div
                                        onClick={() => setSelected5(5)}
                                        className={`${
                                            FeebackGraduatesDesktopCss.sliderMore
                                        } ${
                                            selected5 === 5
                                                ? FeebackGraduatesDesktopCss.active
                                                : ''
                                        }
                                    `}
                                    >
                                        <div
                                            className={
                                                FeebackGraduatesDesktopCss.moreGradient
                                            }
                                        ></div>
                                        <div
                                            className={
                                                FeebackGraduatesDesktopCss.moreText
                                            }
                                        >
                                            Подробнее{' '}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                        </SplideSlide>
                    </SplideTrack>
                </div>
                <div className="splide__arrows splide__arrows" />
                <button className="splide__arrow splide__arrow--prev splide__customArrowDesktop--prev">
                    <img src={VectorLeft} alt="" />
                </button>
                <button className="splide__arrow splide__arrow--next splide__customArrowDesktop--next">
                    <img src={VectorRight} alt="" />
                </button>
                <div className="splide__customPagination">
                    <ul className="splide__pagination "></ul>
                </div>
            </Splide>
        </div>
    );
};

export default FeebackGraduatesDesktop;
