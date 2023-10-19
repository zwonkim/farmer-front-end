import { AnimatePresence, motion } from 'framer-motion';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import Link from 'next/link';
import { Banner } from 'src/types/home/types';
import Image from 'next/image';

const SliderContent = ({ sliderContents, activeIndex }) => {
  const imgVariants = {
    initial: {
      opacity: 0,
    },
    start: {
      opacity: 1,
    },
    end: {
      opacity: 0.5,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <>
      <AnimatePresence initial={false}>
        {sliderContents &&
          sliderContents?.map((content: Banner, index: number) =>
            activeIndex === content.id ? (
              <Styled.Content
                key={content.id}
                variants={imgVariants}
                initial="initial"
                animate="start"
                exit="end"
              >
                <Link href={content.linkUrl}>
                  <Image
                    src={content.imgUrl}
                    alt="슬라이더 이미지"
                    fill={true}
                    priority
                  />
                </Link>
                {content.id === 1 && (
                  <Styled.ShopBtn>&gt; Shop Now</Styled.ShopBtn>
                )}
              </Styled.Content>
            ) : null,
          )}
      </AnimatePresence>
    </>
  );
};

export default SliderContent;

const Styled = {
  Content: styled(motion.div)`
    position: absolute;
    width: 100%;
    height: 100%;
  `,
  ShopBtn: styled.p`
    position: absolute;
    top: 488px;
    left: 584px;
    border-radius: 10px;
    width: 114px;
    height: 40px;
    background-color: ${theme.colors.green1};
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 400;
  `,
};
