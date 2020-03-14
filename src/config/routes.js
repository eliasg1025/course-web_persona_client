// Layouts
import LayoutAdmin from '../layouts/LayoutAdmin';

// Admin Pages
import AdminHome from '../pages/Admin';
import AdminSignin from '../pages/Admin/Signin';

const routes = [
  {
    path: '/admin',
    component: LayoutAdmin,
    exact: false,
    routes: [
      {
        path: '/admin',
        component: AdminHome,
        exact: true
      },
      {
        path: '/admin/login',
        component: AdminSignin,
        exact: true
      }
    ]
  }
];

export default routes;
