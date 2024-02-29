const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];
  for(let index in books) {
    pris = []
    books.forEach(n => {
        if ((n.rented > 1)){
        pris.push("yes");}
    else{
    pris.push("no")}
    }) 
    console.log(pris[index])
  }
  console.log("--------------------------")
  for(let index in books) {
    books.forEach(n => {
        books.sort(function (a, b) {
        if (a.rented < b.rented) {
            return -1;
          }
          if (a.rented > b.rented) {
            return 1;
          }
          return 0;})
    })
  }
    console.log(books[11])
    console.log(books[1])
    console.log("--------------------------")
    for(let index in books) {
        pris = []
        books.forEach(n => {
            if ((n.id === 873495)){
            pris.push(n);}
        }) 
        console.log(pris[index])
      }
      console.log("--------------------------")
      for(let index in books) {
        pris = []
        books.forEach(n => {
            if ((n.id === 133712)){
                delete n
            }
            else
            pris.push(n);
        }) 
        console.log(pris[index])
      }
      console.log("--------------------------")


      for(let index in books) {
        books.forEach(n => {
            pris.sort(function (a, b) {
            if (a.title < b.title) {
                return -1;
              }
              if (a.title > b.title) {
                return 1;
              }
              return 0;})
        })
        console.log(pris[index])
      }