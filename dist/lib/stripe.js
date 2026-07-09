import Stripe from "stripe";
import config from "../config";
const stripe = new Stripe(config.stripe_secret_key, {
    apiVersion: "2025-06-30.basil",
});
export { stripe };
//# sourceMappingURL=stripe.js.map