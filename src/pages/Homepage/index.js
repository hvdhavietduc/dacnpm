import classNames from "classnames/bind";
import styles from './Homepage.module.scss';
import '../../components/base.module.scss';
import Product from "../../components/Product";

const cx=classNames.bind(styles);

function Homepage ()
{
    return (
       <div className={cx('wrapper')}>
            <div className={cx('content-main')}>
                <div className={cx('grid')}>
                    <div className={cx('grid__row')}>
                        <div className={cx('grid__column-65')}>
                            <div className={cx('main__commercial')}>

                            </div>
                        </div>
                        <div className={cx('grid__column-35')}>
                            <div className={cx('main__beside')}>
                                <div className={cx('main__beside-1')}>
                                    
                                </div>
                                <div className={cx('main__beside-2')}>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('content-product')}>
                <div className={cx('grid')}>
                    <a href="" className={cx('product__heading')}>SẢN PHẨM NỔI BẬT</a>
                    <div className={cx('grid__row')}>
                        <div className={cx('grid__column-25')}>
                            {<Product new sale='30' URL_img='https://ordixi.com/wp-content/uploads/2020/10/0eb4c83d.jpg' 
                            name='Sneaker class 1 ' price_new='594,300đ' price_old='849,000đ'/>}
                        </div>
                        <div className={cx('grid__column-25')}>
                            {<Product new sale='30' URL_img='https://ordixi.com/wp-content/uploads/2020/10/0eb4c83d.jpg' 
                            name='Sneaker class 1 ' price_new='594,300đ' price_old='849,000đ'/>}
                        </div>
                        <div className={cx('grid__column-25')}>
                            {<Product new sale='30' URL_img='https://ordixi.com/wp-content/uploads/2020/10/0eb4c83d.jpg' 
                            name='Sneaker class 1 ' price_new='594,300đ' price_old='849,000đ'/>}
                        </div>
                        <div className={cx('grid__column-25')}>
                            {<Product new sale='30' URL_img='https://ordixi.com/wp-content/uploads/2020/10/0eb4c83d.jpg' 
                            name='Sneaker class 1 ' price_new='594,300đ' price_old='849,000đ'/>}
                        </div>
                    </div>
                </div>
                
                
            </div>
            <div className={cx('content-accessory')}>
                
            </div>
       </div>
    );
}

export default Homepage;