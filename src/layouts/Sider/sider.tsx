import about from '@/assets/svg/about.svg';
import aboutSelected from '@/assets/svg/aboutSelected.svg';
import userList from '@/assets/svg/userList.svg';
import userListSelected from '@/assets/svg/userListSelected.svg';
import welcome from '@/assets/svg/welcome.svg';
import welcomeSelected from '@/assets/svg/welcomeSelected.svg';
import { matchPath, history } from 'umi';
import { menuRouter } from '../../../config/routers.js';
import style from './sider.less';

const MENUICONS = {
  about: about,
  aboutSelected: aboutSelected,
  userList: userList,
  userListSelected: userListSelected,
  welcome: welcome,
  welcomeSelected: welcomeSelected,
};
interface MenusType {
  title?: string;
  icon?: {
    normal: any;
    active: any;
  };
  hideInMenu?: boolean;
  path?: string;
  name?: string;
  routes?: MenusType[];
}

const matchCurrentPath = (menu: MenusType[], path: string) => {
  for (let i = 0; i < menu.length; i++) {
    return matchPath(path, menu[i]);
  }
  return false;
};

export default function Sider(props: SiderProps) {
  const {
    currentRoute: { pathname: currentPath },
  } = props;

  const renderMenu = (routers: MenusType[]) => (
    <div className={style.menuList}>
      {routers
        .filter((menu) => !menu.hideInMenu)
        .map((menuItem) => (
          <div
            key={menuItem.path}
            className={`${style.menuItem} ${
              matchCurrentPath([menuItem], currentPath) ? style.activeMenu : ''
            }`}
            onClick={() => {
              history.push(menuItem.path as string);
            }}
          >
            <img
              src={
                matchCurrentPath([menuItem], currentPath)
                  ? MENUICONS[menuItem.icon?.active]
                  : MENUICONS[menuItem.icon?.normal]
              }
              alt={menuItem.name}
              width={22}
            />
            <span className={style.title}>{menuItem.title}</span>
          </div>
        ))}
    </div>
  );

  return (
    <div className={style.sider}>{renderMenu(menuRouter as MenusType[])}</div>
  );
}

interface SiderProps {
  currentRoute: any;
}
