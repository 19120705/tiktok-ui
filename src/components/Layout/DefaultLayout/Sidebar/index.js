import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Button outline large>
                Log in
            </Button>
        </aside>
    );
}

export default Sidebar;
