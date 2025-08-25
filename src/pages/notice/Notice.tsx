import styles from './Notice.module.css';
import { Badge } from "react-bootstrap";

const Notice =()=>{
    return(
        <>
        <section>
            <header className={`d-flex bg-color btn-custom ${styles.header}`}>
                <span className="no col-1 d-flex align-items-center justify-content-center">No</span>
                <span className="title col-7 d-flex align-items-center justify-content-center">제목</span>
                <span className="date col-2 d-flex align-items-center justify-content-center">작성일</span>
                <span className="views col-2 d-flex align-items-center justify-content-center">조회수</span>
            </header>
        
            <ul><li>
                <article
                    className={`d-flex ${styles.content}`}
                    aria-labelledby="notice-title">

                    <span className="no col-1 d-flex align-items-center justify-content-center btn-custom">1</span>
                    
                    <div className="title col-7 d-flex align-items-center body-large gap-3">
                        <h6 id="notice-title" className={styles.title}>종합유기견보호센터의 새 모바일웹&어플이 출시되었습니다.</h6>
                        
                        <Badge
                            aria-label="새로운 글"
                            className={`secondary-bg tab ${styles.titleBadge}`}
                            >NEW!
                        </Badge>
                    </div>

                    <time
                        dateTime="2018-10-06"
                        className="date col-2 d-flex align-items-center justify-content-center text-dark"
                        aria-label="작성일 2018년 10월 6일"
                        >2018-10-06
                    </time>

                    <span className="views col-2 d-flex align-items-center justify-content-center text-dark gap-2">
                        <div aria-hidden="true" className={styles.icon}/>
                        19873
                    </span>
                    
                </article>
            </li></ul>
        
        </section>
        </>
    )
};

export default Notice;