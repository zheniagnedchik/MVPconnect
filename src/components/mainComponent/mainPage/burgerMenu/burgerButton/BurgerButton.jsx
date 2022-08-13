import BurgerButtonCss from './BurgerButton.module.css';

const BurgerButton = (props) => {
    return (
        <div>
            <div className={BurgerButtonCss.burgerButtonWrapper}>
                <div
                    className={` ${
                        props.active
                            ? BurgerButtonCss.fixedBtn
                            : BurgerButtonCss.btn
                    }`}
                >
                    <span
                        className={` ${
                            props.active
                                ? BurgerButtonCss.fixedMediumLine
                                : BurgerButtonCss.mediumLine
                        }`}
                    ></span>
                </div>
            </div>
        </div>
    );
};

export default BurgerButton;
