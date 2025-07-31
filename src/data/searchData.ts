import mango from '../assets/img/community/dog1.jpg';
import mink from '../assets/img/community/dog2.jpeg';

export interface SearchDataType{
    title: string;
    date:string;
    image:string;
    name:string;
    gender:string;
    age:string;
    breed:string;
    location:string;
    lostPeriod:string;
    facilityContact:string;
    content:string;
    specialNotes:string;
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
    gender:'수컷',
    age:'3살',
    breed:'강아지 (골든리트리버)',
    location:'강원도 가평군',
    lostPeriod:'2025-07-19',
    facilityContact:'010-1234-2918',
    content: '대문을 잠깐 열어 둔 사이에 나가 버렸어요ㅜㅜ',
    specialNotes:'다리를 살짝 절룩입니다',
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
    gender:'암컷',
    age: '2살',
    breed:'고양이 (러시안 블루)',
    location:'서울 강남구 수서동',
    lostPeriod:'2025-07-24',
    facilityContact:'010-4567-1234',
    content: '제발 도와주세요. 빨간 목걸이에 연락처 있어요',
    specialNotes: `빨간 목걸이 착용`,
    finderFee: '500만원',
    authorName:'Wade Warren',
    likes: 12,
    comments: 3,
    shares:2,    
    }
];

