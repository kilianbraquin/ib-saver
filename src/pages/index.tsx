import {
  HomepageTemplate,
  HomepageTemplateProps,
} from "@/components/templates/HomepageTemplate";
import { getHomePage } from "@/lib/directus/services";
import { GetStaticProps, NextPage } from "next";

const HomePage: NextPage<HomepageTemplateProps> = (props) => {
  return <HomepageTemplate {...props} />;
};

export const getStaticProps: GetStaticProps<HomepageTemplateProps> = async (
  ctx
) => {
  const { title, introduction } = await getHomePage();

  return {
    props: {
      title,
      introduction,
    },
  };
};

export default HomePage;
