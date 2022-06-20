import styled from "styled-components";
import Footer from "../../components/organisms/Footer";
// import HomeModal from "../../components/organisms/HomeModal";

export const HomeWrapper = styled.div`
  /* display: flex; */
  /* justify-content: center; */
  padding-top: 5rem;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <Footer />
      {/* <HomeModal /> */}
    </HomeWrapper>
  );
};

export default Home;
