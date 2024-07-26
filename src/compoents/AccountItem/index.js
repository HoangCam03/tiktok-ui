import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('Wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/856d6e040a2b3181553f302cdef7f5f5~c5_300x300.webp?lk3s=a5d48078&nonce=31128&refresh_token=5a2bed1eb778ad3b2f75a32b1a56b1eb&x-expires=1722157200&x-signature=d5ZL2r%2Bu4W5JfFY0O%2F7kbysW0lc%3D&shp=a5d48078&shcp=c1333099"
                alt="Rose"
            ></img>
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>rose_are_rosie</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <span className={cx('userName')}>Rosé</span>
            </div>
        </div>
    );
}

export default AccountItem;
