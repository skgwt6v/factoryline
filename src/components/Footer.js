import React from 'react';
import config from '../../config';
export default function Footer() {
  return (
    <footer id="footer">
      {/* <ul className="icons">
        {config.socialLinks.map(social => {
          const { style, icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon ${style} ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul> */}
      <ul className="copyright">
        <li>
          &copy; 2018 愛媛県縫製品工業組合 All rights reserved.
          <br />
          <br />
          ＊えひめ中小企業応援ファンド活力創出産業育成事業の助成を受けたプロジェクトです。
        </li>
      </ul>
      <ul className="copyright"></ul>
    </footer>
  );
}
