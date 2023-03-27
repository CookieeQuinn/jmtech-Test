import { useParams } from 'umi';
import styles from './case.less';
import PIC from '../assets/svg/pic.svg';
export default function Case() {
  return (
    <div className={styles.main}>
      <div className={styles.image}>
        <img src={PIC} alt="pic" />
        <div className={styles.desc}>
          <div className={styles.title}>OPPO 未来科技大会 2021</div>
          <ul className={styles.tag}>
            <li>创新产品</li>
            <li>前沿技术</li>
            <li>虚拟世界</li>
            <li>3D</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
