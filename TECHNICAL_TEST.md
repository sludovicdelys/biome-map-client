# Technical Test for Eco Impact Developer

## Deliverable

> This test aims to evaluate your software engineering skills. Special attention will be given to your ability to produce high-quality code. Quantity and execution speed are not the main criteria for success.

Your task is to create an application that generates and displays random maps based on a given configuration. The aesthetic appearance of the map is up to you.

```typescript
interface MapConfig {
  availableBiome: Biome[]
  baseBiome: Biome
  numberOfBiomes: number
  width: number
  height: number
}

type Biome = "plain" | "desert" | "forest" | "ocean"
```

Example configuration:

```typescript
const configExample: MapConfig = {
  availableBiome: ["plain", "desert", "forest", "ocean"],
  baseBiome: "ocean",
  numberOfBiomes: 5,
  width: 10,
  height: 10
}
```

## Technical Constraints

> These constraints are designed to immerse you in a technical environment similar to that of Eco Impact!

* Your project must include a Client and an API
* Your project must be based on a JavaScript stack; it is also strongly recommended to use TypeScript or Flow
* The Client must be Web-based, preferably using the React library
* The API must be in Node.js, preferably using the NestJS framework
* Communication between the Client and API must use HTTP requests

## Our Advice

> It's not always easy to take a technical test. Here are some tips to help you identify our criteria for evaluating your skills 😉

* Even if the project may seem unambitious, this source code is the basis for our technical interview. Don't be afraid of over-engineering
* Separate technical dependencies from your business logic
* Perform the tests that you deem relevant
* Prefer quality code over a functional but unmaintainable deliverable
* Anticipate areas for improvement and present them during the interview
* Identify strengths and highlight them
* **Do not spend more than one day working on this technical test!**

Good luck!
