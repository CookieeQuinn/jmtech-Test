import JmHeader from '../JmHeader';
import style from './index.less';

export default function BasicLayout(props: BasicLayoutProps) {
  const { children, location, history } = props;
  return (
    <div className={style.warpper}>
      <div className={style.container}>
        <div className={style.main}>{children}</div>
      </div>
    </div>
  );
}

interface BasicLayoutProps {
  location: any;
  children?: any;
  history: any;
}
