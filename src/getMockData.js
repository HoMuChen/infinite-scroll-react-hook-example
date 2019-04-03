function getMockData(size, page) {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => resolve(Array.from(Array(size*page).keys(), n => n + 1).slice(size*(page-1), size*page)),
      1000
    );
  })
}

export default getMockData;
