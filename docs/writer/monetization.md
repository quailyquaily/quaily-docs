---
description: Prepare to earn revenue on Quaily
outline: deep
---

# Prepare to Earn

Before earning revenue on [Quaily](https://quaily.com), you need to complete the following preparations.

1. **Provide Tax Information**: Provide tax information in [Profile](https://quaily.com/dashboard/profile/payout), including name
2. **Set Payout Method**: Set your payout method in [Payout](https://quaily.com/dashboard/profile/payout)

For more information, please refer to the following sections: [Payout Settings](./payout-settings).

## Taxes

Quaily operates in Japan and complies with Japanese tax laws. For more information on the tax information mentioned below, please visit the official website of the [National Tax Agency](https://www.nta.go.jp).

### Japanese Consumption Tax(JCT)

According to Japanese tax law, Quaily is required to collect consumption tax from all order buyers. The tax rate is 10%.

For example, if a reader purchases an article priced at 1000 JPY, Quaily will collect 100 JPY in consumption tax from the reader, making the actual payment 1100 JPY.

The JCT may affect readers' purchasing decisions, so authors are advised to consider the JCT when setting prices.

## Fees

### Fees Incurred at Purchase

For paid content subscriptions, Quaily uses Stripe and blockchain as payment processors. The following fees are incurred during the payment process:

1. If currency conversion is involved during payment, a currency conversion fee will be charged. This fee will be borne by Quaily and may also be borne by the consumer.
2. Stripe's other payment processing fees and corresponding processing fee consumption tax, please refer to [Stripe's official website](https://stripe.com/en-jp/pricing). This fee will be borne by the author.
3. Blockchain transaction fees, specific to the real-time rate of the blockchain. This fee will be borne by the consumer.

### Quaily Fee

Quaily charges a service fee for each transaction. The fee rate is 10% of the transaction amount.

### Payout Fees

When Quaily transfers funds to authors, the following fees may be incurred:

1. PayPal: PayPal charges a certain fee and currency conversion fee. Please refer to [PayPal's official website](https://www.paypal.com/us/webapps/mpp/paypal-fees) for more information.
2. Wise: Wise charges a certain fee and currency conversion fee. Please refer to [Wise's official website](https://wise.com/jp/pricing/) for more information.
3. Bank Transfer fees: Bank will charge a certain fee for the transfer to PayPal or Wise. This fee will be borne by the Quaily.
4. Blockchain: The blockchain will charge a certain fee. This fee will be borne by the Quaily.

## Payout

For Quaily-hosted payment mode subscription and ad revenue, Quaily will settle the previous month's earnings on the 5th of each month.

### Payout Threshold

The minimum amount required for Quaily to transfer funds to the author is 5000 JPY(For regular payment methods) or 100 USD (For cryptocurrency). If your earnings do not reach the minimum amount, Quaily will continue to accumulate them until the next settlement period until the minimum amount is reached.

### Settlement Period

Quaily will settle the author's earnings on the 5th of each month. If the 5th falls on a weekend or holiday, the settlement will be postponed to the next business day.

For example, if the author's earnings reach the minimum amount on January 10th, the author will receive the payment on February 5th.

### Example

Here is an example of how Quaily calculates and pays out earnings (Assuming the author is a Japanese resident and Stripe does not charge additional fees):

- An author earns 10,000 JPY in January, which includes an order of 2,000 JPY and an order of 8,000 JPY.
- These 2 orders' JCT is 200 JPY and 800 JPY, respectively. Therefore, Quaily actually receives 11,000 JPY.
- Stripe charges a 3.6% fee and accompanying consumption tax, which will be about `11,000×3.6%×1.1 = 436` JPY.
- Quaily will charge a 10% service fee (with 10% JCT), which will be about `10,000×10%×110% = 1,100` JPY.
- The author's revenue is `11000-1100-436-1000=8464` JPY.

Quaily will transfer the 8464 JPY to the author's account next month. According to selected payout method, it may charge additional fees.
