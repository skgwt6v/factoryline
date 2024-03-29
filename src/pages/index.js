import React from 'react';

import Layout from '../components/Layout';
import { Link } from 'gatsby';

import Scroll from '../components/Scroll';

import transparent from '../assets/images/transparent.png';
import logo from '../assets/images/logo.svg';
import config from '../../config';
import ItemLists from '../components/ItemLists';
import ItemListsData from '../data/ItemListsData';

import PhotoGallery from '../components/PhotoGallery';

import pic1 from '../assets/images/web_img_01.png';
import pic2 from '../assets/images/web_img_02.png';
import pic3 from '../assets/images/web_img_03.png';
import pic4 from '../assets/images/web_img_04.png';


const HighLight = ({children}) => {
  return ( 
    <span className="highlight">{children}</span>
  )
}

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <div className="button primary fit">愛媛県縫製品工業組合</div>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style5 special">
      <div className="inner">
        <header className="major">
          <h2>「FACTORY LINE」とは</h2>
          <p>
            愛媛県各所に広がって点在する縫製工場が、それぞれの得意技術を生かし衣服のプロトタイピングをするプロジェクトです。
            <br />
            ニューメソドロジーの概念のもと、時には『作る側』の視点にも立ちながらサンプルを作成し、
            <br />
              その後の販売に繋げていく事を目的としています。
          </p>
        </header>
        {/* <ul className="icons major">
          <li>
            <span className="icon fa-gem major style1">
              <span className="label">Lorem</span>
            </span>
          </li>
          <li>
            <span className="icon fa-heart major style2">
              <span className="label">Ipsum</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-code major style3">
              <span className="label">Dolor</span>
            </span>
          </li>
        </ul> */}
      </div>
    </section>

    <section id="two" className="wrapper alt style5">
      <section className="spotlight">
        <div className="content image">
          <img src={pic1} alt="pic1" />
        </div>
        <div className="content">
          <h2>かつての日本の繊維産業はすごかった。</h2>
          <p>
            日本の繊維産業は、1950 年代～ 70
            年代にかけて、糸や生地を大量に生産・輸出して外貨を稼ぎ、80
            年代になると国内のアパレル産業も勃興し、日本中の縫製事業者が増産に追われた。
            バブルも重なった90 年代には国内衣料品の市場規模は15
            兆円に達し、国産比率は
            <HighLight>50％</HighLight>あった。
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="content image">
          <img src={pic2} alt="pic2" />
        </div>
        <div className="content">
          <h2>加速する海外移管</h2>
          <p>
            しかし、その後はコスト低減のため、縫製工程などの海外への移管が進み、
            海外で大量生産した商品を安価で販売するSPA（製造小売り）が成長した。
            その結果、アパレル製品の供給では、輸入の増加に歯止めがかからず、2017
            年の時点で
            <HighLight>国産比率は3%</HighLight> まで低下した。
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="content image">
          <img src={pic3} alt="pic3" />
        </div>
        <div className="content">
          <h2>
            愛媛県で
            <br />
            共同事業の確立
          </h2>
          <p>
            このような背景の中、<HighLight>愛媛県縫製品工業組合</HighLight>
            でも、業界を活性化させる新たな共同事業の確立
            が迫られている。組合員は、製品を作ることは非常に得意であるが、デザインや販売において
            大手アパレルメーカーとの力の差が大きい。
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="content image">
          <img src={pic4} alt="pic4" />
        </div>
        <div className="content">
          <h2>
            それぞれの個性を生かした
            <br />
            新しい挑戦
          </h2>
          <p>
            組合役員を中心とした業界側委員と外部の専門家からなる専門家委員によって委員会を構成し、
            商品開発から販売までの事業について検討を行った。それぞれ規模や得意技術の異なる工場が
            個性を保ちつつ
            <HighLight>「作る側」の視点にも立った商品開発</HighLight>
            をしていくプロジェクトを立ち上げるに至った。
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style5 special">
      <div className="inner">
        <header className="major">
          <h2>PRODUCTS</h2>
          <p>
            愛媛県内の縫製工場による衣類のプロトタイピングのコレクションです。
          </p>
        </header>
        <div className="box">
          <div className="row gtr-50 gtr-uniform">
            <ItemLists data={ItemListsData} />
          </div>
        </div>
        <ul className="actions stacked">
          <li>
            <div className="button fit">
              <Link to="/Products">商品一覧へ</Link>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section id="three" className="wrapper style5 special">
      <div className="inner">
        <header className="major">
          <h2>Gallery</h2>
        </header>
        <div className="box"><PhotoGallery />
          <div className="row gtr-50 gtr-uniform">
            
          </div>
        </div>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>「FACTORY LINE」とは</h2>
          <p>
            愛媛県内の縫製工場による衣類のプロトタイピングのコレクションです。
            素材を地域で開発したり、テクノロジーを部分的に導入することで
            大きな投資のいらない小さなイノベーションを目指しています。
          </p>
          {/*<ul className="actions stacked">*/}
          {/*  <li>*/}
          {/*    <a href="/#" className="button">*/}
          {/*      Contact Us*/}
          {/*    </a>*/}
          {/*  </li>*/}
          {/*</ul>*/}
        </header>
        <ul className="actions stacked">
          <li>
            <img src={logo} alt="logo" />
          </li>
        </ul>
      </div>
    </section>
    
  </Layout>
);

export default IndexPage;
