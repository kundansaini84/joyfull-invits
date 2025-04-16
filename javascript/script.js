function selectTemplate(templateType) {
    alert(`Selected ${templateType} template! Start customizing now!`);
}

function showDemo() {
    const link = prompt("Enter your event link to share:");
    if(link) {
        alert(`Your event link is ready to share:\n${link}`);
    }
}

document.querySelectorAll('.template').forEach(template => {
    template.addEventListener('mouseover', () => {
        template.style.transform = 'scale(1.05)';
    });
    template.addEventListener('mouseout', () => {
        template.style.transform = 'scale(1)';
    });
});
