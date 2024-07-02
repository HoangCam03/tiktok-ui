import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Profile from '~/Pages/Profile';
import Upload from '~/Pages/Upload';
import { HeaderOnly } from '~/compoents/Layout';
const publicRoutes = [
    { path: '/', compoent: Home },
    { path: '/following', compoent: Following },
    { path: '/profile', compoent: Profile },
    { path: '/upload', compoent: Upload, layout: HeaderOnly },
];

const privatRoutes = [];
export { publicRoutes, privatRoutes };
