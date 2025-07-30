import { Table } from "react-bootstrap";
import styles from './NoticeBoard.module.css';

const NoticeBoard = () => {
    return(
        <>
        <Table responsive="md">
            <thead className={styles.header}>
                <tr>
                    <th scope="col" className="text-center text">No</th>
                    <th scope="col" className="text-center text">제목</th>
                    <th scope="col" className="text-center text">작성일</th>
                    <th scope="col" className="text-center text">조회수</th>
                </tr>
            </thead>

            <tbody className={styles.content}>

                <tr>
                    <th scope="row" className="text-center text">6</th>

                    <th>
                        <div className="d-flex align-items-center">
                        <p className={`body-large text ${styles.title}`}>종합유기견보호센터의 새 모바일웹&어플이 출시되었습니다.</p>
                        <p className={`tab secondary-bg ${styles.newTag}`}>NEW!</p>
                        </div>
                    </th>

                    <th className={`text-center text-dark ${styles.date}`}>2018-10-06</th>

                    <th className="text-center">
                        <div className="d-flex flex-items-center gap-2 text-dark">
                        <div className={`${styles.icon}`}></div>
                        19873
                        </div>
                    </th>

                </tr>
            </tbody>
        </Table>
        </>
    )
}

export default NoticeBoard