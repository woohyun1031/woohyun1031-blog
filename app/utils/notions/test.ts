export {};

function sleep(ms: number) {
  // eslint-disable-next-line no-promise-executor-return
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function* integers() {
  let i = 1;
  while (true) {
    console.log(`yielding ${i}`);
    // eslint-disable-next-line no-plusplus
    yield i++;

    // eslint-disable-next-line no-await-in-loop
    await sleep(100);
  }
}

// Wraps a generator into a ReadableStream
function createStream(iterator: any) {
  return new ReadableStream({
    async start(controller) {
      // eslint-disable-next-line no-restricted-syntax
      for await (const v of iterator) {
        controller.enqueue(v);
      }
      controller.close();
    },
  });
}

// Collect data from stream
async function run() {
  // Set up a stream that of integers
  const stream = createStream(integers());

  // Read values from our stream
  const reader = stream.getReader();
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 10_000; i++) {
    ``;
    // we know our stream is infinite, so there's no need to check `done`.
    // eslint-disable-next-line no-await-in-loop
    const { value } = await reader.read();
    console.log(`read ${value}`);

    // eslint-disable-next-line no-await-in-loop
    await sleep(1_000);
  }
}
// fetch('/stest')
//   .then((res) => res.body)
//   .then((res) => {
//     const reader: ReadableStreamBYOBReader = res?.getReader();
//   });

const asyncIterable = {
  [Symbol.asyncIterator]() {
    return {
      i: 0,
      next() {
        if (this.i < 3) {
          return Promise.resolve({ value: this.i++, done: false });
        }

        return Promise.resolve({ done: true });
      },
    };
  },
};

(async function () {
  for await (let num of asyncIterable) {
    console.log(num);
  }
})();
