import React from 'react'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY = "pk_test_51JairxIwX4NzVJ7SR7u7dzCVFiFuh5cW9XgdcRSDSfQiNgR399GjWIDJDlZ1GJ0jEpMpJwlZLzfhHiXcqaqapnfZ00T6M2NYCN"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}