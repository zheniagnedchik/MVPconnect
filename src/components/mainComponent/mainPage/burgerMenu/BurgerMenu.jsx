import BurgerMenuCss from './BurgerMenu.module.css';
import MvpIcon from './img/MvpConnectIcon.svg';
import BurgerIcon from './img/BurgerIcon.svg';
import React from 'react';

class BurgerMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prevScrollpos: window.pageYOffset,
            pastScrollpos: window.innerHeight,
            visible: false,
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const { pastScrollpos } = this.state;
        const currentScrollPos = window.pageYOffset;
        const visible = currentScrollPos > pastScrollpos;
        this.setState({
            prevScrollpos: currentScrollPos,
            visible,
        });
    };

    render() {
        return (
            <div
                className={`${BurgerMenuCss.burgerMenu} ${
                    this.state.visible ? BurgerMenuCss.fixed : ''
                }`}
            >
                <div className={BurgerMenuCss.mvpIcon}>
                    <img src={MvpIcon} alt="" />
                </div>
                <div className={BurgerMenuCss.burgerIcon}>
                    <img src={BurgerIcon} alt="" />
                </div>
            </div>
        );
    }
}
export default BurgerMenu;
