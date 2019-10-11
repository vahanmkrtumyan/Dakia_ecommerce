import React from "react";
import Head from "next/head";
import "../assets/styles/homepage.scss";
import Layout from "../components/layout";

const Home = () => (
  <div>
    <Head>
      <title>Դակիա</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <div className="homepage">
        <h1>Բարի գալուստ</h1>
        <div className="directory-menu">
          <div className="menu-item">
            <div className="content">
              <div className="title">Էլեկտրաէներգիա</div>
              <span className="subtitle">Գնել</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <div className="title">Բարձավոլտ</div>
              <span className="subtitle">Գնել</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <div className="title">Արդյունաբերական</div>
              <span className="subtitle">Գնել</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <div className="title">Հեռահաղորդակցություն</div>
              <span className="subtitle">Գնել</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <div className="title">Տնային տնտեսություն</div>
              <span className="subtitle">Գնել</span>
            </div>
          </div>
        </div>
      </div>
      );
      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .card {
          padding: 18px 18px 24px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
      `}</style>
    </Layout>
  </div>
);

export default Home;
