import IGHeader from "components/IGHeader";
import IGContainer from "components/IGContainer";
import IGUser from "components/IGUser";

import IGStory from "./components/IG story";

const Home: React.FC = () => {
  return (
    <>
      <IGHeader />
      <IGContainer>
        <div className="flex lg:justify-center">
          {/* home left */}
          <div className="w-full lg:w-[600px]">
            {/* IG story */}
            <IGStory />
          </div>
          {/* home right */}
          <div className="hidden lg:block lg:w-[424px]">
            <IGUser
              avatar="/images/avatars/a3.png"
              account="gogogo_0214"
              location="Taipei"
              showFollow={true}
              isFollowing={true}
            />
          </div>
        </div>
      </IGContainer>
    </>
  );
};

export default Home;
