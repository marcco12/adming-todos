// Admin Dashboard https://tailwindcomponents.com/component/dashboard-12
import  {Sidebar, TopMenu}  from '@/components';

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar />
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">
        <TopMenu />
        <div className="px-6 pt-6">
          {/* <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"> */}
            {children}
          {/* </div>   */}
        </div>
      </div>
    </>
  );
}