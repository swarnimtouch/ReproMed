$(document).ready(function() {
    
    const ctx = document.getElementById('quizChart');
    
    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Module 1', 'Module 2', 'Module 3'],
                datasets: [
                    {
                        label: 'Your Score',
                        data: [92, 80, 88], 
                        backgroundColor: '#1ca477', 
                        borderRadius: 4, 
                        barPercentage: 0.6,
                        categoryPercentage: 0.8
                    },
                    {
                        label: 'Avg Peer Score',
                        data: [78, 75, 82], 
                        backgroundColor: '#7a65d8', 
                        borderRadius: 4,
                        barPercentage: 0.6,
                        categoryPercentage: 0.8
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false 
                    },
                    tooltip: {
                        backgroundColor: '#0b493c',
                        padding: 10,
                        titleFont: { family: 'Poppins', size: 13 },
                        bodyFont: { family: 'Poppins', size: 12 }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        grid: {
                            color: '#f1f5f9',
                            drawBorder: false
                        },
                        ticks: {
                            font: { family: 'Poppins', size: 11 },
                            color: '#a0aec0',
                            stepSize: 20
                        }
                    },
                    x: {
                        grid: {
                            display: false,
                            drawBorder: false
                        },
                        ticks: {
                            font: { family: 'Poppins', size: 12 },
                            color: '#64748b'
                        }
                    }
                }
            }
        });
    }
});
