import { openai } from '../../configs/openai-config.js';

async function extractEmailAndId(message) {
    const prompt = `Extract the email and order ID from the following message. Correct any typos in the email. Return the result as a JSON object with fields 'email' and 'order_id':\n\n${message} `;

    try {
        const response = await openai.createCompletion({
            model: "gpt-3.5-turbo-instruct",
            prompt: prompt,
            temperature: 0,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });

        const resultText = response.data.choices[0].text.trim();
        const resultJson = JSON.parse(resultText);
        return resultJson;
    } catch (error) {
        console.error('Error with OpenAI API request:', error);
    }
}

const testMessages = [
    'Hi, my email is john.doe[at]example,com and my order ID is 12345.',
    'Hello, contact me at janedoe[at]example[dot]com with order ID ABC1234XZ.',
    'Please update my order with ID 98765-XYZ. My email is mike_smith[at]example.cmo',
    'My email, jenny.o[at]examplecom, and my order id is 0001-ABCD.',
    'Order ID: XYZ-9999, email: wrong.email[at]example;com.',
    'My order 12345 and email nikita123@gmail.com'
];

async function runTests() {
    for (const message of testMessages) {
        const result = await extractEmailAndId(message);
        console.log(result);
    }
}

runTests();
