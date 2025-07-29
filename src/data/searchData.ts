import mango from '../assets/img/community/dog1.jpg';
import mink from '../assets/img/community/dog2.jpeg';

export interface SearchDataType{
    title: string;
    date:string;
    image:string;
    name:string;
    info:string;
    breed:string;
    lostLocation:string;
    lostPeriod:string;
    facilityContact:string;
    content:string;
    finderFee:string;
    authorName:string;
    likes:number;
    comments:number;
    shares:number;
}

export const searchList: SearchDataType[] = [
    {
    title: '실종동물 찾습니다!',
    date: '2025-07-19',
    image:mango,
    name : '망고',
    info:'3세 수컷 10kg',
    breed:'강아지 (푸들)',
    lostLocation:'강원도 가평군',
    lostPeriod:'2025-07-19',
    facilityContact:'010-1234-2918',
    content: `특이사항 및 기타 숙지 사항을 작성하면 됩니다.`,
    finderFee: '100만원',
    authorName:'Wade Warren',
    likes: 12,
    comments: 3,
    shares:2,
    },
    {
    title: '도와주세요',
    date: '2025-07-25',
    image:mink,
    name : '밍크',
    info:'5세 암컷 8kg',
    breed:'고양이 (러시안)',
    lostLocation:'서울 강남구 수서동',
    lostPeriod:'2025-07-24',
    facilityContact:'010-4567-1234',
    content: `빨간 목걸이 착용`,
    finderFee: '500만원',
    authorName:'Wade Warren',
    likes: 12,
    comments: 3,
    shares:2,    
    }
];

