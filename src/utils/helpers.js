export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
  }).format(number / 100);
  return newNumber;
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);

  if (type === 'colors') {
    unique = unique.flat();
  }

  unique = new Set(unique);
  return ['all', ...unique];
};

export const checkObjectProperties = (object) => {
  const isEmpty = Object.values(object).every((x) => x === null || x === '');
  return isEmpty;
};
