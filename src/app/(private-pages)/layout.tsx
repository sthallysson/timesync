import Header from '../../components/header';
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
      <section className="mt-20 ml-52 py-8 px-16">{children}</section>
    </body>
  );
}
