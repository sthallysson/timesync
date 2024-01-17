import Header from '../../components/Header';
import SideBarMenu from '../../components/SideBarMenu';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body>
      <Header />
      <SideBarMenu />
      <section className="mt-20 ml-52 px-4 py-2 min-h-[calc(100vh-5rem)] bg-[#CED4DA]">
        {children}
      </section>
    </body>
  );
}
