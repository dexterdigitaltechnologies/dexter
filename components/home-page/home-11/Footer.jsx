import Link from "next/link";

const Footer = () => {
  const footerItems = [
    {
      title: "Links",
      links: [
        { label: "Home", url: "/" },
        { label: "About us", url: "/pages-menu/about-us-v1" },
        { label: "Privacy Policy", url: "/privacy-policy" },
        { label: "Contact", url: "/contact" },
      ],
      className: "col-lg-2 col-md-3 col-sm-6 mb-30",
    },
    {
      title: "Services",
      links: [
        { label: "Software Development", url: "../services/software-development" },
        { label: "Digital Marketing", url: "../services/digital-marketing" },
        { label: "Web Design & Development", url: "../services/web-design-development" },
        { label: "UI/UX Design  ", url: "../services/ui-ux-design" },
        { label: "Consulting and Strategy", url: "../services/consulting-strategy" },
        { label: " ERP Implementation  ", url: "../services/erp-implimentation" },
        { label: "Mobile App Development", url: "../services/mobile-app-developemnt" },
      ],
      className: "col-lg-4 col-md-4 col-sm-6 mb-30",
    },
  
  ];

  return (
    <>
      {footerItems.map((item, index) => (
        <div key={index} className={item.className}>
          <h5 className="footer-title tx-dark fw-normal">{item.title}</h5>
          <ul className="footer-nav-link style-none">
            {item.links.map((link, i) => (
              <li key={i}>
                <Link href={link.url}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Footer;
