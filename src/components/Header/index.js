import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import '../base.module.scss';
const cx=classNames.bind(styles);

function Header()
{
    return(
        <header className={cx('wrapper')}>
            <div className={cx('navbar1')}>
                <span className={cx('navbar1__logo')}>LOGO</span>
                <div className={cx('navbar1__search')}>
                    <input type="" className={cx('navbar1__search-text')}
                    placeholder='Nhập từ khóa tìm kiếm'/>
                    <div className={cx('navbar1__search-wrap')}>
                        <i className={cx('navbar1__search-icon','fa-solid fa-magnifying-glass')}></i>
                    </div>
                   
                </div>
                <div className={cx('navbar1__wrap')}>
                    <div className={cx('navbar1__cart')}>
                        <i className={cx('navbar1__cart-icon','fa-solid fa-cart-shopping')}></i>
                        <a href="" className={cx('navbar1__cart-link')}>Giỏ hàng</a>
                    </div>
                    <a href="" className={cx('navbar1__login')}>Đăng nhập</a>
                    <div className={cx('navbar1__social')}>
                        <a href="" className={cx('navbar1__social-item')}>
                            <i className={cx('navbar1__social-icon_fb','fa-brands fa-facebook')}></i>
                        </a>
                        <a href="" className={cx('navbar1__social-item')}>
                            <i className={cx('navbar1__social-icon_insta','fa-brands fa-instagram')}></i>
                        </a>
                    </div>
                </div>             
            </div>
            <div className={cx('navbar2')}>
                <div className={cx('navbar2__category')}>
                    <i className={cx('navbar2__category-icon_first','fa-solid fa-bars')}></i>
                    <div className={cx('navbar2__category-text')}>DANH MỤC SẢN PHẨM</div>
                    <i className={cx('navbar2__category-icon_second','fa-solid fa-angle-down')}></i>
                </div>
                <div className={cx('navbar2__wrap')}>
                    <div className={cx('navbar2__searchProduct')}>
                        <i className={cx('navbar2__searchProduct-icon','fa-solid fa-truck-fast')}></i>
                        <a href="" className={cx('navbar2__searchProduct-text')}>Tra cứu đơn hàng</a>
                    </div>
                    <a href="" className={cx('navbar2__intro')}>Giới thiệu</a>
                    <div className={cx('navbar2__contact')}>
                        <i className={cx('navbar2__contact-icon','fa-solid fa-phone')}></i>
                        <span className={cx('navbar2__contact-text')}>Liên hệ</span>
                    </div>
                </div>
                
            </div>
        </header>
    );
}

export default Header;