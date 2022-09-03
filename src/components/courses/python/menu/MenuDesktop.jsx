import MenuCss from './Menu.module.css';

const MenuDesktop = (props) => {
    return (
        <div className={MenuCss.dMenu}>
            <div className={MenuCss.dWrapper}>
                {/* <div
                    onClick={() => props.setChoiseModule(1)}
                    className={` ${
                        props.ChoiseModule === 1 ? MenuCss.dMenuActive : ''
                    }`}
                >
                    <p> Максимальный</p>
                </div> */}
                <div
                    onClick={() => props.setChoiseModule(2)}
                    className={` ${
                        props.ChoiseModule === 2 ? MenuCss.dMenuActive : ''
                    }`}
                >
                    <p> Базовый</p>
                </div>
                {/* <div
                    onClick={() => props.setChoiseModule(3)}
                    className={` ${
                        props.ChoiseModule === 3 ? MenuCss.dMenuActive : ''
                    }`}
                >
                    <p> Профессиональный</p>
                </div> */}
                <div
                    onClick={() => props.setChoiseModule(4)}
                    className={` ${
                        props.ChoiseModule === 4 ? MenuCss.dMenuActive : ''
                    }`}
                >
                    <p> Практический</p>
                </div>
            </div>
        </div>
    );
};

export default MenuDesktop;
