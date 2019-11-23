import React from 'react';

import Layout from '../components/Layout';
import ProductsLists from '../components/ProductsLists';
import ItemListsData from '../data/ItemListsData';


const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>PRODUCTS</h2>
        <p>
          愛媛県内の縫製工場による衣類のプロトタイピングのコレクションです。
        </p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <div className="box">
            <div className="row gtr-50 gtr-uniform">
              <ProductsLists data={ItemListsData}/>
            </div>
          </div>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
