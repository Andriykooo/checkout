import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Logo from "../components/Logo/Logo";
import { Discount, InitialView, PaymentView } from "../containers";
import { BaseLayout, LeftSlide, RightSlide } from "../layouts";

export const Checkout = () => {
  return (
    <BaseLayout>
      <div class="mobile-data w-100 d-block d-lg-none">
        <Logo className="m-auto d-block" />
        <Breadcrumb />
      </div>
      <div class="d-flex flex-wrap w-100">
        <RightSlide>
          <Discount />
        </RightSlide>
        <LeftSlide>
          <Logo />
          <Breadcrumb />
          <InitialView />
          <PaymentView />
        </LeftSlide>
      </div>
    </BaseLayout>
  );
};
