/* Lưu đường dẫn chuyển trang */
import Cart from '../pages/Cart';
import CategoryProduct from '../pages/CategoryProduct';
import ForgetPassword from '../pages/ForgetPassword';
import Homepage from '../pages/Homepage';
import Homepage_Ad from '../pages/Homepage_Ad';
import Homepage_Kh from '../pages/Homepage_Kh';
import InsertProduct from '../pages/InsertProduct';
import ListProduct from '../pages/ListProduct';
import Login from '../pages/Login';
import ModifiedProduct from '../pages/ModifiedProduct';
import PageOrder from '../pages/PageOrder';
import PaymentAddress from '../pages/PaymentAddress';
import ProfileIndividiual from '../pages/ProfileIndividiual';
import ProfileProduct from '../pages/ProfileProduct';
import Register from '../pages/Register';



const publicRoutes = [
    {
        path: '/Cart',
        component: Cart,
        layout: 0
    },
    {
        path: '/CategoryProduct',
        component: CategoryProduct,
        layout: 0
    },
    {
        path: '/ForgetPassword',
        component: ForgetPassword,
        layout: 0
    },
    {
        path: '/',
        component: Homepage,
        layout: 0
    },
    {
        path: '/',
        component: Homepage_Ad,
        layout: 0
    },
    {
        path: '/',
        component: Homepage_Kh,
        layout: 0
    },
    {
        path: '/InsertProduct',
        component: InsertProduct,
        layout: 0
    },
    {
        path: '/ListProduct',
        component: ListProduct,
        layout: 0
    },
    {
        path: '/Login',
        component: Login,
        layout: 0
    },
    {
        path: '/ModifiedProduct',
        component: ModifiedProduct,
        layout: 0
    },
    {
        path: '/PageOrder',
        component: PageOrder,
        layout: 0
    },
    {
        path: '/PaymentAddress',
        component: PaymentAddress,
        layout: 0
    },
    {
        path: '/ProfileIndividiual',
        component: ProfileIndividiual,
        layout: 0
    },
    {
        path: '/ProfileProduct',
        component: ProfileProduct,
        layout: 0
    },
    {
        path: '/Register',
        component: Register,
        layout: 0
    }
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };