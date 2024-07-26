import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    onclick,
    leftIcon,
    rightIcon,
    primary = false,
    outline = false,
    disabled = false,
    small = false,
    large = false,
    text = false,
    children,
    ...passProps
}) {
    const props = {
        onclick,
        ...passProps,
    };

    ///Remove event listener when click btn is disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    let Comp = 'button';
    const classes = cx('wrapper', {
        primary,
        outline,
        disabled,
        small,
        large,
        text,
        leftIcon,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
