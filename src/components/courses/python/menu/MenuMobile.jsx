import MenuCss from './Menu.module.css';

const MenuMobile = (props) => {
    let check = (e) => {
        switch (e.target.value) {
            case '1':
                props.setChoiseModule(1);

                break;
            case '2':
                props.setChoiseModule(2);

                break;
            case '3':
                props.setChoiseModule(3);
                break;
            case '4':
                props.setChoiseModule(4);
                break;
        }
    };
    return (
        <div className={MenuCss.mMenu}>
            <div className={MenuCss.mMenuWrapper}>
                <select size="1" onChange={(e) => check(e)}>
                    {/* <option value="1">Максимальный</option> */}
                    <option value="2">Базовый</option>
                    {/* <option value="3">Профессиональный</option> */}
                    <option value="4">Практический</option>
                </select>
            </div>
        </div>
    );
};

export default MenuMobile;
