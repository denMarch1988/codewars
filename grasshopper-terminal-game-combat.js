function combat(health, damage) {
    health -= damage
    if (health >= 0) {
        return health;
    } else {
        return 0;
    }
}

console.log(combat(100, 101));