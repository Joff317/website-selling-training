import HeaderNavigation from "./HeaderNavigation";
import PageContainer from "./PageContainer";

export default function Header() {
  return (
    <nav className="p-4 border-b">
      {/* Responsive Menu */}
      <PageContainer>
        <div className="flex items-center justify-center w-full">
          <HeaderNavigation />
        </div>
      </PageContainer>
    </nav>
  );
}
