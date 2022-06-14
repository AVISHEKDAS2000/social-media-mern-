export default async function displayRazorpay() {
    const data = await fetch("http://localhost:8800/razorpay", {
      method: "POST",
    }).then((t) => t.json());
  
    console.log(data);
  
    const options = {
      key: process.env.RAZORPAY_KEY_ID,
      currency: data.currency,
      amount: data.amount,
      name: "petsutra",
      description: "Wallet Transaction",
      order_id: data.id,
      handler: function (response) {
        alert("PAYMENT ID ::" + response.razorpay_payment_id);
        alert("ORDER ID :: " + response.razorpay_order_id);
      },
      prefill: {
        name: "Mallar",
        email: "mallarchatterjee26@gmail.com",
        contact: "8170982016",
      },
    };
  
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }