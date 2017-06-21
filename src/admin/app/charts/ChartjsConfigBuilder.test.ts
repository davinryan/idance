import ChartjsConfigBuilder from './ChartjsConigBuilder';

it('ChartjsConfigBuilder can build basic config', () => {
  const data =
      [
        {
          label: 'google / organic',
          data: 138
        },
        {
          label: 'cerocwellington.com / referral',
          data: 99
        },
        {
          label: '(direct) / (none)',
          data: 67
        }];
  const expected = {
    labels: [
      'google / organic',
      'cerocwellington.com / referral',
      '(direct) / (none)'
    ],
    datasets: [
      {
        data: [138, 99, 67],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
        ]
      }]
  };
  const result = ChartjsConfigBuilder.buildChartDataConfigFromData(data);
  expect(result).toEqual(expected);
});