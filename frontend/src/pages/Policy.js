import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/Grey Blue Corporate Recruitment and Selection Policy Presentation.png"
            alt="Return and cancellation Policy"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
        <h3>Order Cancellation and Return Policy</h3>
          <p>1. The customer can choose to cancel an order any time before   it's dispatched. The order cannot be canceled once it’s 
          out for delivery. However, the customer may choose to reject it at the doorstep.</p>
          <p>2. The time window for cancellation varies based on different 
          categories and the order cannot be canceled once the specified time has passed.</p>
          <p>3. Returns is a scheme provided by respective sellers directly under this policy in terms of which the option of exchange, replacement and/ or refund is offered by the respective sellers to you. All products listed under a particular category may not have the same returns policy.
          </p>
        
        </div>
      </div>
    </Layout>
  );
};

export default Policy;