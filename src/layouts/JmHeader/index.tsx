import style from './index.less';
import { MENU_TITLE } from '../../utils/const';
export default function JmHeader() {
  return (
    <div className={style.header}>
      <div className={style.left}>
        <img className={style.loge} src="" alt="123" />
      </div>
      <div className={style.right}>menu</div>
    </div>
  );
}
