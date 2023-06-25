import Styled from './styles';
import Image from 'next/image';

const News = () => {
  return (
    <Styled.Wrapper>
        <Styled.Title>farmer news</Styled.Title>
          <Styled.ImgBox>
            <Styled.FlexBox>
              <Styled.ImgTitle>관련 뉴스</Styled.ImgTitle>
              <Styled.ShopBtn>&gt; Shop Now</Styled.ShopBtn>
            </Styled.FlexBox>
            <Image
              src='/assets/images/home/newsImage.png'
              alt='news image'
              width={553}
              height={600}
            />
          </Styled.ImgBox>
        <Styled.ContentBox>
          <Styled.ContentTitle>
            다욱식물 건강하게 키우는 범 - 기본적인 다육이 화분 관리법에 대한 팁
            (물 주기)
          </Styled.ContentTitle>
          <Styled.Content>
            안녕하세요. 쇼핑카트 입니다. 이 글을 시작으로, 제가 사무실에서
            키워온 다육식물에 대한 팁을 조금 씩 드려볼까 합니다. 이번 글에서는
            물관리에 대한 중요한 사항이 포함 되어 있으므로, 글을 차근차근
            읽어보시기 바랍니다. 아마 다들 사무실이나 볕 잘 드는 집 베란다에서
            화분을 적어도 한두 개 씩은 키울 겁니다. 여러 가지 이유로 오래 머물게
            되는 공간이 있는데, 누군가는 감성적인이유로 누군가는 공기정화를 위해
            화분을 키우죠. 무언가 살아있으며, 나의 관리가 필요한, 그러면서
            성장하는 모습을 보 면 뿌듯한... 그런 것이 바로 화분이라고
            생각합니다. 나는 이 공간에 오 래 갇혀있어 발전이 없는 것 같은데,
            그래도 화분은 성장하며 꽃을 피우 니깐요 ^^; 다육식물은 비교적 최근
            들어서 인기가 많아진 화분입니다. 다육식물은 주로 자신의 줄기와 잎에
            수분을 저장하여 두껍고 통통한 모습을 가진 식물로, 대략적으로
            선인장과 일반 관엽식물의 중간쯤 되 는 식물이라 생각하면 크게
            틀리지는 않습니다. 다만, 다육식물은 생각 보다 습한 곳에서
            자생합니다. 생긴 것이 잎에 물을 잔뜩 머금고 있는 모습이라,
            선인장처럼 건조한 사막에나 있을 것 같은데요. 생각보다 해 변가에서
            많이 관찰할 수 있으며, 우리나라에서도 제주도 가시면 야외 에서
            다육식물을 자주 보실 수 있습니다. 예전에 미국 샌프란시스코에..
            다육식물은 비교적 최근 들어서 인기가 많아진 화분입니다. 다육식물은
            주로 자신의 줄기와 잎에 수분을 저장하여 두껍고 통통한 모습을 가진
            식물로, 대략적으로 선인장과 일반 관엽식물의 중간쯤 되 는 식물이라
            생각하면 크게 틀리지는 않습니다. 다만, 다육식물은 생각 보다 습한
            곳에서 자생합니다. 생긴 것이 잎에 물을 잔뜩 머금고 있는 모습이라,
            선인장처럼 건조한 사막에나 있을 것 같은데요. 생각보다 해 변가에서
            많이 관찰할 수 있으며, 우리나라에서도 제주도 가시면 야외 에서
            다육식물을 자주 보실 수 있습니다. 예전에 미국 샌프란시스코에..
          </Styled.Content>
        </Styled.ContentBox>
    </Styled.Wrapper>
  );
};

export default News;
