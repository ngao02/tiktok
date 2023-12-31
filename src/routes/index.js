import { HeaderOnly } from '~/components/Layout';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Live from '~/pages/Live';
import routesConfig from '~/config/routes';

const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.following, component: Following },
  { path: routesConfig.live, component: Live },
  { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
  { path: routesConfig.profile, component: Profile, layout: HeaderOnly },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
