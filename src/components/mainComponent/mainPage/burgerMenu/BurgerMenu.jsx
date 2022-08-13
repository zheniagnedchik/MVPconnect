import BurgerMenuCss from './BurgerMenu.module.css';
import MvpIcon from './img/MvpConnectIcon.svg';
import React from 'react';
import BurgerButton from './burgerButton/BurgerButton';

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
        const visible = currentScrollPos > pastScrollpos * 0.121 - 1;
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
                <div
                    className={`${BurgerMenuCss.mvpIcon} ${
                        this.state.visible ? BurgerMenuCss.fixedIcon : ''
                    }`}
                >
                    <img
                        className={`${BurgerMenuCss.mvpIconImg} ${
                            this.state.visible ? BurgerMenuCss.fixedImg : ''
                        }`}
                        src={MvpIcon}
                        alt=""
                    />
                </div>
                <div className={BurgerMenuCss.burgerIcon}>
                    <BurgerButton active={this.state.visible} />
                </div>
            </div>
        );
    }
}
export default BurgerMenu;
