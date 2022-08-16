import MenuCss from './Menu.module.css';
import MenuAccordion from './menuAccoardion/MenuAccordion';

const Menu = (props) => {
    return (
        <div className={MenuCss.wrapper}>
            <div
                className={`${MenuCss.menu} ${
                    props.menuActive ? '' : MenuCss.menuActive
                }`}
            >
                <MenuAccordion />
            </div>
        </div>
    );
};

export default Menu;
