import FrameComponent1 from "../components/FrameComponent1";
import GroupComponent from "../components/GroupComponent";
import LogoTicker from "../components/LogoTicker";
import Product from "../components/Product";
import Resources from "../components/Resources";
import FrameComponent from "../components/FrameComponent";
import TagFrame from "../components/TagFrame";
import FooterFooterLProductFeatur from "../components/FooterFooterLProductFeatur";
import SignUp from "../components/SignUp";
import Footer from "../components/Footer";
import "./Desktop.css";

const Desktop = () => {
  return (
    <div className="desktop">
      <FrameComponent1 />
      <GroupComponent />
      <LogoTicker />
      <Product />
      <Resources />
      <FrameComponent />
      <section className="testimonial-section">
        <div className="body-frame">
          <div className="tag">
            <div className="tag1">
              <div className="version-20-is">Testimonials</div>
            </div>
          </div>
          <h1 className="h2">What our users say</h1>
        </div>
      </section>
      <section className="frame-group">
        <TagFrame />
        <FooterFooterLProductFeatur />
        <div className="signup" />
      </section>
      <SignUp />
      <Footer />
    </div>
  );
};

export default Desktop;
