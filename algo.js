// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
 const validateCred = cardArr => {
   let aggregate = 0;

   for (let i = cardArr.length - 1; i >= 0; i--) {
     let currNum = cardArr[i];
     if ((cardArr.length - 1 - i) % 2 === 1) { // odd
       currNum = currNum * 2;
       if (currNum > 9) {
         currNum = currNum - 9;
       }
     }
     aggregate = aggregate + currNum
   }
   return aggregate % 10 === 0; // if sum is divisible by 10 and has a remainder of 0 then validate otherwise its invalid (Luhn Algorithm)
 }

//console.log(validateCred(mystery2))

const findInvalidCards = cardArray => {
  let validBatch = [];
  let invalidBatch = [];
  for (let i = 0; i < cardArray.length; i++) {
    if (validateCred(cardArray[i]) === true) {
      validBatch.push(cardArray[i]);
    } else {
      invalidBatch.push(cardArray[i])
      //console.log(invalidBatch)
    }
  }
  return validBatch;
}

//console.log(findInvalidCards(batch))

function isInvalidCardCompanies(faultyCards) {
  let faultyCardAndCompany = []
  let badCompany = [];
  for (let i = 0; i < faultyCards.length; i++) {
    if (faultyCards[i][0] === 3) {
      faultyCardAndCompany.unshift(`Amex (American Express) - ${faultyCards[i]}`)
      badCompany.unshift('\nAmex (American Express)')
      } else if (faultyCards[i][0] === 4) {
      faultyCardAndCompany.unshift(`Visa - ${faultyCards[i].join(" ")}`)
      badCompany.unshift('Visa')
      } else if (faultyCards[i][0] === 5) {
      faultyCardAndCompany.unshift(`MasterCard - ${faultyCards[i].join(" ")}`)
      badCompany.unshift('MasterCard')
      } else if (faultyCards[i][0] === 6) {
      faultyCardAndCompany.unshift(`Discover - ${faultyCards[i].join(" ")}`)
      badCompany.unshift('Discover')
      } else return "Company not found."
    }
    //console.log(faultyCardAndCompany.sort())
    // filter() method
    let removeDuplicatedCompany = badCompany.filter((duplicateChar, index) => badCompany.indexOf(duplicateChar) === index);
      return removeDuplicatedCompany.sort().join(", \n");
}



console.log(`\nThese are bad companies with faulty cards: \n`, isInvalidCardCompanies(batch)); 

