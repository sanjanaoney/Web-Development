function calculateElectronicsBudget(laptopQuantity,tabletQuantity,mobileQuantity){
    const laptopPrice=35000;
    const tabletPrice=15000;
    const mobilePrice=20000;

    const laptopTotalPrice=laptopQuantity*laptopPrice;
    const tabletTotalPrice=tabletQuantity*tabletPrice;
    const mobileTotalPrice=mobileQuantity*mobilePrice;

    const total= laptopTotalPrice+tabletTotalPrice+mobileTotalPrice;
    return total;
}
const totalMoneyRequired=calculateElectronicsBudget(2,1,2);
console.log(totalMoneyRequired);