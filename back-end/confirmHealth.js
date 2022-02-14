const confirmHealth = (snack) => {
if(snack.protein >= 5 || snack.fiber >= 5 && snack.added_sugar < 5){
    return snack.is_healthy = true;
} 
else if (snack.protein >= 5 || snack.fiber >= 5 && snack.added_sugar > 5 ){
    return snack.is_healthy = false;
}
else if (snack === ""); {
    return snack.is_healthy = false;
} 

};

module.exports = confirmHealth;
