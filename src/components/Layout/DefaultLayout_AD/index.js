import classNames from "classnames";
import styles from './DefaultLayout_AD.module.scss';

import Header from "../../Header";
import Footer from "../../Footer"

const cx=classNames.bind(styles);

/* Layout has value = 1 */
function  DefaultLayout_AD({children})
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

export default  DefaultLayout_AD;