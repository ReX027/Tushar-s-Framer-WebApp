import { useMemo } from "react";
import "./ButtonsGroup.css";

const ButtonsGroup = ({
  price,
  propColor,
  propBackgroundColor,
  propColor1,
}) => {
  const priceStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const spacerStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const monthlyStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div className="buttons-group">
      <b className="price" style={priceStyle}>
        {price}
      </b>
      <div className="emojistar-icon">
        <div className="helix-shape">
          <div className="footer-layout">
            <div className="spacer" style={spacerStyle} />
          </div>
          <b className="monthly" style={monthlyStyle}>
            /monthly
          </b>
        </div>
      </div>
    </div>
  );
};

export default ButtonsGroup;
