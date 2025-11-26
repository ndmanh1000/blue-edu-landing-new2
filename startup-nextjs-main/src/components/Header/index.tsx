"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import menuData from "./menuData";


const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // Active section tracking for scroll spy
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuData
        .flatMap((menu) => {
          if (menu.path && menu.path.startsWith("#")) {
            return [menu.path.substring(1)];
          }
          if (menu.submenu) {
            return menu.submenu
              .filter((sub) => sub.path && sub.path.startsWith("#"))
              .map((sub) => sub.path.substring(1));
          }
          return [];
        })
        .filter(Boolean);

      // Add home section if it exists
      const allSections = ["home", ...sections.filter((s) => s !== "home")];

      // If at top of page, set home as active
      if (window.scrollY < 100) {
        setActiveSection("home");
        return;
      }

      // Find the section currently in view
      let currentSection = "";
      const scrollPosition = window.scrollY + 150; // Offset for header

      for (let i = allSections.length - 1; i >= 0; i--) {
        const sectionId = allSections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offsetTop = element.offsetTop;

          // Check if section is in viewport or above current scroll position
          if (scrollPosition >= offsetTop || rect.top <= 150) {
            currentSection = sectionId;
            break;
          }
        }
      }

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    // Initial check with small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      handleScroll();
    }, 100);

    // Listen to scroll events with throttling
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [navbarOpen]);

  const usePathName = usePathname();

  // Smooth scroll function with easing
  const smoothScrollTo = (targetPosition: number, duration: number = 800) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    // Easing function for smooth animation (ease-in-out-cubic)
    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  // Handle smooth scroll for anchor links
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    // If it's an anchor link (starts with #)
    if (path.startsWith("#")) {
      e.preventDefault();
      const targetId = path.substring(1);

      // If not on home page, navigate to home first
      if (usePathName !== "/") {
        window.location.href = `/${path}`;
        return;
      }

      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Close mobile menu if open
        setNavbarOpen(false);

        // Small delay to ensure menu closes smoothly
        setTimeout(() => {
          // Calculate offset for sticky header (with extra padding for better spacing)
          const headerOffset = sticky ? 100 : 20;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          // Use custom smooth scroll for better control
          smoothScrollTo(offsetPosition, 800);
        }, 100);
      }
    }
  };

  return (
    <>
      <header
        className={`header top-0 left-0 z-40 flex w-full items-center ${sticky
          ? "dark:bg-gray-dark dark:shadow-sticky-dark shadow-sticky fixed z-[9999] bg-white/80 backdrop-blur-xs transition"
          : "absolute bg-transparent z-40"
          }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-auto max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                onClick={(e) => {
                  // If already on home page, scroll to top
                  if (usePathName === "/") {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                className={`header-logo block ${sticky ? "py-2" : "py-4"
                  } `}
              >
                <Image
                  src="/images/logo/logo5.png"
                  alt="logo"
                  width={160}
                  height={50}
                  className="h-auto w-auto max-w-[155px] object-contain"
                  priority
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-end px-4">
              <div className="ml-auto">
                {/* Desktop Navigation */}
                <nav
                  id="navbarCollapse"
                  className="hidden lg:block lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 lg:ml-auto"
                >
                  <ul className="flex space-x-12">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            onClick={(e) => handleLinkClick(e, menuItem.path)}
                            className={`flex py-2 text-base font-medium lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 transition-colors ${(menuItem.path.startsWith("#") && activeSection === menuItem.path.substring(1)) ||
                              (usePathName === menuItem.path || (menuItem.path.startsWith("#") && typeof window !== "undefined" && window.location.hash === menuItem.path))
                              ? "text-primary font-semibold dark:text-white"
                              : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                              }`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className="text-dark group-hover:text-primary flex cursor-pointer items-center justify-between py-2 text-base font-medium lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 dark:text-white/70 dark:group-hover:text-white"
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="25" height="24" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            <div
                              className={`submenu dark:bg-dark relative top-full left-0 rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${openIndex === index ? "block" : "hidden"
                                }`}
                            >
                              {menuItem.submenu.map((submenuItem, index) => (
                                <Link
                                  href={submenuItem.path}
                                  onClick={(e) => {
                                    if (submenuItem.path.startsWith("#")) {
                                      handleLinkClick(e, submenuItem.path);
                                    }
                                  }}
                                  key={index}
                                  className={`block rounded-sm py-2.5 text-sm font-medium lg:px-3 transition-colors ${(submenuItem.path.startsWith("#") && activeSection === submenuItem.path.substring(1))
                                    ? "text-primary font-semibold dark:text-white"
                                    : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                                    }`}
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className={`ring-primary relative z-[999999] block rounded-lg p-2 focus:ring-2 lg:hidden transition-all duration-300 ${navbarOpen ? "bg-primary/10" : ""}`}
                >
                  <div className="flex h-6 w-6 flex-col items-center justify-center gap-1.5">
                    <span
                      className={`block h-0.5 w-6 bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? "translate-y-2 rotate-45" : ""}`}
                    />
                    <span
                      className={`block h-0.5 w-6 bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? "opacity-0" : ""}`}
                    />
                    <span
                      className={`block h-0.5 w-6 bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? "-translate-y-2 -rotate-45" : ""}`}
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Outside header to avoid stacking context issues */}
      <div
        className={`fixed inset-0 z-[999998] bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${navbarOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={navbarToggleHandler}
      />

      {/* Mobile Menu Sidebar - Outside header to avoid stacking context issues */}
      <div
        className={`fixed top-0 right-0 z-[999999] h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out dark:bg-gray-dark lg:hidden ${navbarOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4 dark:border-gray-700">
          <Image
            src="/images/logo/logo5.png"
            alt="logo"
            width={100}
            height={33}
            className="h-auto w-auto max-w-[130px] object-contain"
          />
          <button
            onClick={navbarToggleHandler}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            aria-label="Close menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="h-[calc(100%-80px)] overflow-y-auto px-4 py-6">
          <ul className="space-y-2">
            {menuData.map((menuItem, index) => (
              <li key={index} className="group">
                {menuItem.path ? (
                  <Link
                    href={menuItem.path}
                    onClick={(e) => {
                      handleLinkClick(e, menuItem.path);
                      setNavbarOpen(false);
                    }}
                    className={`flex items-center gap-3 rounded-lg px-4 py-3 text-base font-semibold transition-all hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/20 ${(menuItem.path.startsWith("#") && activeSection === menuItem.path.substring(1)) ||
                      (usePathName === menuItem.path || (menuItem.path.startsWith("#") && typeof window !== "undefined" && window.location.hash === menuItem.path))
                      ? "bg-primary/10 text-primary dark:text-white"
                      : "text-dark dark:text-white/70"
                      }`}
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/20">
                      {index === 0 && "🏠"}
                      {index === 1 && "⚠️"}
                      {index === 2 && "🤖"}
                      {index === 3 && "📚"}
                      {index === 4 && "📄"}
                    </span>
                    {menuItem.title}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => handleSubmenu(index)}
                      className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-semibold text-dark transition-all hover:bg-primary/10 hover:text-primary dark:text-white/70 dark:hover:bg-primary/20"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/20">
                          📄
                        </span>
                        {menuItem.title}
                      </div>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                      >
                        <path
                          d="M5 7.5L10 12.5L15 7.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                    >
                      <ul className="ml-4 mt-2 space-y-1 border-l-2 border-primary/20 pl-4">
                        {menuItem.submenu?.map((submenuItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              href={submenuItem.path}
                              onClick={(e) => {
                                if (submenuItem.path.startsWith("#")) {
                                  handleLinkClick(e, submenuItem.path);
                                }
                                setNavbarOpen(false);
                              }}
                              className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition-all hover:bg-primary/10 hover:text-primary ${(submenuItem.path.startsWith("#") && activeSection === submenuItem.path.substring(1))
                                ? "bg-primary/10 text-primary font-semibold dark:text-white"
                                : "text-dark dark:text-white/70 dark:hover:text-white"
                                }`}
                            >
                              {submenuItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>

          {/* Theme Toggler in Mobile Menu */}

        </div>
      </div>
    </>
  );
};

export default Header;
