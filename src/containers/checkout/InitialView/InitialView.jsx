import { useState } from "react";
import { FormControl } from "../../../components";
import { checkoutPageView } from "../../../constants/checkout";

const validateEmailRegex = /^\S+@\S+\.\S+$/;

const InitialView = ({ toggleView }) => {
  const [formData, setFormData] = useState({
    email: "",
    country: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
  });

  const handleToggleView = () => {
    toggleView(checkoutPageView.PAYMENT);
  };

  const handleChnage = (e) => {
    const { id, value } = e.target;

    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    if (validateEmailRegex.test(formData.email)) {
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

  const isValid = validateForm();

  return (
    <>
      <div class="left-top-row w-100 d-flex flex-wrap justify-content-between">
        <div class="checkout-title flex-auto">Contact</div>
        <div class="email-box w-100 d-block">
          <FormControl
            type="email"
            id="email"
            placeholder="Email"
            className="checkout"
            onChange={handleChnage}
          />
          <div class="checkbox-row w-100 d-block">
            <label class="control control-checkbox">
              Email me with news and offers
              <input type="checkbox" />
              <div class="control-indicator"></div>
            </label>
          </div>
        </div>
      </div>
      <div class="checkout-form-section w-100 d-block">
        <div class="checkout-title flex-auto">Shipping address</div>
        <div class="checkout-form w-100 d-block">
          <div class="row gx-3">
            <div class="col-12">
              <div class="form-group">
                <select id="country" class="form-select checkout">
                  <option
                    data-code="US"
                    data-pure-numeric-postal-code="false"
                    value="United States"
                  >
                    United States
                  </option>
                </select>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <FormControl
                  type="text"
                  id="firstName"
                  placeholder="First name (optional)"
                  className="checkout"
                  onChange={handleChnage}
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <FormControl
                  type="text"
                  id="lastName"
                  placeholder="Last name"
                  className="checkout"
                  onChange={handleChnage}
                />
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <FormControl
                  type="text"
                  id="address"
                  placeholder="Address"
                  className="checkout"
                  onChange={handleChnage}
                />
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <FormControl
                  type="text"
                  id="apartment"
                  placeholder="Apartment, suite, etc. (optional)"
                  className="checkout"
                  onChange={handleChnage}
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <FormControl
                  type="text"
                  id="city"
                  placeholder="City"
                  className="checkout"
                  onChange={handleChnage}
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <select id="state" class="form-select checkout">
                  <option>State</option>
                  <option data-alternate-values='["Alabama"]' value="AL">
                    Alabama
                  </option>
                  <option data-alternate-values='["Alaska"]' value="AK">
                    Alaska
                  </option>
                  <option data-alternate-values='["Arizona"]' value="AZ">
                    Arizona
                  </option>
                  <option data-alternate-values='["Arkansas"]' value="AR">
                    Arkansas
                  </option>
                  <option data-alternate-values='["California"]' value="CA">
                    California
                  </option>
                  <option data-alternate-values='["Colorado"]' value="CO">
                    Colorado
                  </option>
                  <option data-alternate-values='["Connecticut"]' value="CT">
                    Connecticut
                  </option>
                  <option data-alternate-values='["Delaware"]' value="DE">
                    Delaware
                  </option>
                  <option data-alternate-values='["Florida"]' value="FL">
                    Florida
                  </option>
                  <option data-alternate-values='["Georgia"]' value="GA">
                    Georgia
                  </option>
                  <option data-alternate-values='["Hawaii"]' value="HI">
                    Hawaii
                  </option>
                  <option data-alternate-values='["Idaho"]' value="ID">
                    Idaho
                  </option>
                  <option data-alternate-values='["Illinois"]' value="IL">
                    Illinois
                  </option>
                  <option data-alternate-values='["Indiana"]' value="IN">
                    Indiana
                  </option>
                  <option data-alternate-values='["Iowa"]' value="IA">
                    Iowa
                  </option>
                  <option data-alternate-values='["Kansas"]' value="KS">
                    Kansas
                  </option>
                  <option data-alternate-values='["Kentucky"]' value="KY">
                    Kentucky
                  </option>
                  <option data-alternate-values='["Louisiana"]' value="LA">
                    Louisiana
                  </option>
                  <option data-alternate-values='["Maine"]' value="ME">
                    Maine
                  </option>
                  <option data-alternate-values='["Maryland"]' value="MD">
                    Maryland
                  </option>
                  <option data-alternate-values='["Massachusetts"]' value="MA">
                    Massachusetts
                  </option>
                  <option data-alternate-values='["Michigan"]' value="MI">
                    Michigan
                  </option>
                  <option data-alternate-values='["Minnesota"]' value="MN">
                    Minnesota
                  </option>
                  <option data-alternate-values='["Mississippi"]' value="MS">
                    Mississippi
                  </option>
                  <option data-alternate-values='["Missouri"]' value="MO">
                    Missouri
                  </option>
                  <option data-alternate-values='["Montana"]' value="MT">
                    Montana
                  </option>
                  <option data-alternate-values='["Nebraska"]' value="NE">
                    Nebraska
                  </option>
                  <option data-alternate-values='["Nevada"]' value="NV">
                    Nevada
                  </option>
                  <option data-alternate-values='["New Hampshire"]' value="NH">
                    New Hampshire
                  </option>
                  <option data-alternate-values='["New Jersey"]' value="NJ">
                    New Jersey
                  </option>
                  <option data-alternate-values='["New Mexico"]' value="NM">
                    New Mexico
                  </option>
                  <option data-alternate-values='["New York"]' value="NY">
                    New York
                  </option>
                  <option data-alternate-values='["North Carolina"]' value="NC">
                    North Carolina
                  </option>
                  <option data-alternate-values='["North Dakota"]' value="ND">
                    North Dakota
                  </option>
                  <option data-alternate-values='["Ohio"]' value="OH">
                    Ohio
                  </option>
                  <option data-alternate-values='["Oklahoma"]' value="OK">
                    Oklahoma
                  </option>
                  <option data-alternate-values='["Oregon"]' value="OR">
                    Oregon
                  </option>
                  <option data-alternate-values='["Pennsylvania"]' value="PA">
                    Pennsylvania
                  </option>
                  <option data-alternate-values='["Puerto Rico"]' value="PR">
                    Puerto Rico
                  </option>
                  <option data-alternate-values='["Rhode Island"]' value="RI">
                    Rhode Island
                  </option>
                  <option data-alternate-values='["South Carolina"]' value="SC">
                    South Carolina
                  </option>
                  <option data-alternate-values='["South Dakota"]' value="SD">
                    South Dakota
                  </option>
                  <option data-alternate-values='["Tennessee"]' value="TN">
                    Tennessee
                  </option>
                  <option data-alternate-values='["Texas"]' value="TX">
                    Texas
                  </option>
                  <option data-alternate-values='["Utah"]' value="UT">
                    Utah
                  </option>
                  <option data-alternate-values='["Vermont"]' value="VT">
                    Vermont
                  </option>
                  <option data-alternate-values='["Virginia"]' value="VA">
                    Virginia
                  </option>
                  <option data-alternate-values='["Washington"]' value="WA">
                    Washington
                  </option>
                  <option
                    data-alternate-values='["District of Columbia"]'
                    value="DC"
                  >
                    Washington DC
                  </option>
                  <option data-alternate-values='["West Virginia"]' value="WV">
                    West Virginia
                  </option>
                  <option data-alternate-values='["Wisconsin"]' value="WI">
                    Wisconsin
                  </option>
                  <option data-alternate-values='["Wyoming"]' value="WY">
                    Wyoming
                  </option>
                  <option
                    data-alternate-values='["Armed Forces Pacific"]'
                    value="AP"
                  >
                    Armed Forces Pacific
                  </option>
                </select>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <FormControl
                  type="text"
                  id="zipCode"
                  placeholder="Zip code"
                  className="checkout"
                  onChange={handleChnage}
                />
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <FormControl
                  type="tel"
                  id="phone"
                  placeholder="Phone"
                  className="checkout"
                  onChange={handleChnage}
                />
              </div>
            </div>
          </div>
          <div class="btn-row w-100 d-flex justify-content-end">
            <button
              class="checkout-btn"
              onClick={handleToggleView}
              disabled={!isValid}
            >
              Continue to payment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InitialView;
