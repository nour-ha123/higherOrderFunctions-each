// ex 1
function each(tab, func) {
    for (var i = 0; i < tab.length; i++) {
     
        func(tab[i]);
    }
  }

// ex2
function sumSquares(numbers) {
    var total = 0;
    each(numbers, function(n) {
      total += n;
    });
    return total;
}

// ex3
function impairs(numbers) {
    var res = [];
    each(numbers, function(n) {
      if (n % 2 !== 0) {
        res.push(n);
      }
    });
    return res;
}

// ex4
function sommeDeTousLesÉlémentsMultipliésParQuatre (numbers) { 
    var res = 0;
    each(numbers, function(n) {
        res += (n*4);
    });
    return res;
}

// ex5
function doublerTous(nombres) {
    var res = [];
    each(numbers, function(n) {
        res.push(n*2);
    });
    return res;
}

// ex6
function diviserTousParDeux(numbers) { 
    var res = [];
    each(numbers, function(n) {
        res.push(n/2);
    });
    return res;
}

// ex7
function mettreEnMajuscules(chaines) {
    var res = [];
    each(chaines, function(chaine) {
      res.push(chaine.toUpperCase());
    });
    return res;
}

// ex8
function pairs(nombres) {
    var res = [];
    each(numbers, function(n) {
      if (n % 2 === 0) {
        res.push(n);
      }
    });
    return res;
}

// ex9
function multiplesDeTrois(nombres) {
    var res = [];
    each(numbers, function(n) {
      if (n % 3 === 0) {
        res.push(n);
      }
    });
    return res;
}

// ex 10
function positifs(nombres) {
    var res = [];
    each(numbers, function(n) {
      if (n >= 0) {
        res.push(n);
      }
    });
    return res;
}

// ex 11
function longueurPaire(chaines) {
    var res = [];
    each(chaines, function(ch) {
      if (ch.length % 2 === 0) {
        res.push(ch);
      }
    });
    return res;
}