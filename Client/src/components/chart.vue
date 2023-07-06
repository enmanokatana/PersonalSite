<template>
  <div>
    <canvas id="myChart" class="w-600 h-300 ml-10"></canvas>
  </div>
</template>

<script setup lang="ts">
import Chart from 'chart.js/auto';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'Try hiding me',
    data: [65, 59, 80, 81, 26, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
  }]
};

const config = {
  type: 'line',
  data: data,
  options: {
    transitions: {
      show: {
        animations: {
          x: { from: 0 },
          y: { from: 0 }
        }
      },
      hide: {
        animations: {
          x: { to: 0 },
          y: { to: 0 }
        }
      }
    }
  }
};

// Wait for the component to be mounted
import { onMounted } from 'vue';
onMounted(() => {
  const myChart = new Chart(document.getElementById('myChart'), config);
});
</script>
