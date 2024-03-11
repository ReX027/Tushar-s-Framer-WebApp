import "./SecurityPrivacy.css";

const SecurityPrivacy = ({ integrations, dedicatedAccountManager }) => {
  return (
    <div className="security-privacy">
      <div className="icons-parent">
        <img className="icons4" alt="" src="/icons-10.svg" />
        <div className="design-elements">
          <div className="integrations">{integrations}</div>
        </div>
      </div>
      <div className="icons-group">
        <img className="icons5" alt="" src="/icons-10.svg" />
        <div className="dedicated-account-manager-wrapper">
          <div className="dedicated-account-manager">
            {dedicatedAccountManager}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityPrivacy;
