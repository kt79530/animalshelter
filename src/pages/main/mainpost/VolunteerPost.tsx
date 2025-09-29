// home 컴포넌트 하단 자원봉사자 게시판

import { useState } from 'react';
import postList, { PostDataType } from '../../../data/postData';
import { Container, Row, Col } from 'react-bootstrap';
import style  from '../../../styles/_voluteerPost.module.scss';
import PostModal from '../../../components/modal/PostModal';

const VolunteerPost = () => {

    const [selectedPost , setSelectedPost ] = useState<PostDataType | null>(null);
    const [ showModal, setShowModal ] = useState(false);

    const handleTitleClick = (post:PostDataType) => {
        setSelectedPost(post);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setSelectedPost(null);
        setShowModal(false);
    };

        return(
            <>
                <Container>
                    <Row>
                        <Col>
                            <div className="volunteer-wrapper">
                                <h3 className='mb-3 d-flex justify-content-between align-items-end'>자원봉사
                                    <span className='body-small mt-2 '>더 보기</span>
                                </h3>
                                <hr></hr>
                                <ul>
                                    {postList.map((post, index) => (
                                        <li 
                                            key={index}
                                            onClick={()=>handleTitleClick(post)}
                                            style={{cursor:'pointer'}}
                                            className={`mb-2 ${style.listItems}`}>
                                            <span className={`caption primary-bg  ${style.borders}`} >{post.province}</span>
                                            <span className={`ms-2 ${style.titleAlign}`}>{post.title}</span>
                                            <p className={style.dateAlign}>{post.date}</p>
                                        </li>
                                    ))}
                                    
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
                {/*Modal 조건부 렌더링*/}
            {showModal && selectedPost && (
                <PostModal
                    show={showModal}
                    onClose={handleCloseModal}
                    data={selectedPost}/>
            )}
        

            </>

    );
}

export default VolunteerPost;