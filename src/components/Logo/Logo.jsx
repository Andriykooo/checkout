import classNames from "classnames";
import LogoBlue from "../../assets/images/logo-blue.png";

const Logo = ({ className }) => {
  return (
    <div className="checkout-logo w-100 d-block">
      <img
        src={LogoBlue}
        alt="logo"
        className={classNames(className)}
      />
    </div>
  );
};

export default Logo;
