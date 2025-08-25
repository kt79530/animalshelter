//자원봉사자 레이아웃

import { useState } from 'react';
import { Badge } from 'react-bootstrap';
import styles from './Post.module.scss';
import postList, { PostDataType } from '../../data/postData'; //data 반복 렌더링
import PostModal from '../modal/PostModal';

const Post = () => {

    const[selectedPost, setSelectedPost] = useState<PostDataType | null>(null);
    const[showModal, setShowModal] = useState(false);

    const handleTitleClick = (post: PostDataType) => {
        setSelectedPost(post);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedPost(null);
    };
    return(
        <section>
            <ul>
                {postList.map((post, index) => (
                    <li key={index}>
                    <article className={`d-flex justify-content-between w-100 ${styles.wrapper}`} aria-labelledby="post-title">
                        <div className={`post-wrapper d-flex flex-column justify-content-between ${styles.content}`}>
                        
                            <div className="post-content d-flex flex-column gap-3">
                                <div className="d-flex gap-3 align-items-center">

                                    <h3 
                                        id={`post-title-${index}`} 
                                        className={`${styles.title}`}
                                        style={{cursor:'pointer'}}
                                        onClick={()=>handleTitleClick(post)} >
                                        {post.title}</h3>

                                    <Badge
                                        aria-label="모집 종료"
                                        className={`bg-color-badge tab ${styles.titleBadge}`}
                                        >종료
                                    </Badge>

                                    <Badge
                                        aria-label="새로운 게시글"
                                        className={`secondary-bg tab ${styles.titleBadge}`}
                                        >NEW!
                                    </Badge>

                                </div>

                                <div className="d-md-flex gap-4 align-items-center">
                                    <dl className="d-flex gap-2 align-items-baseline">
                                    <dt className="caption">모집 기간 </dt>
                                    <dd className="body-small">{post.recruitmentPeriod}</dd>
                                    </dl>

                                    <dl className="d-flex gap-2 align-items-baseline">
                                    <dt className="caption">봉사 기간 </dt>
                                    <dd className="body-small">{post.volunteerPeriod} <br className="d-block d-md-none"/></dd>
                                    </dl>

                                    <dl className="d-flex gap-2 align-items-baseline">
                                    <dt className="caption">나눔 종류 </dt>
                                    <dd className="body-small">{post.supportType}</dd>
                                    </dl>
                                </div>

                                <p className={`${styles.txt}`}>{post.content}</p>
                                <ul className="tag d-flex gap-2">
                                    <li className={`tab secondary-dark-line ${styles.hashtag}`}>#자율 해시태그</li>
                                    <li className={`tab secondary-dark-line ${styles.hashtag}`}>#자율 해시태그</li>
                                </ul>
                            
                            </div>

                            <ul className="post-meta d-flex gap-5 align-items-center">

                                <li className="region tab d-flex gap-2 align-items-center">
                                    <strong className={`blend-bg ${styles.region}`}>{post.activityLocation}</strong>
                                    {/*<span className="blend d-none d-md-inline">상세</span>*/}
                                </li>

                                <li className="nav-small text-dark">{post.organizationName}</li>

                                <li>
                                <time
                                    aria-label="작성일 0000년 00월 00일"
                                    dateTime="0000-00-00"
                                    className="nav-small text-light"
                                    >{post.date}
                                </time>
                                </li>

                                <li className="d-flex gap-2 align-items-center nav-small text-light">
                                <div
                                    aria-label="댓글수"
                                    className={styles.icon}/>
                                    {post.comments}
                                </li>
                            </ul>
                        </div>
                        
                        <figure aria-hidden="true">
                        <img src={post.image} alt="현장 참고 사진"/>
                        </figure>
                        
                    </article>
                    <hr/>
                    </li>
                ))}
            </ul>
            {/*Modal 조건부 렌더링*/}
            {showModal && selectedPost && (
                <PostModal
                    show={showModal}
                    onClose={handleCloseModal}
                    data={selectedPost}/>
            )}
        </section>
    )
}

export default Post;