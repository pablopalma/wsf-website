// progress.js

// Función para actualizar la barra de progreso
function updateProgressBar(currentAmount, targetAmount)
{
    // Calcula el porcentaje de progreso
    const progressPercentage = (currentAmount / targetAmount) * 100;

    // Selecciona la barra de progreso y el tooltip
    const progressBar = document.querySelector('.progress-bar');
    const tooltip = document.querySelector('.progress-bar-tooltip');

    // Actualiza el ancho de la barra de progreso
    if (progressBar)
    {
        progressBar.style.width = progressPercentage + '%';
    }

    // Actualiza el tooltip con el monto actual
    if (tooltip)
    {
        tooltip.textContent = `${currentAmount.toFixed(2)} USD`; // Muestra el monto actual
    }

    // Opcional: Actualiza el texto de monto actual y objetivo
    const currentAmountText = document.querySelector('.progress-bar-container::after');
    const targetAmountText = document.querySelector('.progress-bar-container::before');

    if (currentAmountText)
    {
        currentAmountText.textContent = `Monto Actual: ${currentAmount.toFixed(2)} USD`;
    }

    if (targetAmountText)
    {
        targetAmountText.textContent = `Monto Objetivo: ${targetAmount.toFixed(2)} USD`;
    }
}

// Ejemplo de uso: Actualiza la barra de progreso con un monto actual de 28.02 y un objetivo de 50
document.addEventListener('DOMContentLoaded', () =>
{
    updateProgressBar(28.02, 50);
});
