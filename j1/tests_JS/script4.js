const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];
  for(let index in entrepreneurs) {
    annee = []
    entrepreneurs.forEach(n => {
        if ((n.year >= 1970) && (n.year <1980)){
        annee.push(n);
    }
    }) 
    console.log(annee[index])
  }

    for(let index in entrepreneurs) {
    console.log(entrepreneurs[index].first, entrepreneurs[index].last);
  }
    for(let index in entrepreneurs) {
    console.log(2024 - entrepreneurs[index].year);
  }
  for(let index in entrepreneurs) {
    entrepreneurs.forEach(n => {
        entrepreneurs.sort(function (a, b) {
        if (a.last < b.last) {
            return -1;
          }
          if (a.last > b.last) {
            return 1;
          }
          return 0;})
    })
    console.log(entrepreneurs[index])
  }