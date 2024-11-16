import AnalyticsChart from '@/components/dashboard/AnalyticsChart';
import BarChartMixed from '@/components/dashboard/BarChartMixed';
import DashboardCard from '@/components/dashboard/DashboardCard';
import PieChartInteractive from '@/components/dashboard/PieChartInteractive';
import PostsTable from '@/components/posts/PostsTable';
import {
  ChartColumn,
  ChartNoAxesCombined,
  Folder,
  LucideIcon,
  Newspaper,
  NotebookPen,
  Users,
} from 'lucide-react';

export default function Home() {
  return (
    <div className='flex flex-col gap-6'>
      {/* <div className='flex flex-col gap-4 md:flex-row  md:flex-wrap justify-between mb-4'> */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <DashboardCard
          title='Data'
          count={200}
          icon={<ChartColumn className='text-slate-500' size={60} />}
        />
        <DashboardCard
          title='Teachers'
          count={200}
          icon={<Users className='text-slate-500' size={60} />}
        />
        <DashboardCard
          title='Categories'
          count={200}
          icon={<Folder className='text-slate-500' size={60} />}
        />
        <DashboardCard
          title='Training'
          count={200}
          icon={<NotebookPen className='text-slate-500' size={60} />}
        />
      </div>
      <AnalyticsChart />
      <PieChartInteractive />
      <BarChartMixed />
      <PostsTable />
    </div>
  );
}
