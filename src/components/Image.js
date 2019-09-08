import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

// 画像ファイルパスをプロパティに取るようなコンポーネントを定義
export default ({ filename,alt }) => (
  // ページじゃないコンポーネントでもGraphQLが使えるように
  // StaticQueryタグを使う
  <StaticQuery
    // GraphQLのクエリ引数には何も指定しない！
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                sizes(maxWidth: 800) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    `}
    // 全画像情報がdataに代入されている
        render={(data) => {
      const image = data.images.edges.find(n =>
        n.node.relativePath.includes(filename)
      )

      if (!image) {
        return null
      }

      const imageSizes = image.node.childImageSharp.sizes
      return (
        <Img
          alt={alt}
          sizes={imageSizes}
        />
      );
    }}
  />
);
