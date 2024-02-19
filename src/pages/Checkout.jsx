import MobileData from "../components/MobileData/MobileData";
import { Discount, InitialView, PaymentView } from "../containers";
import { BaseLayout, LeftSlide, RightSlide } from "../layouts";

export const Checkout = () => {
  return (
    <BaseLayout>
      <MobileData />
      <div class="d-flex flex-wrap w-100">
        <RightSlide>
          <Discount />
        </RightSlide>
        <LeftSlide>
          <InitialView />
          <PaymentView />
        </LeftSlide>
      </div>
    </BaseLayout>
  );
};
