"use client";
import Link from "next/link";
import HeaderNavigation from "./HeaderNavigation";
import PageContainer from "./PageContainer";
import ResponsiveMenu from "./ResponsiveMenu";
import ProfileButton from "./ProfileButton";

export default function Header() {
  const href = "/";

  return (
    <nav className="p-4 border-b">
      {/* Responsive Menu */}
      <PageContainer>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            {/* Responsive Menu */}
            <ResponsiveMenu />
            {/* Passhref => utilisé pour passer l'attribut href au composant enfant */}
            <Link href={href} passHref>
              <h1
                className="text-2xl font-bold"
                // style={{
                //   backgroundImage:
                //     "linear-gradient(to bottom right, #d85858, #4242ac)",
                //   WebkitBackgroundClip: "text",
                //   backgroundClip: "text",
                //   color: "transparent",
                // }}
              >
                Selling Site
              </h1>
            </Link>
          </div>

          {/* Navigation shadcn */}
          <HeaderNavigation />

          {/* Buttons */}
          <div className="flex justify-center gap-2">
            {/* Toggle */}
            <ProfileButton />
          </div>
        </div>
      </PageContainer>
    </nav>
  );
}
