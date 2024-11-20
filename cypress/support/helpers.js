export const acessaSite = () => {
    cy.visit('https://buggy.justtestit.org/');
}

export const geraNickname = () => {
    const prefixos = ["Super", "Mega", "Ultra", "Mister", "Power", "Dark", "Light", "Ninja", "Crazy", "Epic"];
    const sufixos = ["Warrior", "Gamer", "Wizard", "Nerd", "Beast", "Hero", "Ghost", "Hunter", "Knight", "Rider"];
    
    const prefixoAleatorio = prefixos[Math.floor(Math.random() * prefixos.length)];
    const sufixoAleatorio = sufixos[Math.floor(Math.random() * sufixos.length)];
    const numeroAleatorio = Math.floor(Math.random() * 1000); // Número aleatório de 0 a 999
    
    return `${prefixoAleatorio}${sufixoAleatorio}${numeroAleatorio}`;
}