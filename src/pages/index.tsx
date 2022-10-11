import {
  HomepageTemplate,
  HomepageTemplateProps,
} from "@/components/templates/HomepageTemplate";
import { getHomePage } from "@/lib/directus/services";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";

const HomePage: NextPage<HomepageTemplateProps> = (props) => {
  return (
    <>
      <NextSeo
        title="IB Saver - Téléchargement de médias Twitter"
        description="Recherchez vos tweets préférés et téléchargez leurs médias (images, vidéos) en qualité optimale"
        canonical="https://www.ibsaver.com"
        openGraph={{
          title: "IB Saver - Téléchargement de médias Twitter",
          description:
            "Recherchez vos tweets préférés et téléchargez leurs médias (images, vidéos) en qualité optimale",
          url: "https://www.ibsaver.com",
          site_name: "IB Saver",
          type: "website",
          locale: "fr_FR",
          images: [
            {
              url: "https://www.ibsaver.com/images/ibsaver_illu.png",
              width: 1200,
              height: 630,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
          ],
        }}
        twitter={{
          site: "@ib_saver",
          cardType: "summary_large_image",
        }}
      />
      <HomepageTemplate {...props} />
    </>
  );
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
