import { Breadcrumb, Logo } from "../../components";
import CheckoutContainer from "./containers/CheckoutContainer/CheckoutContainer";
import DiscountContainer from "./containers/DiscountContainer/DiscountContainer";

const breadcumbItems = [
  {
    id: 1,
    title: "Shipping",
    active: false,
  },
  { id: 2, title: "Payment", active: true },
];

const Checkout = () => {
  return (
    <div id="wrapper w-100 d-block">
      <div className="container small-container">
        <div className="mobile-data w-100 d-block d-lg-none">
          <Logo className="m-auto d-block" />
          <Breadcrumb items={breadcumbItems} />
        </div>
        <div className="d-flex flex-wrap w-100">
          <div className="right-side flex-auto order-lg-1">
            <DiscountContainer />
          </div>
          <div className="left-side flex-auto order-lg-0">
            <Logo />
            <Breadcrumb items={breadcumbItems} />
            <CheckoutContainer />
            <div className="checkout-footer-link w-100 d-block">
              <a href="#">Refund policy</a>
              <a href="#">Shipping policy</a>
              <a href="#">Privacy policy </a>
              <a href="#">Terms of service</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
