function bestTeam(team1,team2)
{
if(typeof team1!=='object'||typeof team2!=='object')
{
    return "Invalid";
}
const total1=team1.foul+team1.cardY+team1.cardR;
const total2=team2.foul+team2.cardY+team2.cardR;
if(total1<total2){
    return team1.name;
}
else if(total1>total2)
{
    return team2.name;
}
else{
    return "Tie";
}


}
const result=bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 },"France");
console.log(result);