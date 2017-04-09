
class PieChart {
  constructor(public greeting: string) {
  }

  public greet(): string {
    return '<h1>' + this.greeting + '</h1>';
  }
}

export default PieChart;