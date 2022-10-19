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
        layout: null,
    },
    {
        path: '/CategoryProduct',
        component: CategoryProduct,
        layout: null,
    },
    {
        path: '/ForgetPassword',
        component: ForgetPassword,
        layout: null,
    },
    {
        path: '/',
        component: Homepage,
        layout: null,
    },
    {
        path: '/',
        component: Homepage_Ad,
        layout: null,
    },
    {
        path: '/',
        component: Homepage_Kh,
        layout: null,
    },
    {
        path: '/InsertProduct',
        component: InsertProduct,
        layout: null,
    },
    {
        path: '/ListProduct',
        component: ListProduct,
        layout: null,
    },
    {
        path: '/Login',
        component: Login,
        layout: null,
    },
    {
        path: '/ModifiedProduct',
        component: ModifiedProduct,
        layout: null,
    },
    {
        path: '/PageOrder',
        component: PageOrder,
        layout: null,
    },
    {
        path: '/PaymentAddress',
        component: PaymentAddress,
        layout: null,
    },
    {
        path: '/ProfileIndividiual',
        component: ProfileIndividiual,
        layout: null,
    },
    {
        path: '/ProfileProduct',
        component: ProfileProduct,
        layout: null,
    },
    {
        path: '/Register',
        component: Register,
        layout: null,
    }
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };