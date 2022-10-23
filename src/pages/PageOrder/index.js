import styles from './PageOrder.module.scss';
import classNames from "classnames/bind";
import ProductOrder from "../../components/ProductOrder"
const cx=classNames.bind(styles);

function PageOrder ()
{
    return (
        <div className={cx('wrapper')}>
            <div className={cx('address')}>
               <span>Trang chủ {'>'} Hồ sơ {'>'} </span>
               <span className={cx('address_current')}>Danh sách đơn hàng</span>
            </div>
            <div className={cx('content')}>
                <div className={cx('content1')}>
                    <div className={cx('list_address')}>
                        <h1 className={cx('list_address_header')}>
                            Tài khoản
                        </h1>
                        <div className={cx('address1')}>
                            Thông tin cá nhân
                        </div>
                        <div className={cx('address2')}>
                            Địa chỉ thanh toán
                        </div>
                        <div className={cx('address3')}>
                            Danh sách đơn hàng
                        </div>
                        <div className={cx('exit')}>
                            Đăng xuất
                        </div>
                    </div>
                </div>
                <div className={cx('content2')}>
                    <div className={cx('list_order')}>
                        <h1 className={cx('list_header')}>
                            Danh sách đơn hàng
                        </h1>
                        <div className={cx('order1')}>
                            <h2 className={cx('order1_header')}>{'#'}Order001</h2>
                            <span className={cx('order1_state')}>Hoàn thành</span>
                            <div className={cx('list_product')}>
                                <div className={cx('order1_product1')}>
                                    {<ProductOrder number='1' new sale='30' size='39' URL_img='https://ordixi.com/wp-content/uploads/2020/10/0eb4c83d.jpg' 
                                    name='Sneaker class 1 ' price_new='594,300đ' price_old='849,000đ'/>}
                                </div>
                                <div className={cx('order1_product2')}>
                                    {<ProductOrder number='1' new sale='30' size='39' URL_img='https://ordixi.com/wp-content/uploads/2020/10/0eb4c83d.jpg' 
                                    name='Sneaker class 1 ' price_new='594,300đ' price_old='849,000đ'/>}
                                </div>
                            </div>
                            <div className={cx('order2_calculate')}>
                                <div>
                                    <span className={cx('calculate')}>Tổng giá trị: </span>
                                    <span className={cx('calculate_price')}> 1,088,600đ</span>
                                </div>
                                <div>
                                    <span className={cx('calculate')}>Phí vận chuyển: </span>
                                    <span className={cx('calculate_price')}> 30,000đ</span>
                                </div>
                                <div>
                                    <span className={cx('calculate')}>Tổng: </span>
                                    <span className={cx('calculate_price')}> 1,118,600đ</span>
                                </div>
                            </div>
                        </div>
                        <div className={cx('order2')}>
                            <h2 className={cx('order2_header')}>{'#'}Order002</h2>
                            <span className={cx('order2_state')}>Hoàn thành</span>
                            <div className={cx('list_product')}>
                                <div className={cx('order2_product1')}>
                                    {<ProductOrder number='1' new sale='30' size='39' URL_img='https://ordixi.com/wp-content/uploads/2020/10/0eb4c83d.jpg' 
                                    name='Sneaker class 1 ' price_new='594,300đ' price_old='849,000đ'/>}
                                </div>
                                <div className={cx('order2_product2')}>
                                    {<ProductOrder number='1' new sale='30' size='39' URL_img='https://ordixi.com/wp-content/uploads/2020/10/0eb4c83d.jpg' 
                                    name='Sneaker class 1 ' price_new='594,300đ' price_old='849,000đ'/>}
                                </div>
                            </div>
                            <div className={cx('order2_calculate')}>
                                <div>
                                    <span className={cx('calculate')}>Tổng giá trị: </span>
                                    <span className={cx('calculate_price')}> 1,088,600đ</span>
                                </div>
                                <div>
                                    <span className={cx('calculate')}>Phí vận chuyển: </span>
                                    <span className={cx('calculate_price')}> 30,000đ</span>
                                </div>
                                <div>
                                    <span className={cx('calculate')}>Tổng: </span>
                                    <span className={cx('calculate_price')}> 1,118,600đ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageOrder;