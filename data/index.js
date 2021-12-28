export const get100Years = () => {
  let temp = [];
  const year = new Date().getFullYear();

  for (let i = parseInt(year); i > parseInt(year) - 100; i--) {
    let data = {
      value: `${i}`,
      label: `${i}`,
    };
    temp.push(data);
  }

  return temp;
};

export const get10Rating = () => {
  let temp = [];
  const max = 10.0;

  for (let i = max; i >= 0; i -= 0.5) {
    let data = {
      value: `${i.toFixed(1)}`,
      label: `> ${i.toFixed(1)}`,
    };
    temp.push(data);
  }

  return temp;
};

export const getSeason = () => {
  const date = new Date();
};
