# Flow Investor

A clean, minimal stock signal MVP with a premium pricing section and CSV export flow.

## What it includes
- Minimal stock analyzer UI
- Buy / hold / watch signal cards
- Fast watchlist selection
- CSV download button
- Premium subscription CTA
- Pricing section with three tiers
- AI-powered signal analysis

## Product name
**Flow Investor**
- Tagline: "AI stock signals for smarter investing"
- A premium, minimal dashboard for stock analysis

## Important note
This is a prototype and not financial advice. It is designed as a launch-ready MVP for a product you can customize and grow.

## Local run
Open `index.html` directly in a browser, or serve locally:

```bash
python -m http.server 8000
```

Then open: http://localhost:8000

## Publish to GitHub Pages
1. Push this repo to GitHub
2. Go to the repository settings
3. Open Pages
4. Choose the develop or main branch
5. Select the root folder
6. Save

Your project will be published as a GitHub Pages URL.

## Monetization setup
This project includes a payment button placeholder:

- Open `config.js`
- Replace the Stripe link value with your real payment URL

Example:

```js
window.PAYMENT_URL = "https://buy.stripe.com/test_your_real_stripe_link";
```

Once you create a Stripe account and a payment link, paste it here and your users can subscribe.

## Real product idea
This is the foundation for a simple subscription-based stock signal tool. You can grow it with actual data providers, usage limits, real AI analysis, and better signal logic.
