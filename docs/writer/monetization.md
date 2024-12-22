---
outline: deep
---

# Prepare to Earn

Before earning revenue on [Quail](https://quaily.com), you need to complete the following preparations.

1. **Provide Tax Information**: Provide tax information in [Profile](https://quaily.com/dashboard/profile/payout), including name
2. **Set Payout Method**: Set your payout method in [Payout](https://quaily.com/dashboard/profile/payout)

For more information, please refer to the following sections: [Payout Settings](./payout-settings).

## Taxes

Quail operates in Japan and complies with Japanese tax laws. For more information on the tax information mentioned below, please visit the official website of the [National Tax Agency](https://www.nta.go.jp).

### Japanese Consumption Tax(JCT)

According to Japanese tax law, Quail is required to collect consumption tax from all order buyers. The tax rate is 10%.

For example, if a reader purchases an article priced at 1000 JPY, Quail will collect 100 JPY in consumption tax from the reader, making the actual payment 1100 JPY.

The JCT may affect readers' purchasing decisions, so authors are advised to consider the JCT when setting prices.

### Withholding Tax

Withholding tax, is a tax that is deducted at the source of income before it is paid to the recipient.

In Japan, this tax applies to various forms of income, including earnings from premium newsletters. The primary purpose of this tax is to ensure that the government receives tax revenue directly when individuals and businesses receive their earnings.

The withholding tax rate varies based on the residency status of the recipient. Japanese residents face a tax rate of 10.21%, while non-Japanese residents are subject to a rate of 20.42%.

> Reference
>
> 1. https://www.nta.go.jp/taxes/shiraberu/taxanswer/gensen/2502.htm
> 2. https://www.nta.go.jp/taxes/shiraberu/taxanswer/gensen/2884.htm

For example, if an author is a Japanese resident, and their income after deducting all expenses for the month is 10,000 JPY, Quail will deduct 1,021 JPY in withholding tax at the time of payout. If the author is a non-Japanese resident, Quail will deduct 2,042 JPY in withholding tax at the time of payout.

The Withholding Tax is levied on various types of income generated in Japan, regardless of whether the author is a Japanese tax resident. Quail will deduct the withholding tax at the time of payout.

:::warning Note
In the self-hosted payment mode, Quail is not responsible for the sale of content goods, collection, invoices, refunds, tax refunds, etc.

Therefore, all taxes incurred must be declared and paid by the author in accordance with the tax laws of the country.
:::

**Tax Conventions for Non-Japanese Residents**

Tax conventions are agreements between countries designed to avoid double taxation and prevent tax evasion on cross-border income.

Many countries have signed tax treaties with Japan that allow for reduced tax rates on various types of income. You may consult local tax authorities or a tax professional for more details, or navigate these links

- English: https://www.mof.go.jp/english/policy/tax_policy/tax_conventions/tax_convetion_list_en.html
- Japanese: https://www.mof.go.jp/tax_policy/summary/international/tax_convention/tax_convetion_list_jp.html

## Fees

### Fees Incurred at Purchase

For paid content subscriptions, Quail uses Stripe and blockchain as payment processors. The following fees are incurred during the payment process:

1. If currency conversion is involved during payment, a currency conversion fee will be charged. This fee will be borne by Quail and may also be borne by the consumer.
2. Stripe's other payment processing fees and corresponding processing fee consumption tax, please refer to [Stripe's official website](https://stripe.com/en-jp/pricing). This fee will be borne by the author.
3. Blockchain transaction fees, specific to the real-time rate of the blockchain. This fee will be borne by the consumer.

### Quail Fee

Quail charges a service fee for each transaction. The fee rate is 10% of the transaction amount.

### Payout Fees

When Quail transfers funds to authors, the following fees may be incurred:

1. PayPal: PayPal charges a certain fee and currency conversion fee. Please refer to [PayPal's official website](https://www.paypal.com/us/webapps/mpp/paypal-fees) for more information.
2. Wise: Wise charges a certain fee and currency conversion fee. Please refer to [Wise's official website](https://wise.com/jp/pricing/) for more information.
3. Bank Transfer fees: Bank will charge a certain fee for the transfer to PayPal or Wise. This fee will be borne by the Quail.
4. Blockchain: The blockchain will charge a certain fee. This fee will be borne by the Quail.

## Payout

For Quail-hosted payment mode subscription and ad revenue, Quail will settle the previous month's earnings on the 5th of each month.

### Payout Threshold

The minimum amount required for Quail to transfer funds to the author is 5000 JPY(For regular payment methods) or 100 USD (For cryptocurrency). If your earnings do not reach the minimum amount, Quail will continue to accumulate them until the next settlement period until the minimum amount is reached.

### Settlement Period

Quail will settle the author's earnings on the 5th of each month. If the 5th falls on a weekend or holiday, the settlement will be postponed to the next business day.

For example, if the author's earnings reach the minimum amount on January 10th, the author will receive the payment on February 5th.

### Example

Here is an example of how Quail calculates and pays out earnings (Assuming the author is a Japanese resident and Stripe does not charge additional fees):

- An author earns 10,000 JPY in January, which includes an order of 2,000 JPY and an order of 8,000 JPY.
- These 2 orders' JCT is 200 JPY and 800 JPY, respectively. Therefore, Quail actually receives 11,000 JPY.
- Stripe charges a 3.6% fee and accompanying consumption tax, which will be about `11,000×3.6%×1.1 = 396` JPY.
- Quail will charge a 10% service fee (with 10% JCT), which will be about `10,000×10%×110% = 1,100` JPY.
- The author's revenue is `11000-1100-436-1000=8464` JPY.
- The withholding tax is 10.21% of the author's revenue, which is `8464×0.1021=864` JPY.
- The author's revenue after withholding tax is `8464-864=7600` JPY.

Quail will transfer the 7600 JPY to the author's account next month. According to selected payout method, it may charge additional fees.
