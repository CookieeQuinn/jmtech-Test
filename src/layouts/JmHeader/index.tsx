import style from './index.less';
import logo from '../../assets/svg/logo.svg';
import { matchPath, history } from 'umi';
import { menuRouter } from '../../../config/routers.js';

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
export default function JmHeader(props: JmHeaderProps) {
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
            <span className={style.title}>{menuItem.title}</span>
          </div>
        ))}
    </div>
  );

  return (
    <div className={style.header}>
      <div className={style.left}>
        <img className={style.loge} src={logo} alt="Logo" />
      </div>
      <div className={style.right}>{renderMenu(menuRouter as MenusType[])}</div>
    </div>
  );
}
interface JmHeaderProps {
  currentRoute: any;
}
