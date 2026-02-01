//Variaveis heroi
let nomeDoHeroi = "Amagon";
let XP = 20001
const elosHeroi = ["Ferro" , "Broze" , "Prata" , "Ouro" , "Platina" , "Ascendente" , "Imortal" , "Radiante"]
const nivelHeroiXP = [
   ['Ferro' , 0 , 1000],
   ['Broze' , 1001 , 2000],
   ['Prata' , 2001 , 5000],
   ['Ouro' , 5001 , 7000],
   ['Platina' , 7001 , 8000],
   ['Ascendente' , 8001 , 9000],
   ['Imortal' , 9001 , 10000],
   ['Radiante' , 10001]

]
const textoPromocaoXP1 = "O Herói de nome "
const textoPromocaoXP2 = " está no nível "

//




// Elo do personagem conforme a quantidade de XP

if (XP <= nivelHeroiXP[0][2]) {
    console.log(textoPromocaoXP1 + nomeDoHeroi + textoPromocaoXP2 + nivelHeroiXP[0][0] + '.')
}
else if (XP <= nivelHeroiXP[1][2]) {
    console.log(textoPromocaoXP1 + nomeDoHeroi + textoPromocaoXP2 + nivelHeroiXP[1][0] + '.')
}
else if (XP <= nivelHeroiXP[2][2]) {
    console.log(textoPromocaoXP1 + nomeDoHeroi + textoPromocaoXP2 + nivelHeroiXP[2][0] + '.')
}
else if (XP <= nivelHeroiXP[3][2]) {
    console.log(textoPromocaoXP1 + nomeDoHeroi + textoPromocaoXP2 + nivelHeroiXP[3][0] + '.')
}
else if (XP <= nivelHeroiXP[4][2]) {
    console.log(textoPromocaoXP1 + nomeDoHeroi + textoPromocaoXP2 + nivelHeroiXP[4][0] + '.')
}
else if (XP <= nivelHeroiXP[5][2]) {
    console.log(textoPromocaoXP1 + nomeDoHeroi + textoPromocaoXP2 + nivelHeroiXP[5][0] + '.')
}
else if (XP <= nivelHeroiXP[6][2]) {
    console.log(textoPromocaoXP1 + nomeDoHeroi + textoPromocaoXP2 + nivelHeroiXP[6][0] + '.')
}
else{
    console.log(textoPromocaoXP1 + nomeDoHeroi + textoPromocaoXP2 + nivelHeroiXP[7][0] + '.')
}