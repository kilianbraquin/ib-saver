import { NextPage } from "next";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

const DynamicBookmarksTemplate = dynamic(
  () =>
    import("@/components/BookmarksTemplate").then(
      ({ BookmarksTemplate }) => BookmarksTemplate
    ),
  {
    ssr: false,
  }
);
const HomePage: NextPage = (props) => {
  return (
    <>
      <NextSeo
        title="IB Saver - Téléchargement de médias Twitter"
        description="Recherchez vos tweets préférés et téléchargez leurs médias (images, vidéos) en qualité optimale"
        canonical="https://www.ibsaver.com"
        noindex={true}
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
              type: "image/png",
            },
          ],
        }}
        twitter={{
          site: "@ib_saver",
          cardType: "summary_large_image",
        }}
      />
      <DynamicBookmarksTemplate {...props} />
    </>
  );
};

export default HomePage;
