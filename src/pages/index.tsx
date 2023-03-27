import styles from './index.less';
import { HOME_INFO } from '@/utils/const';
import QRCode from '../assets/svg/QRCode.svg';
import { useState } from 'react';
import { CaretLeftOutlined, CaretUpOutlined } from '@ant-design/icons';
import { history } from 'umi';
import Case from './case';

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
  const isMobile = screen.availWidth < 600 ? true : false;
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
        <div
          className={styles.MoblieQRCode}
          style={{ display: showCode ? '' : 'none' }}
        >
          <img
            src={QRCode}
            alt="QR Code"
            className={showCode ? `${styles.MoblieImgShow}` : ''}
          />
        </div>
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
                `${showCode ? styles.contactStyleAnima : ''}`,
              ].join(' ')}
            >
              {showCode && !isMobile && <CaretLeftOutlined />}
              {contactText}
              {showCode && isMobile && <CaretUpOutlined />}
            </div>
            <div
              className={`${styles.blackMask} ${
                showCode ? styles.blackMaskAnima : ''
              }`}
            ></div>
          </div>
          <div
            className={`${styles['contact-btn']} ${
              showCode ? styles['hideBtn'] : ''
            }`}
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
      <section className={styles.case}>
        <Case />
      </section>
      <section className={styles.case}>
        <Case />
      </section>
      <section className={styles.case}>
        <Case />
      </section>
    </div>
  );
}
