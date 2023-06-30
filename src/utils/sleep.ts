// Time should be in milli seconds
export const sleep = (time: number) =>
  new Promise((resolve, reject) => setTimeout(resolve, time));
