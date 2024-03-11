import { Button } from "@mui/material";
import ButtonsGroup from "./ButtonsGroup";
import SecurityPrivacy from "./SecurityPrivacy";
import "./FrameComponent.css";

const FrameComponent = () => {
  return (
    <section className="help-section-container-wrapper">
      <div className="help-section-container">
        <div className="privacy-zone-frame">
          <div className="product-features-integrations1">
            <div className="tag-wrapper">
              <div className="tag5">
                <div className="version-20-is4">Boost your productivity</div>
              </div>
            </div>
            <h1 className="h25">A more effective way to track progress</h1>
            <div className="body-wrapper">
              <h3 className="body6">
                Effortlessly turn your ideas into a fully functional,
                responsive, no-code SaaS website in just minutes with the set of
                free components for Framer.
              </h3>
            </div>
          </div>
        </div>
        <div className="icons-collection">
          <div className="frame-logo">
            <div className="pricing-card">
              <div className="text-ellipse">
                <b className="subtitle">Free</b>
              </div>
              <div className="body-content">
                <ButtonsGroup price="$0" />
                <Button
                  className="buttons4"
                  disableElevation={true}
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "16",
                    background: "#000",
                    borderRadius: "10px",
                    "&:hover": { background: "#000" },
                    height: 39,
                  }}
                >
                  Get started for free
                </Button>
              </div>
              <div className="resources-group">
                <div className="security-part">
                  <img
                    className="icons6"
                    loading="lazy"
                    alt=""
                    src="/icons-10.svg"
                  />
                  <img
                    className="icons7"
                    loading="lazy"
                    alt=""
                    src="/icons-10.svg"
                  />
                  <img
                    className="icons8"
                    loading="lazy"
                    alt=""
                    src="/icons-10.svg"
                  />
                  <img
                    className="icons9"
                    loading="lazy"
                    alt=""
                    src="/icons-10.svg"
                  />
                </div>
                <div className="legal-notice">
                  <div className="footer-l-container">
                    <div className="up-to-5">Up to 5 project members</div>
                    <div className="unlimited-tasks-and">
                      Unlimited tasks and projects
                    </div>
                    <div className="gb-storage">2GB storage</div>
                    <div className="integrations1">Integrations</div>
                  </div>
                </div>
              </div>
              <div className="testimonial-text">
                <img
                  className="icons10"
                  loading="lazy"
                  alt=""
                  src="/icons-10.svg"
                />
                <div className="updates-tab">
                  <div className="basic-support">Basic support</div>
                </div>
              </div>
            </div>
          </div>
          <div className="pricing-card1">
            <div className="company-logo">
              <div className="about-page">
                <div className="text-line-quote">
                  <div className="frame-tag-version">
                    <b className="subtitle1">Pro</b>
                  </div>
                  <div className="tag6">
                    <div className="version-20-is5">Most Popular</div>
                  </div>
                </div>
              </div>
              <ButtonsGroup
                price="$9"
                propColor="#fff"
                propBackgroundColor="#999"
                propColor1="#999"
              />
            </div>
            <Button
              className="buttons5"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#000",
                fontSize: "16",
                background: "#fff",
                borderRadius: "10px",
                "&:hover": { background: "#fff" },
                height: 39,
              }}
            >
              Sign up now
            </Button>
            <div className="frame-group1">
              <div className="testimonial-text1">
                <img
                  className="icons11"
                  loading="lazy"
                  alt=""
                  src="/icons-15.svg"
                />
                <div className="tag-version">
                  <div className="up-to-50">Up to 50 project members</div>
                </div>
              </div>
              <div className="security-privacy1">
                <img
                  className="icons12"
                  loading="lazy"
                  alt=""
                  src="/icons-15.svg"
                />
                <div className="unlimited-tasks-and-projects-wrapper">
                  <div className="unlimited-tasks-and1">
                    Unlimited tasks and projects
                  </div>
                </div>
              </div>
              <div className="testimonial-text2">
                <img
                  className="icons13"
                  loading="lazy"
                  alt=""
                  src="/icons-15.svg"
                />
                <div className="gb-storage-wrapper">
                  <div className="gb-storage1">50GB storage</div>
                </div>
              </div>
              <div className="icons-container">
                <img
                  className="icons14"
                  loading="lazy"
                  alt=""
                  src="/icons-15.svg"
                />
                <div className="design-elements1">
                  <div className="integrations2">Integrations</div>
                </div>
              </div>
              <div className="testimonial-text3">
                <img
                  className="icons15"
                  loading="lazy"
                  alt=""
                  src="/icons-15.svg"
                />
                <div className="priority-support-wrapper">
                  <div className="priority-support">Priority support</div>
                </div>
              </div>
              <div className="security-privacy2">
                <img className="icons16" alt="" src="/icons-15.svg" />
                <div className="advanced-support-wrapper">
                  <div className="advanced-support">Advanced support</div>
                </div>
              </div>
              <div className="security-privacy3">
                <img className="icons17" alt="" src="/icons-15.svg" />
                <div className="export-support-wrapper">
                  <div className="export-support">Export support</div>
                </div>
              </div>
            </div>
          </div>
          <div className="pricing-card2">
            <b className="subtitle2">Business</b>
            <ButtonsGroup
              price="$19"
              propColor="#000"
              propBackgroundColor="#fff"
              propColor1="#6f6c90"
            />
            <Button
              className="buttons6"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#000",
                borderRadius: "10px",
                "&:hover": { background: "#000" },
                height: 39,
              }}
            >
              Sign up now
            </Button>
            <div className="resources-examples-guides-docs">
              <div className="security-privacy4">
                <img className="icons18" alt="" src="/icons-10.svg" />
                <div className="up-to-5-project-members-wrapper">
                  <div className="up-to-51">Up to 5 project members</div>
                </div>
              </div>
              <div className="security-privacy5">
                <img className="icons19" alt="" src="/icons-10.svg" />
                <div className="unlimited-tasks-and-projects-container">
                  <div className="unlimited-tasks-and2">
                    Unlimited tasks and projects
                  </div>
                </div>
              </div>
              <div className="security-privacy6">
                <img className="icons20" alt="" src="/icons-10.svg" />
                <div className="gb-storage-container">
                  <div className="gb-storage2">200GB storage</div>
                </div>
              </div>
              <SecurityPrivacy
                integrations="Integrations"
                dedicatedAccountManager="Dedicated account manager"
              />
              <div className="security-privacy7">
                <img className="icons21" alt="" src="/icons-10.svg" />
                <div className="custom-fields-wrapper">
                  <div className="custom-fields">Custom fields</div>
                </div>
              </div>
              <div className="security-privacy8">
                <img className="icons22" alt="" src="/icons-10.svg" />
                <div className="advanced-analytics-wrapper">
                  <div className="advanced-analytics">Advanced analytics</div>
                </div>
              </div>
              <div className="security-privacy9">
                <img className="icons23" alt="" src="/icons-10.svg" />
                <div className="export-capabilities-wrapper">
                  <div className="export-capabilities">Export capabilities</div>
                </div>
              </div>
              <SecurityPrivacy
                integrations="API access"
                dedicatedAccountManager="Advanced security features"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
