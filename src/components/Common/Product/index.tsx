import Image from 'next/image';
import Styled from './styles';
import Icon from '../Icon';
import { ProductProps } from '../type';

const Product = (props: ProductProps) => {
  const {
    thumbnailImg,
    name,
    price,
    discountRate,
    reviewCount,
    averageStarRating,
  } = props;

  return (
    <Styled.Wrapper>
      <Styled.ImgBox>
        <Image
          className="imageStyle"
          src={thumbnailImg}
          alt={name}
          fill={true}
          sizes="100%, 100%"
          priority={true}
        />
      </Styled.ImgBox>
      <Styled.Content>
        <Styled.Title>{name}</Styled.Title>
        <Styled.PriceBox>
          <Styled.Price>{price}</Styled.Price>
          <Styled.Discount>{discountRate}%</Styled.Discount>
          <Styled.EventBox>
            {discountRate ? (
              <Styled.SpecialPrice>특가상품</Styled.SpecialPrice>
            ) : (
              <></>
            )}
          </Styled.EventBox>
        </Styled.PriceBox>
        <Styled.ReviewBox>
          <Styled.Star>
            <Icon name="star" width={16} height={15} />
            {averageStarRating}
          </Styled.Star>
          <Styled.Review>리뷰 {reviewCount}</Styled.Review>
        </Styled.ReviewBox>

        <Styled.Title />
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default Product;
