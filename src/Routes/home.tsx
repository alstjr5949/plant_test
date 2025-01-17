import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Footer from "../Components/footer";
import sprout from "../img/sprout.png";

const Wrapper = styled(motion.div)`
  width: 500px;
  height: 100vh;
  min-height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 50px 20px;
  position: relative;
  @media ${(props) => props.theme.IphoneX} {
    width: 100vw;
    height: 100vh;
  }
  @media ${(props) => props.theme.laptop} {
    width: 500px;
    height: 100vh;
  }
`;

const Title = styled(motion.div)`
  width: 80%;
  min-width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 20px;
  text-align: center;
  margin-bottom: 20px;
  & span {
    margin: 10px 0px;
    font-weight: 400;
    &:first-child {
      font-size: 22px;
      & span {
        font-size: 28px;
        background: linear-gradient(
          to bottom,
          #cee166,
          ${(props) => props.theme.color.green}
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    &:nth-child(2) {
      font-size: 55px;
      font-family: "GmarketSansBold";
      background: linear-gradient(
        to bottom,
        #cee166,
        ${(props) => props.theme.color.green}
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    &:last-child {
      font-size: 40px;
      font-weight: 400;
      color: black;
    }
  }
  @media ${(props) => props.theme.IphoneX} {
    & span:first-child {
      font-size: 20px;
      & span {
        font-size: 20px;
      }
    }
  }
`;

const MainImg = styled.div`
  background-image: url(${sprout});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  width: 200px;
  height: 200px;
  margin-bottom: 40px;
  filter: brightness(1.2);
`;

const Hashtag = styled.div`
  width: 85%;
  color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 20px;
  @media ${(props) => props.theme.IphoneX} {
    width: 100%;
    font-size: 15px;
  }
`;

const StartBtn = styled.div`
  width: 80%;
  height: 70px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    to bottom,
    #cee166,
    ${(props) => props.theme.color.green}
  );
  color: white;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;
  cursor: pointer;
  @media ${(props) => props.theme.IphoneX} {
    width: 80%;
    font-size: 18px;
  }
`;

const wrapperVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

const titleVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

function Home() {
  const navigate = useNavigate();
  const startBtnClick = () => {
    navigate("/test");
  };
  return (
    <Wrapper
      variants={wrapperVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Title variants={titleVariants} initial="initial" animate="animate">
        <span>
          일상 속 <span>싱그러움</span>을 찾아서,
        </span>
        <span>초록 MATE</span>
        <span>테스트</span>
      </Title>
      <MainImg />
      <Hashtag>
        <span>#반려식물</span>
        <span>#공기정화</span>
        <span>#플랜테리어</span>
        <span>#힐링</span>
      </Hashtag>
      <StartBtn onClick={startBtnClick}>테스트 시작하기</StartBtn>
      <Footer />
    </Wrapper>
  );
}

export default Home;
