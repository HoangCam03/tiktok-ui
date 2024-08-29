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
                src="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/856d6e040a2b3181553f302cdef7f5f5.jpeg?lk3s=a5d48078&nonce=41326&refresh_token=0cf058df411a906bb438c37b3782c530&x-expires=1724936400&x-signature=ymshiHuD3a2ZreW%2FsWGJTbrWVMo%3D&shp=a5d48078&shcp=81f88b70"
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
