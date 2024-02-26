import { useState } from "react";
import { countries } from "../../../../constants/countries";
import { checkoutPageView } from "../../../../constants/checkout";
import InitialView from "../../components/InitialView/InitialView";
import PaymentView from "../../components/PaymentView/PaymentView";

const validateEmailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

const CheckoutContainer = () => {
  const [view, setView] = useState(checkoutPageView.INITIAL);
  const [formData, setFormData] = useState({
    email: "",
    country: countries[0].value,
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
  });

  const validateForm = () => {
    if (!validateEmailRegex.test(formData.email)) {
      return false;
    }

    if (!formData.lastName) {
      return false;
    }

    if (!formData.address) {
      return false;
    }

    if (!formData.city) {
      return false;
    }

    if (!formData.state) {
      return false;
    }

    if (!formData.zipCode) {
      return false;
    }

    if (!formData.phone) {
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData({ ...formData, [id]: value });
  };

  const toggleView = (view) => {
    setView(view);
  };

  return (
    <>
      {view === checkoutPageView.INITIAL && (
        <InitialView
          toggleView={() => toggleView(checkoutPageView.PAYMENT)}
          formData={formData}
          isValid={validateForm(formData)}
          handleChange={handleChange}
        />
      )}
      {view === checkoutPageView.PAYMENT && (
        <PaymentView toggleView={() => toggleView(checkoutPageView.INITIAL)} />
      )}
    </>
  );
};

export default CheckoutContainer;
