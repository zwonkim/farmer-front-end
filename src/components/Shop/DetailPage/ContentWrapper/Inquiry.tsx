import { useState } from 'react';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import secret from '@assets/images/shop/secretIcon.svg';
import VerticalLine from '@components/Shop/Common/VerticalLine';
import OnOffButton from './OnOffButton';
import MiniModal from '@components/Common/MiniModal';

const Inquiry = () => {
  const tempList = [
    {
      id: 1,
      isSecret: false,
      userName: '유저5**',
      time: '2023년 04월 30일 10시 29분',
      option: '상품 01',
      content: '문의 내용 입니다.',
    },
    {
      id: 2,
      isSecret: true,
      userName: '유저2**',
      time: '2023년 04월 29일 21시 35분',
      option: '상품 01',
      content: '문의 내용 입니다.',
    },
    {
      id: 3,
      isSecret: true,
      userName: '유저2**',
      time: '2023년 04월 29일 21시 35분',
      option: '상품 01',
      content: '문의 내용 입니다.',
    },
    {
      id: 4,
      isSecret: true,
      userName: '유저2**',
      time: '2023년 04월 29일 21시 35분',
      option: '상품 01',
      content: '문의 내용 입니다.',
    },
    {
      id: 5,
      isSecret: true,
      userName: '유저2**',
      time: '2023년 04월 29일 21시 35분',
      option: '상품 01',
      content: '문의 내용 입니다.',
    },
  ];
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const openModal = () => {
    setModalOpen(true);
    console.log('open');
  };
  const closeModal = () => {
    setModalOpen(false);
    console.log('close');
  };
  return (
    <Styled.Wrapper>
      <Styled.Container>
        {modalOpen === true ? (
          <MiniModal
            modalType="inquiry"
            modalName="문의하기"
            modalClose={closeModal}
          />
        ) : null}
        <Styled.Title>
          <div>
            <div>문의</div>
            <div>177</div>
          </div>
          <Styled.MyInQuiry>
            <span>내 문의글 보기</span>
            <OnOffButton />
            <Styled.OpenModalButton onClick={openModal}>
              문의하기
            </Styled.OpenModalButton>
          </Styled.MyInQuiry>
        </Styled.Title>
        {tempList.map(item => (
          <Styled.Single key={item.id}>
            <div>
              <div>구매</div>
              <VerticalLine height={13.5} />
              <div>상품</div>
              <VerticalLine height={13.5} />
              <div>미답변</div>
            </div>
            <div>
              <div>{item.userName}</div>
              <VerticalLine height={15} />
              <div>{item.time}</div>
            </div>
            {item.isSecret ? (
              <Styled.Question>
                <div>Q</div>
                <Styled.SecretIcon />
                <div>비밀글입니다.</div>
              </Styled.Question>
            ) : (
              <Styled.OpenQuestion>
                <div>Q</div>
                <div>
                  <div>{item.option}</div>
                  <div>{item.content}</div>
                </div>
              </Styled.OpenQuestion>
            )}
          </Styled.Single>
        ))}
      </Styled.Container>
      {/* 백엔드에서 데이터 어떻게 들어오는지 보고 결정해야할 것 같음 */}
      <div>페이지네이션 들어갈 부분</div>
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.div`
    width: ${theme.size.shopDetailWidth};
    display: flex;
    flex-direction: column;
    margin-bottom: 80px;
  `,
  Container: styled.div`
    border-bottom: 1px solid ${theme.colors.green1};
    margin-bottom: 33px;
  `,
  Title: styled.div`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 25px;
    display: flex;
    justify-content: space-between;
    & > div {
      display: flex;
      align-items: center;
    }
    & > div:first-child > div:last-child {
      color: #47ac3a;
      margin-left: 6px;
    }
  `,
  MyInQuiry: styled.div`
    & > span {
      font-size: 16px;
      font-weight: 500;
      color: ${theme.colors.pointGreen};
      margin-right: 10px;
    }
  `,
  OpenModalButton: styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 25px;
    width: 95px;
    height: 32px;
    border-radius: 5px;
    background-color: ${theme.colors.pointGreen};
    color: #fff;
    font-size: 16px;
    font-weight: 600;
  `,
  Single: styled.div`
    display: flex;
    font-size: 12px;
    font-weight: 500;
    flex-direction: column;
    & > div {
      display: flex;
      gap: 3px;
    }
  `,
  OpenQuestion: styled.div`
    margin-top: 12px;
    gap: 9px !important;
    display: flex;
    font-size: 16px;
    font-weight: 700;
    align-content: center;
    margin-bottom: 26px;
    & > div {
      height: fit-content;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
    }
    & > div > div {
      display: flex;
      flex-direction: column;
    }
  `,
  Question: styled.div`
    margin-top: 12px;
    gap: 9px !important;
    display: flex;
    font-size: 16px;
    font-weight: 700;
    align-items: center;
    margin-bottom: 26px;
  `,
  SecretIcon: styled(secret)``,
};
export default Inquiry;