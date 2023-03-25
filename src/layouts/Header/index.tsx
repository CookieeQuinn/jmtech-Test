import style from './index.less';
import CookieLogo from '@/assets/svg/cookie.svg';
import { history } from 'umi';
import { message } from 'antd';
export default function Header(props: HeaderProps) {
  const { children } = props;
  const [messageApi, contextHolder] = message.useMessage();
  const handleLogout = () => {
    messageApi.info('Logout Successfully');
  };
  return (
    <header className={style.header}>
      <div
        className={style.left}
        onClick={() => {
          history.push('/');
        }}
      >
        <img src={CookieLogo} alt="" width={35} style={{ marginLeft: 12 }} />
        <span className={style.title}>Cookiee Quinn's Blog</span>
      </div>
      <div className={style.right}>
        {children}
        <div className={style['right-right']}>
          <b className={style.name}>Hi,CookieeQuinn</b>
          {contextHolder}
          <span className={style.logout} onClick={handleLogout}>
            Logout
          </span>
        </div>
      </div>
    </header>
  );
}
interface HeaderProps {
  children?: any;
}
