$(document).ready(function() {
    
    // --- Chart.js Configuration for Quiz Performance Analysis ---
    const ctx = document.getElementById('quizChart');
    
    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Module 1', 'Module 2', 'Module 3'],
                datasets: [
                    {
                        label: 'Your Score',
                        data: [92, 80, 88], // Dummy Data for Green Bar
                        backgroundColor: '#1ca477', // var(--primary-green)
                        borderRadius: 4, // Curved top edges like screenshot
                        barPercentage: 0.6,
                        categoryPercentage: 0.8
                    },
                    {
                        label: 'Avg Peer Score',
                        data: [78, 75, 82], // Dummy Data for Purple Bar
                        backgroundColor: '#7a65d8', // var(--purple)
                        borderRadius: 4,
                        barPercentage: 0.6,
                        categoryPercentage: 0.8
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false // We built a custom HTML legend for exact styling match
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
                            display: false, // Hide vertical grid lines for cleaner look
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