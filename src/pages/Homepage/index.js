import classNames from "classnames/bind";
import styles from './Homepage.module.scss'
import Header from "../../components/Header";

const cx=classNames.bind(styles);

function Homepage ()
{
    return (
       <div className={cx('wrapper')}>
        Homepage
       </div>
    );
}

export default Homepage;