import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Badge from "./components/Badge/Badge.jsx"
import Banner, { BannerTitle, BannerDescription } from "./components/Banner/Banner.jsx"

function App() {
  return (
    <>
      <h1 className="heading">Badges</h1>
        <div style={{ display: "flex", gap: "10px", padding: "10px" }}>
          <span className="category">SQUARE</span>
          <Badge color="gray" shape="square">Badge</Badge>
          <Badge color="red" shape="square">Badge</Badge>
          <Badge color="yellow" shape="square">Badge</Badge>
          <Badge color="green" shape="square">Badge</Badge>
          <Badge color="blue" shape="square">Badge</Badge>
          <Badge color="indigo" shape="square">Badge</Badge>
          <Badge color="purple" shape="square">Badge</Badge>
          <Badge color="pink" shape="square">Badge</Badge>
        </div>
        <div style={{ display: "flex", gap: "10px", padding: "10px" }}>
          <span className="category">PILL</span>
          <Badge color="gray" shape="pill">Badge</Badge>
          <Badge color="red" shape="pill">Badge</Badge>
          <Badge color="yellow" shape="pill">Badge</Badge>
          <Badge color="green" shape="pill">Badge</Badge>
          <Badge color="blue" shape="pill">Badge</Badge>
          <Badge color="indigo" shape="pill">Badge</Badge>
          <Badge color="purple" shape="pill">Badge</Badge>
          <Badge color="pink" shape="pill">Badge</Badge>
        </div>

      <h1 className="heading">Banners</h1>
      <div style={{ display: "flex", alignItems: "center", justifyContent: 'space-between'}}>
        <span className="category">Success</span>
        <Banner status="success">
          <BannerTitle className="banner-title">Congratulations!</BannerTitle>
          <BannerDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit.</BannerDescription>
        </Banner>
      </div>

      <div style={{ display: "flex", alignItems: "center"}}>
        <span className="category">Warning</span>
        <Banner status="warning">
          <BannerTitle className="banner-title">Attention</BannerTitle>
          <BannerDescription>Quid pro quo</BannerDescription>
        </Banner>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: 'space-between'}}>
        <span className="category">Error</span>
        <Banner status="error">
          <BannerTitle className="banner-title">There is a problem with your application.</BannerTitle>
          <BannerDescription>Cerberus est in via. Cerberus dormit. Cerberus est canis.</BannerDescription>
        </Banner>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: 'space-between'}}>
        <span className="category">Neutral</span>
        <Banner status="neutral">
          <BannerTitle className="banner-title">Update available</BannerTitle>
          <BannerDescription>Carpe diem</BannerDescription>
        </Banner>
      </div>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
