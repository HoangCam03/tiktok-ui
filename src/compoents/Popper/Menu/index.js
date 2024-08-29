import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/compoents/Popper';
import styles from './Menu.module.scss';
import MenuItems from './MenuItems';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItems key={index} data={item}></MenuItems>);
    };

    return (
        <Tippy
            placement="bottom-end"
            delay={(0, 700)}
            interactive
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
