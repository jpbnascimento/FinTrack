document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById('financialChart').getContext('2d');
  const financialChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Receita Ativa', 'Receita Passiva', 'Custos Fixos', 'Custos Variáveis'],
      datasets: [{
        data: [6500, 6400, 5000, 5000],
        backgroundColor: [
          '#e21b4e',
          '#ff969f',
          '#ff717d',
          '#ff4962'
        ],
        borderColor: [
          '#e21b4e',
          '#ff969f',
          '#ff717d',
          '#ff4962'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Distribuição de Receitas e Custos'
        },
        legend: {
          position: 'right',
          labels: {
            usePointStyle: true,
            pointStyle: 'rect',
            padding: 20
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const label = context.label || '';
              const value = context.raw || 0;
              const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
              const percentage = Math.round((value / total) * 100);
              return `${label}: R$ ${value} (${percentage}%)`;
            }
          }
        }
      }
    }
  });
});
