import classNames from "classnames";
import styles from './DefaultLayout_KH.module.scss';

import Header from "../../Header";
import Footer from "../../Footer"

const cx=classNames.bind(styles);

/* Layout has value=2 */
function DefaultLayout_KH({children})
{
    return(
        <div className={cx('wrapper')}>
            <Header/>
            <div className={cx('content')}>
                {children}
            </div>
            <Footer/>
        </div>
    );
}

export default DefaultLayout_KH;