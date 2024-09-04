const links = [
    { name: 'GitHub', icon: 'github', url: 'https://github.com/rramosfabre' },
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/ramón-o-ramos-fabré/' },
    { name: 'Instagram', icon: 'instagram', url: 'https://instagram.com/rramosfabre' },
    { name: 'Twitter', icon: 'twitter', url: 'https://twitter.com/rramosfabre' },
    { name: 'Email', icon: 'mail', url: 'mailto:rramosfabre@protonmail.com' },
];

function createLinkElements() {
    const linksContainer = document.getElementById('links-container');
    
    links.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.className = 'link';
        linkElement.target = '_blank';
        linkElement.rel = 'noopener noreferrer';
        linkElement.setAttribute('aria-label', link.name);
        
        linkElement.innerHTML = `
            <span>${link.name}</span>
            <i data-feather="${link.icon}"></i>
        `;
        
        linksContainer.appendChild(linkElement);
    });
    
    // Reemplazar iconos de Feather
    feather.replace();
}

// Ejecutar la función cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', createLinkElements);
