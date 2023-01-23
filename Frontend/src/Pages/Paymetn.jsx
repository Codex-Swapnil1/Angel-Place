import React, { useEffect, useRef, useState } from "react";
import "./payment.css";
import {
  Button,
  Radio,
  RadioGroup,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useToast,
  Image,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import logo from "../Resources/1.png";

export default function Payment() {
  const toast = useToast();
  let navigate = useNavigate();

  const [tot, setTot] = useState(0);
  const id = useRef(null);
  const [rad, setRad] = useState(false);
  let sum = 0;
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("checkout-arr")) || [];
    if (data.length !== 0) {
      const totalcartprice = data.map((item) => {
        return Number(item.mrpDecimal - item.discountDecimal);
      });
      for (let i = 0; i < totalcartprice.length; i++) {
        sum += totalcartprice[i];
      }
    }
    sum = sum.toFixed(2);
    setTot(sum);
    console.log(sum, "summmm");
  }, []);

  const handlePayment = () => {
    //   console.log("inside handlepayment");
    //  alert("payment successful");
    toast({
      title: "Payment Successful",
      description: "Your Order are Placed Successfully ",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    setTot(0);
    id.current = setTimeout(() => {
      navigate("/");
    }, 2000);
    localStorage.clear("checkout-arr");
  };
  useEffect(() => {
    return () => {
      clearTimeout(id.current);
    };
  }, []);
  return (
    <div>
      <div id="navbar">
        <div id="navcontainer">
          <div>
            <Image w="30%" src={logo} alt="logo" />
          </div>
          <div id="secpay">
            <h1>100% Secure Payments</h1>
          </div>
        </div>
      </div>
      <div id="container">
        {/* payment method */}
        <div id="methodcontainer">
          {/* offers */}
          <div className="header" style={{ color: "black" }}>
            <h1>Payment Methods</h1>
          </div>

          <div id="offers">
            <RadioGroup defaultValue="1">
              <div className="paybox">
                <div className="plogo">
                  <img src="" alt="" />
                </div>
                <div className="pmcontainer">
                  <div className="paymentheader">
                    <div className="paymentname">
                      <h1>Paytm Wallet</h1>
                    </div>
                    <div className="payradio">
                      <Radio
                        name="paymentoffer"
                        value="1"
                        marginTop={"5px"}
                      ></Radio>
                    </div>
                  </div>

                  <p>
                    up to 3000 cashback points on a minimum transaction of Rs.
                    599. Valid once pre user
                  </p>
                  <Button
                    mt="5px"
                    mb="5px"
                    color={"white"}
                    backgroundColor="#10847e"
                    onClick={handlePayment}
                  >
                    Pay Now
                  </Button>
                </div>
              </div>

              {/* Amazon */}
              <div className="paybox">
                <div className="plogo">
                  <img
                    src="https://cdn.pharmeasy.in/payments/amazonpay_new.png"
                    alt=""
                  />
                </div>
                <div className="pmcontainer">
                  <div className="paymentheader">
                    <div className="paymentname">
                      <h1>Amazon Pay</h1>
                    </div>
                    <div className="payradio">
                      <Radio
                        name="paymentoffer"
                        value="2"
                        marginTop={"5px"}
                      ></Radio>
                    </div>
                  </div>

                  <p>
                    Up to Rs.600 cashback on a minimum transaction of Rs.399.
                    Valid only once per user
                  </p>
                  <Button
                    mt="5px"
                    mb="5px"
                    color={"white"}
                    backgroundColor="#10847e"
                    onClick={handlePayment}
                  >
                    Pay Now
                  </Button>
                </div>
              </div>

              {/* MobiKwik */}
              <div className="paybox">
                <div className="plogo">
                  <img
                    src="https://cdn.pharmeasy.in/payments/wallet_icons/mobikwik.png"
                    alt=""
                  />
                </div>
                <div className="pmcontainer" style={{ border: "0px" }}>
                  <div className="paymentheader">
                    <div className="paymentname">
                      <h1>MobiKwik | ZIP (Pay Later)</h1>
                    </div>
                    <div className="payradio">
                      <Radio
                        name="paymentoffer"
                        value="3"
                        marginTop={"5px"}
                      ></Radio>
                    </div>
                  </div>

                  <p>
                    Up to Rs.650 cashback on Mobikwik(m20).Valid only once & on
                    orders above Rs.800
                  </p>
                  <Button
                    mt="5px"
                    mb="5px"
                    color={"white"}
                    backgroundColor="#10847e"
                    onClick={handlePayment}
                  >
                    Pay Now
                  </Button>
                </div>
              </div>
            </RadioGroup>
          </div>
          {/* other offers */}
          <div id="othermethods">
            <div className="header">
              <h1>Other Options</h1>
            </div>

            {/* upi */}
            <div className="paybox" id="upi">
              <div className="plogo">
                <img src="https://cdn.pharmeasy.in/payments/upi.png" alt="" />
              </div>
              <div className="pmcontainer">
                <div className="paymentheader">
                  <div className="paymentname">
                    <h1>UPI</h1>
                  </div>
                  <div className="payradio">
                    <ChevronRightIcon boxSize={8} />
                  </div>
                </div>

                <div className="logos">
                  {/* <img src="https://consumer-app-images.pharmeasy.in/payment-icons/amazonpay.png" alt="" /> */}
                  <img
                    src="https://consumer-app-images.pharmeasy.in/payment-icons/gpay.png"
                    alt=""
                  />
                  <img
                    src="https://consumer-app-images.pharmeasy.in/payment-icons/bhim.png"
                    alt=""
                  />
                  <img
                    src="https://consumer-app-images.pharmeasy.in/payment-icons/phonepeWallet.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/* COD */}
            <div className="paybox" id="upi">
              <div className="plogo">
                <img
                  src="https://consumer-app-images.pharmeasy.in/payment-icons/cod_disabled.png"
                  alt=""
                />
              </div>
              <div className="pmcontainer" style={{ border: "0px" }}>
                <div className="paymentheader">
                  <div className="paymentname">
                    <h1>Cash on Delivery</h1>
                  </div>
                  <div className="payradio">
                    <ChevronRightIcon boxSize={8} />
                  </div>
                </div>
                <p>order above Rs.500 to enable Cash on Delivery </p>
              </div>
            </div>
          </div>
        </div>

        {/* price  */}
        <div id="pricecontainer">
          <div id="priceheader" style={{ color: "black" }}>
            <h1>Price BreakDown</h1>
          </div>
          <div id="amountdesc">
            <div className="cartvalue">
              <div>
                <h1>Cart Value</h1>
              </div>
              <div>{tot}</div>
            </div>
            <div className="cartvalue">
              <div>
                <h1>Delivery charges</h1>
              </div>
              <div>{tot == 0 ? 0 : 129}</div>
            </div>
          </div>
          <div id="totalpaidamount">
            <div className="cartvalue">
              <div>
                <h1>Amount to be paid</h1>
              </div>
              <div>{tot <= 0 ? "0" : tot + 129}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
