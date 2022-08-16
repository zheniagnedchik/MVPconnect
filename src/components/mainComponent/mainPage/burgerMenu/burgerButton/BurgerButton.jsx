import BurgerButtonCss from './BurgerButton.module.css';

const BurgerButton = (props) => {
    return (
        <div className={BurgerButtonCss.burgerButtonWrapper}>
            <div
                className={BurgerButtonCss.burgerButton}
                onClick={() => {
                    props.updateMenu();
                }}
            >
                <div
                    className={` ${
                        props.active
                            ? BurgerButtonCss.fixedTwoLine
                            : BurgerButtonCss.twoLine
                    } ${
                        props.menuActive ? BurgerButtonCss.twoLineActive : ''
                    } `}
                >
                    <span
                        className={` ${
                            props.active
                                ? BurgerButtonCss.fixedMediumLine
                                : BurgerButtonCss.mediumLine
                        } ${
                            props.menuActive
                                ? BurgerButtonCss.mediumLineActive
                                : ''
                        }  `}
                    ></span>
                    <span
                        className={` ${
                            props.active
                                ? BurgerButtonCss.fixedMediumLine
                                : BurgerButtonCss.mediumLine
                        } ${
                            props.menuActive
                                ? BurgerButtonCss.mediumLineActive2
                                : ''
                        }  `}
                    ></span>
                </div>
            </div>
        </div>
    );
};

export default BurgerButton;
