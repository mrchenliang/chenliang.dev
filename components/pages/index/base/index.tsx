import { Box, VStack } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { FC } from "react";
import IArticle from "types/article";
import IProject from "types/project";
import IPublication from "types/publication";

const Jumbotron = dynamic(
  import(
    /* webpackChunkName: "Jumbotron" */ "components/pages/index/base/jumbotron"
  )
);
const Articles = dynamic(
  import(/* webpackChunkName: "Articles" */ "components/layouts/articles")
);
const Projects = dynamic(
  import(
    /* webpackChunkName: "Projects" */ "components/pages/index/base/projects"
  )
);

interface Props {
  articles: (IArticle & IPublication)[];
  publications: any;
  projects: IProject[];
}

const Page: FC<Props> = ({
  articles = [],
  publications = [],
  projects = [],
}) => {
  const allArticlesAndPublications = [...articles, ...publications];

  const sortedAllArticlesAndPublications: (IArticle &
    IPublication)[] = allArticlesAndPublications.sort(
    (a: IArticle & IPublication, b: IArticle & IPublication) => {
      return (
        Number(new Date(b.frontMatter.date)) -
        Number(new Date(a.frontMatter.date))
      );
    }
  );

  return (
    <>
      <Box as="section">
        <Jumbotron />
      </Box>
      <Box>
        <Box maxW="2xl" mx="auto" px={4} py={8}>
          <VStack spacing={32} order={[2, 2, 2, 1]} align="left">
            <Box as="section">
              <Articles
                articles={sortedAllArticlesAndPublications.slice(0, 10)}
              />
            </Box>
            <Box as="section">
              <Projects projects={projects.slice(0, 10)} />
            </Box>
          </VStack>
        </Box>
      </Box>
    </>
  );
};

export default Page;
