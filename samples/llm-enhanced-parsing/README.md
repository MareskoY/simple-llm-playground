# LLM Enhanced Parsing: Replacing Regex with AI

This sample demonstrates how to use LLM to replace traditional regex for extracting and correcting emails and order IDs from a given message. By leveraging the power of Large Language Models (LLMs), we can handle common errors in emails and extract information more flexibly and accurately than with regex.

## Advantages of LLM over Regex

1. **Error Correction**: LLMs can correct common typos in emails that regex would fail to match.
2. **Flexibility**: LLMs can handle a wider variety of formats and unstructured data compared to regex.
3. **Context-Awareness**: LLMs understand the context of the message, leading to more accurate data extraction.
4. **Easy Integration**: This approach can be easily integrated into various services that use different formats for order IDs.

## How to Run
1. `npm install`
2. add `.env` with `OPENAI_API_KEY=your_openai_api_key`
3. npm run start-llm-parsing

## Example Input and Output

### Input Messages
- Hi, my email is john.doe[at]example,com and my order ID is 12345.
- Hello, contact me at janedoe[at]example[dot]com with order ID ABC-1234.
- Please update my order with ID 98765-XYZ. My email is mike_smith[at]example.cmo
- My email, jenny.o[at]examplecom, and my order id is 0001-ABCD.
- Order ID: XYZ-9999, email: wrong.email[at]example;com.
- My order 12345 and email nikita123@gmail.com

### Expected Output

```
{ email: 'john.doe@example.com', order_id: '12345' }
{ email: 'janedoe@example.com', order_id: 'ABC1234XZ' }
{ email: 'mike_smith@example.com', order_id: '98765-XYZ' }
{ email: 'jenny.o@example.com', order_id: '0001-ABCD' }
{ email: 'wrong.email@example.com', order_id: 'XYZ-9999' }
{ email: 'nikita123@gmail.com', order_id: '12345' }

```

