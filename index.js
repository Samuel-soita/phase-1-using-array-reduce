

// Code your solution here
const batteryBatches = [
  { battery: 4 },
  { battery: 5 },
  { battery: 3 },
  { battery: 4 },
  { battery: 3 },
  { battery: 4 },
  { battery: 4 },
  { battery: 4 }
];

const totalBatteries = batteryBatches.reduce((total, batch) => total + batch.battery, 0);

