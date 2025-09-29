// home 컴포넌트 하단 기부/후원 게시판
import {useState} from 'react'
import donationList, { DonationDataType } from '../../../data/donationData';
import { Container, Row, Col } from 'react-bootstrap';
import style from '../../../styles/_donationPost.module.scss';


const DonationPost = () => {

    const [ selectedPost, setSelectedPost ] = useState<DonationDataType | null>(null);
    
    
    return(
        <>
        <Container>
            <Row>
                <Col>
                    <div className = {style.donationWrap}>
                        <h3 className='d-flex justify-content-between mb-3 '>기부/후원 요청
                            <span className='body-small mt-2'>더 보기</span>
                        </h3>

                        <hr/>
                        
                        <ul>
                            {donationList.map((post, index) => (
                                <li
                                key={index}
                                className={`mb-2 ${style.listItem}`} >
                                    <span className={`caption primary-bg ${style.border}`}>
                                        {post.province}
                                    </span>
                                    <span className={`ms-2 ${style.titleAlign}`}>{post. title}</span>
                                    <p className={style.postAlign}>{post.date}</p>
                                </li>

                            ))}
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
        </>

    );
}

export default DonationPost;