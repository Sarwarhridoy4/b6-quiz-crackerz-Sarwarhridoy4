import { useMemo, useState } from "react";
import { useLoaderData } from "react-router";
import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from "recharts";

const COLORS = [
  "#06B6D4",
  "#3B82F6",
  "#10B981",
  "#F59E0B",
  "#F43F5E",
  "#8B5CF6",
  "#14B8A6",
  "#EF4444",
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
        fontSize={16}
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
        {`Questions ${value}`}
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

const Statistics = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchText, setSearchText] = useState("");
  const topics = useLoaderData().data;

  const chartData = useMemo(() => {
    const query = searchText.trim().toLowerCase();
    const filtered = query
      ? topics.filter((topic) => topic.name.toLowerCase().includes(query))
      : topics;

    return filtered.map((topic, index) => ({
      id: topic.id,
      name: topic.name,
      value: Math.min(Number(topic.total) || 0, 10),
      color: COLORS[index % COLORS.length],
    }));
  }, [topics, searchText]);

  const total = chartData.reduce((sum, item) => sum + item.value, 0);
  const topTopic = chartData.length
    ? chartData.reduce((best, item) => (item.value > best.value ? item : best))
    : null;

  return (
    <div className='relative overflow-hidden min-h-screen bg-base-200/60 page-aurora px-4 sm:px-6 lg:px-12 py-10'>
      <div className='max-w-6xl mx-auto space-y-8'>
        <header className='text-center space-y-4'>
          <p className='text-sm font-semibold uppercase tracking-[0.3em] text-base-content/60'>
            Analytics
          </p>
          <h1 className='text-3xl sm:text-4xl font-bold text-base-content'>
            Topic Statistics (10 Questions Each Max)
          </h1>
          <p className='text-base text-base-content/70 max-w-2xl mx-auto'>
            Search a topic to filter the chart and cards. Statistics update
            instantly based on your search.
          </p>
        </header>

        <div className='rounded-2xl bg-base-100/80 p-4 sm:p-5 shadow-lg ring-1 ring-base-300/60'>
          <label className='input input-bordered flex items-center gap-2 rounded-full bg-base-100/90'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              fill='currentColor'
              className='h-4 w-4 opacity-70'
            >
              <path
                fillRule='evenodd'
                d='M9.965 11.026a5.5 5.5 0 1 1 1.06-1.06l3.754 3.754a.75.75 0 1 1-1.06 1.06l-3.754-3.754Z'
                clipRule='evenodd'
              />
            </svg>
            <input
              type='text'
              className='grow'
              placeholder='Search topic in statistics...'
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </label>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='rounded-2xl bg-base-100/80 p-5 shadow-lg ring-1 ring-base-300/60'>
            <p className='text-xs font-semibold uppercase tracking-[0.3em] text-base-content/50'>
              Total Questions
            </p>
            <p className='text-3xl font-bold text-primary mt-2'>{total}</p>
          </div>
          <div className='rounded-2xl bg-base-100/80 p-5 shadow-lg ring-1 ring-base-300/60'>
            <p className='text-xs font-semibold uppercase tracking-[0.3em] text-base-content/50'>
              Top Topic
            </p>
            <p className='text-2xl font-semibold text-base-content mt-2'>
              {topTopic ? topTopic.name : "No result"}
            </p>
          </div>
          <div className='rounded-2xl bg-base-100/80 p-5 shadow-lg ring-1 ring-base-300/60'>
            <p className='text-xs font-semibold uppercase tracking-[0.3em] text-base-content/50'>
              Topics Found
            </p>
            <p className='text-3xl font-bold text-secondary mt-2'>
              {chartData.length}
            </p>
          </div>
        </div>

        <div className='rounded-3xl bg-base-100/80 p-6 shadow-2xl ring-1 ring-base-300/60'>
          <div className='text-center mb-6'>
            <h2 className='text-2xl font-semibold text-base-content'>
              Quiz Distribution
            </h2>
            <p className='text-sm text-base-content/60'>
              Values are capped at 10 questions per topic.
            </p>
          </div>

          {chartData.length ? (
            <div className='flex justify-center items-center text-base-content'>
              <ResponsiveContainer width='100%' maxWidth={620} height={460}>
                <PieChart>
                  <Pie
                    activeIndex={Math.min(activeIndex, chartData.length - 1)}
                    activeShape={renderActiveShape}
                    data={chartData}
                    cx='50%'
                    cy='50%'
                    innerRadius={90}
                    outerRadius={115}
                    dataKey='value'
                    onMouseEnter={(_, index) => setActiveIndex(index)}
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={entry.id} fill={entry.color || COLORS[index]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <div className='text-center text-base-content/70 py-10'>
              No topics found for this search.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
