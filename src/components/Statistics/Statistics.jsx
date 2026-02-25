import { PureComponent } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from "recharts";

// Topic-specific colors
const data = [
  { name: "React", value: 8, color: "#61DBFB" }, // React Blue
  { name: "JavaScript", value: 9, color: "#F7DF1E" }, // JS Yellow
  { name: "CSS", value: 8, color: "#264de4" }, // CSS Blue
  { name: "GitHub", value: 11, color: "#333" }, // GitHub Dark
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text
        x={cx}
        y={cy}
        dy={8}
        textAnchor='middle'
        fill='currentColor'
        fontSize={18}
      >
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill='none'
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke='none' />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill='currentColor'
      >
        {`Score ${value}`}
      </text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill='currentColor'
        opacity={0.6}
      >
        {`(${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default class Example extends PureComponent {
  state = {
    activeIndex: 0,
  };

  onPieEnter = (_, index) => {
    this.setState({ activeIndex: index });
  };

  render() {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    const topTopic = data.reduce((best, item) =>
      item.value > best.value ? item : best
    );

    return (
      <div className='relative overflow-hidden min-h-screen bg-base-200/60 page-aurora px-4 sm:px-6 lg:px-12 py-10'>
        <div className='max-w-6xl mx-auto space-y-10'>
          <header className='text-center space-y-4'>
            <p className='text-sm font-semibold uppercase tracking-[0.3em] text-base-content/60'>
              Analytics
            </p>
            <h1 className='text-3xl sm:text-4xl font-bold text-base-content'>
              Topic Performance
            </h1>
            <p className='text-base text-base-content/70 max-w-2xl mx-auto'>
              A quick look at your quiz coverage by topic and where your focus
              is strongest.
            </p>
          </header>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='rounded-2xl bg-base-100/80 p-5 shadow-lg ring-1 ring-base-300/60'>
              <p className='text-xs font-semibold uppercase tracking-[0.3em] text-base-content/50'>
                Total Questions
              </p>
              <p className='text-3xl font-bold text-primary mt-2'>{total}</p>
            </div>
            <div className='rounded-2xl bg-base-100/80 p-5 shadow-lg ring-1 ring-base-300/60'>
              <p className='text-xs font-semibold uppercase tracking-[0.3em] text-base-content/50'>
                Strongest Topic
              </p>
              <p className='text-2xl font-semibold text-base-content mt-2'>
                {topTopic.name}
              </p>
            </div>
            <div className='rounded-2xl bg-base-100/80 p-5 shadow-lg ring-1 ring-base-300/60'>
              <p className='text-xs font-semibold uppercase tracking-[0.3em] text-base-content/50'>
                Focus Target
              </p>
              <p className='text-2xl font-semibold text-base-content mt-2'>
                {data[0].name}
              </p>
            </div>
          </div>

          <div className='rounded-3xl bg-base-100/80 p-6 shadow-2xl ring-1 ring-base-300/60'>
            <div className='text-center mb-6'>
              <h2 className='text-2xl font-semibold text-base-content'>
                Quiz Distribution
              </h2>
              <p className='text-sm text-base-content/60'>
                Hover to see topic scores and percentages.
              </p>
            </div>
            <div className='flex justify-center items-center text-base-content'>
              <ResponsiveContainer width='100%' maxWidth={600} height={450}>
                <PieChart>
                  <Pie
                    activeIndex={this.state.activeIndex}
                    activeShape={renderActiveShape}
                    data={data}
                    cx='50%'
                    cy='50%'
                    innerRadius={85}
                    outerRadius={110}
                    dataKey='value'
                    onMouseEnter={this.onPieEnter}
                    isAnimationActive={true}
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
