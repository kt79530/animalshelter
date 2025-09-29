import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NoticeBoard from '../../components/notice/NoticeBoard';
import noticeBg from '../../assets/img/notice/noticebg.png';
import styles from '../../pages/notice/Notice.module.css';

const Notice: React.FC = () => (
  <div className={styles.noticePage}>
    <section
      className={styles.banner}
      style={{ backgroundImage: `url(${noticeBg})` }}
    >
      <div className={styles.noticePage__overlay}>
        <Container>
          <Row style={{ height: '100%' }}>
            <Col lg={12} md={4} sm={6} className="">
              <h1 className={`mb-2 ${styles.noticePage__title}`}>공지사항</h1>
              <p className={styles.noticePage__subtitle}>
                종합유기견보호센터의 새로운 소식을 알려드립니다!
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
    
          <section className={styles.noticeList}>
            <NoticeBoard />
          </section>
       
  </div>
);

export default Notice;
