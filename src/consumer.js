export function consumeWithTimeout(iterator, timeoutSeconds) {
  const endTime = Date.now() + timeoutSeconds * 1000;

  let sum = 0;
  let count = 0;

  function process() {
    if (Date.now() >= endTime) {
      console.log("Time is up!");
      console.log("Total values:", count);
      console.log("Sum:", sum);
      console.log("Average:", count > 0 ? sum / count : 0);
      return;
    }

    const { value } = iterator.next();

    sum += value;
    count++;

    console.log(`Value: ${value} | Running Avg: ${sum / count}`);

    setTimeout(process, 0);
  }

  process();
}
