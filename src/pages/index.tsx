import styles from './index.less';
import { HOME_INFO } from '@/utils/const';
import QRCode from '../assets/svg/QRCode.svg';
import { useState } from 'react';
import { CaretLeftOutlined } from '@ant-design/icons';
import { history } from 'umi';

export default function IndexPage() {
  const [contactText, setContactText] = useState<string>('联系我们');
  // 文本"联系我们"首次不会自动播放动效，因此不能设置animation
  const [contactAnim, setContactAnim] = useState<boolean>(false);
  const [showCode, setShowCode] = useState<boolean>(false);
  const handleContact = () => {
    setContactText('添加微信');
    setContactAnim(true);
    setShowCode(true);
  };
  return (
    <div className={styles.container}>
      <section className={styles.info}>
        <section className={styles['title-section']}>
          <h1 className={styles.title}>{HOME_INFO.title}</h1>
          <span className={styles.slogan}>
            {HOME_INFO.slogan.toUpperCase()}
          </span>
        </section>
        <p className={styles.desc}>{HOME_INFO.description.join('\n')}</p>
        <div className={styles.contact}>
          <div className={styles.QRCode}>
            <img
              src={QRCode}
              alt="QR Code"
              className={showCode ? `${styles.imgShow}` : ''}
            />
          </div>
          <div
            className={styles['contact-btn']}
            onMouseEnter={handleContact}
            // 移动端
            onTouchStart={handleContact}
            onMouseLeave={() => {
              setContactText('联系我们');
              setShowCode(false);
            }}
          >
            {/* 方案1,开启3D */}
            {/* <div className={styles.mask}>
              联系我们
              <div className={styles.showcode}>添加微信</div>
            </div> */}
            {/* 方案2,元素定位+动画 */}
            <div
              className={[
                `${styles.contactStyle}`,
                `${contactAnim ? styles['contact-anima'] : ''}`,
              ].join(' ')}
            >
              {showCode && <CaretLeftOutlined />}
              {contactText}
            </div>
            <div className={styles.blackMask}></div>
          </div>
          <div
            className={styles['contact-btn']}
            onClick={() => {
              history.push(
                `${history.location.pathname == '/' ? '/about' : '/'}`,
              );
            }}
          >
            关注我们
          </div>
        </div>
      </section>
      <section className={styles.case}>案例</section>
    </div>
  );
}
