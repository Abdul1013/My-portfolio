document.addEventListener("DOMContentLoaded", () => {
    const updateTime = () => {
        const now = new Date();
        document.querySelector('[data-testid="currentTimeUTC"]').textContent = now.toUTCString();
        document.querySelector('[data-testid="currentDay"]').textContent = now.toLocaleDateString('en-US', { weekday: 'long' });
    };

    updateTime();
    setInterval(updateTime, 1000);
});