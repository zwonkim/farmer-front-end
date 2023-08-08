import Styled from './styles';
import Icon from '../Icon';
import Image from 'next/image';
import { ProductProps } from '../type';
import { useDispatch, useSelector } from 'react-redux';
import { setProductId } from 'store/reducers/productIdSlice';
import { idSelector } from 'src/types/shop/types';

const Product = (props: ProductProps) => {
  const {id, thumbnailImg, name, price, discountRate, reviewCount, averageStarRating} = props;
  const dispatch = useDispatch();

  return (
    <Styled.Wrapper onClick={()=> dispatch(setProductId(id))}>
      <Styled.ImgBox>
        <Image
          className='imageStyle'
          src={thumbnailImg}
          alt={name}
          fill={true}
          sizes='100%, 100%'
          priority={true}
        />
      </Styled.ImgBox>
      <Styled.Content>
        <Styled.Title>{name}</Styled.Title>
        <Styled.PriceBox>
          <Styled.Discount>{discountRate}%</Styled.Discount>
          <Styled.Price>{price}</Styled.Price>
        </Styled.PriceBox>
        <Styled.ReviewBox>
          <Styled.Star>
            <Icon name="star" width={16} height={15} />
            {averageStarRating}
          </Styled.Star>
          <Styled.Review>리뷰 {reviewCount}</Styled.Review>
        </Styled.ReviewBox>
        <Styled.EventBox>
          {discountRate ? <Styled.SpecialPrice>특가상품</Styled.SpecialPrice> : <></>}
        </Styled.EventBox>
        <Styled.Title />
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default Product;
