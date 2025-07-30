import { Card } from "react-bootstrap";
import styles from "./GalleryDetail.module.scss";

const GalleryDetail = ( )=> {
    return(
        <>
        <Card className={`col-sm-3 col-6 ${styles.warp}`}>
            <div className={`${styles.cardImg}`}><Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1666777247416-ee7a95235559?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/></div>
            <Card.Body className="d-flex flex-column align-items-start justify-content-between">
                <Card.Subtitle className={`tab primary ${styles.hashtag}`}>서울 광진구</Card.Subtitle>
                
                <Card.Title className={`body-large mt-2 mb-0 w-100 ${styles.title}`}>강아지를 찾습니다</Card.Title>
                <Card.Text className={`d-flex tab text-dark ${styles.side}`}>
                    <span className="text-dark">성별</span>
                    <span className="text-dark border-start border-end">나이</span>
                    <span className="text-dark">종(품종)</span>
                </Card.Text>
            </Card.Body>
        </Card>
        </>
    )
}

export default GalleryDetail;