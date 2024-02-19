import { useState } from "react";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Logo from "../components/Logo/Logo";
import { Discount, InitialView, PaymentView } from "../containers";
import { BaseLayout, LeftSlide, RightSlide } from "../layouts";
import { checkoutPageView } from "../constants/checkout";
import { Link } from "react-router-dom";

export const Checkout = () => {
  const [view, setView] = useState(checkoutPageView.INITIAL);

  const toggleView = (view) => {
    setView(view);
  };

  const breadcumbItems = [
    {
      id: 1,
      title: "Shipping",
      active: false,
      onClick: () => toggleView(checkoutPageView.INITIAL),
    },
    { id: 2, title: "Payment", active: view === checkoutPageView.PAYMENT },
  ];

  return (
    <BaseLayout>
      <div className="mobile-data w-100 d-block d-lg-none">
        <Logo className="m-auto d-block" />
        <Breadcrumb items={breadcumbItems} />
      </div>
      <div className="d-flex flex-wrap w-100">
        <RightSlide>
          <Discount />
        </RightSlide>
        <LeftSlide>
          <Logo />
          <Breadcrumb items={breadcumbItems} />
          {view === checkoutPageView.INITIAL && (
            <InitialView toggleView={toggleView} />
          )}
          {view === checkoutPageView.PAYMENT && (
            <PaymentView toggleView={toggleView} />
          )}
          <div className="checkout-footer-link w-100 d-block">
            <Link href="#">Refund policy</Link>
            <Link href="#">Shipping policy</Link>
            <Link href="#">Privacy policy </Link>
            <Link href="#">Terms of service</Link>
          </div>
        </LeftSlide>
      </div>
    </BaseLayout>
  );
};
