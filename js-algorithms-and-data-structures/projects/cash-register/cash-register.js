// descobrir se tem troco
// se não tiver, caixa fechado
// se tiver troco, então:
// - se o troco for maior que o dinheiro em caixa, então é fundos insuficiente
// - senão, devolver o troco ordenado decrescente
function sum(arr){
  return arr.reduce(
    (acc, curr) => {
      acc+=curr[1];
      return acc;
    }, 0
  )
}

function fixDecimalDigit(num){
  //return num;
  return Number(Math.round(num+'e2')+'e-2');
}

function checkCashRegister(price, cash, cid) {
  let result = {};

  const unitValue = [
  ["PENNY", 0.01],
  ["NICKEL", 0.05],
  ["DIME", 0.1],
  ["QUARTER", 0.25],
  ["ONE", 1],
  ["FIVE", 5],
  ["TEN", 10],
  ["TWENTY", 20],
  ["ONE HUNDRED", 100]
];

  let detailedCid = cid.map(
    (o) => ([
      o[0], 
      o[1], 
      o[1] / unitValue.find((u) => (u[0] === o[0]))[1], 
      unitValue.find((u) => (u[0] === o[0]))[1]])
  );

  const cashInDrawer = fixDecimalDigit(sum(cid));
  let moneyBack = fixDecimalDigit((cash - price));
  let subMoneyBack = moneyBack;
  let changeResult = [];
  
  if(moneyBack === cashInDrawer){
    changeResult = cid;
    result.status = "CLOSED";
    result.change = changeResult;
  } else {
    let insufficientStatus = "INSUFFICIENT_FUNDS";
    if(moneyBack <= cashInDrawer){
      let cidFiltred = detailedCid        
        .filter((o) => (o[1] > 0 
          && (o[1]/o[2] <= moneyBack))
        )
        .sort((a,b) => (b[3] - a[3]));
    
      let indexOfcidFiltred;      

      do{        
        subMoneyBack = fixDecimalDigit(subMoneyBack);
        indexOfcidFiltred = cidFiltred
                  .findIndex((e) => 
                    (subMoneyBack >= (e[1]/e[2])));
        
        if(indexOfcidFiltred < 0){
          break;
        }

        const curr = cidFiltred[indexOfcidFiltred];
        const unity = curr[1]/curr[2];
        
        if(subMoneyBack >= unity){
          const index = changeResult.findIndex((e) => e[0] === curr[0]);
          const quantity = 1;

          if(index >= 0){
            changeResult[index][1] += unity;
            changeResult[index][2] += quantity;
          } else {
            changeResult.push([
              curr[0],
              unity,
              quantity
            ]);   
          }

          subMoneyBack -= unity;
          cidFiltred[indexOfcidFiltred][1] = fixDecimalDigit(cidFiltred[indexOfcidFiltred][1] - unity);
          --cidFiltred[indexOfcidFiltred][2];          
        }
      } while(indexOfcidFiltred >= 0);  

    }    
    if(moneyBack > cashInDrawer || subMoneyBack > 0){
      changeResult = [];
      result.status = insufficientStatus;
      result.change = changeResult;
    } else {
      result.status = "OPEN";
      result.change = changeResult.map((o) => [o[0], o[1]]);
    }

  }
  return result;
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])

