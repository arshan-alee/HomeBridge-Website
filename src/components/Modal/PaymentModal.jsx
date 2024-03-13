import React, { useEffect, useState } from "react";
import { loadPaymentWidget } from "@tosspayments/payment-widget-sdk";
import { nanoid } from "nanoid";

export default function PaymentModal({
  setAskModalShow,
  price,
  clientKey,
  userData,
  eventId,
}) {
  const [widgetInstance, setWidgetInstance] = useState(null);

  useEffect(() => {
    const customerKey = nanoid();
    loadPaymentWidget(clientKey, customerKey)
      .then((widget) => {
        // Store the widget instance for later use
        setWidgetInstance(widget);
        // Assuming you want to render these as soon as the modal opens
        widget.renderPaymentMethods(
          "#payment-methods",
          { value: price },
          { variantKey: "DEFAULT" }
        );
        widget.renderAgreement("#payment-agreement", {
          variantKey: "AGREEMENT",
        });
      })
      .catch((error) => {
        console.error("Error loading payment widget:", error);
      });
  }, [price, clientKey]);

  const handlePayment = async () => {
    if (widgetInstance) {
      try {
        await widgetInstance.requestPayment({
          orderId: nanoid(),
          orderName: "Homebridge Payment",
          customerName: userData?.userName,
          customerEmail: userData?.email,
          customerMobilePhone: userData?.phoneNumber || "01012345678",
          amount: price,
          failUrl: `${window.location.origin}/payment/fail`,
          successUrl: `${window.location.origin}/payment/success/${eventId}`,
        });
      } catch (error) {
        console.error("Payment request error:", error);
      }
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#00000099] z-[100]">
      <div className="py-6 flex flex-col justify-center absolute w-[500px] p-[0px] max-sm:w-[calc(100%-76px)] rounded-[25px] px-[11px]  max-sm:p-[15px]  bg-[#fff] top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
        <p className="text-[#000000] text-[30px] font-[700] max-sm:text-[18px] text-center mt-[10px] mb-[0px] max-sm:mb-[15px]">
          Congratulations!
        </p>
        <div id="payment-methods" className="my-4"></div>
        <div id="payment-agreement" className="my-4"></div>
        {/* Add a button to initiate payment */}
        <button
          onClick={handlePayment}
          className="my-4 bg-[#227af6d9] text-white py-3 mx-7 rounded-md font-semibold"
        >
          Proceed with Payment
        </button>
        <button
          className="my-1 bg-[#000] text-white py-3 mx-7 rounded-md font-semibold"
          onClick={() => setAskModalShow(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
}
