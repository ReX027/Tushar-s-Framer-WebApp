import EllipseAvatar from "./EllipseAvatar";
import "./Product.css";

const Product = () => {
  return (
    <div className="product2">
      <div className="product-child" />
      <div className="frame-parent5">
        <div className="tag-parent1">
          <div className="tag5">
            <div className="version-20-is6">Boost your productivity</div>
          </div>
          <div className="h2-parent2">
            <b className="h26">A more effective way to track progress</b>
            <div className="body8">
              Effortlessly turn your ideas into a fully functional, responsive,
              no-code SaaS website in just minutes with the set of free
              components for Framer.
            </div>
          </div>
        </div>
        <img
          className="product-image-icon"
          alt=""
          src="/product-image@2x.png"
        />
        <div className="grid">
          <EllipseAvatar
            icons="/icons-2.svg"
            integrationEcosystem="Integration ecosystem"
            trackYourProgressAndMotiv="Track your progress and motivate"
            yourEffortsEveryday="your efforts everyday."
          />
          <EllipseAvatar
            icons="/icons-6.svg"
            integrationEcosystem="Secure data encryption"
            trackYourProgressAndMotiv="Ensure your data’s safety with top-"
            yourEffortsEveryday="tier encryption."
            propAlignSelf="stretch"
          />
          <EllipseAvatar
            icons="/icons-4.svg"
            integrationEcosystem="Goal setting and tracking"
            trackYourProgressAndMotiv="Set and track goals with"
            yourEffortsEveryday="manageable task breakdowns."
            propAlignSelf="stretch"
          />
          <EllipseAvatar
            icons="/icons-8.svg"
            integrationEcosystem="Customizable notifications"
            trackYourProgressAndMotiv="Get alerts on tasks and deadlines"
            yourEffortsEveryday="that matter most."
            propAlignSelf="stretch"
          />
        </div>
      </div>
      <img className="torus-1-icon" alt="" src="/torus-1@2x.png" />
      <img className="pyramid-1-icon" alt="" src="/pyramid-1@2x.png" />
    </div>
  );
};

export default Product;
