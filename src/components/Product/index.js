import classNames from "classnames/bind";
import styles from './Product.module.scss';
import '../base.module.scss';

const cx=classNames.bind(styles);

/* props là đối tượng sẽ chưa các thuộc tính của
một Product gồm new(true), sale(int), URL_img(string), name(string),
price_new(float), price_old(float) */



function Product(props)
{
    return (
        <a href="" className={cx('wrapper')}>
            <div className={cx('product__top')} >
                <img className={cx('product__top-img')} src={props.URL_img} align='middle'/>
                <div className={cx('product__top-sale')}>
                </div>
                <div className={cx('product__top-move')}>
                </div>
                <div className={cx('product__top-size')}>

                </div>
            </div>
            <div className={cx('product__bot')}>
                <div className={cx('product__bot-name')}>

                </div>
                <div className={cx('product__bot-price')}>

                </div>
                <div className={cx('product__bot-detail')}>

                </div>

            </div>
        </a>
    )
}
export default Product;