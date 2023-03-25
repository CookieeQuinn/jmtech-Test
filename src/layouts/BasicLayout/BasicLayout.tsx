import Header from '../Header/index';
import JmHeader from '../JmHeader';
import Sider from '../Sider/sider';
import style from './index.less';

export default function BasicLayout(props: BasicLayoutProps) {
  const { children, location } = props;
  return (
    <div className={style.warpper}>
      {/* <Header /> */}
      <JmHeader />
      <div className={style.container}>
        {/* <Sider currentRoute={location} /> */}
        <div className={style.main}>{children}</div>
      </div>
    </div>
  );
}

interface BasicLayoutProps {
  location: any;
  children?: any;
}
