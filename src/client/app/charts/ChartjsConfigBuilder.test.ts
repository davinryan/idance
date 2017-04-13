import ChartjsConfigBuilder from './ChartjsConigBuilder';

it('ChartjsConfigBuilder can build basic config', () => {
  const data =
      [
        {
          label: "google / organic",
          data: 138
        },
        {
          label: "cerocwellington.com / referral",
          data: 99
        },
        {
          label: "(direct) / (none)",
          data: 67
        }];
  const result = {
    labels: [
      "Red",
      "Blue",
      "Yellow"
    ],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ]
      }]
  };
  expect(ChartjsConfigBuilder.buildChartDataConfigFromData(data)).toBe(result);
});