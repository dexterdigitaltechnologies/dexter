import React from "react";
import Social from "../home-page/home-11/Social";
const Footer = () => {
  const links = [
    {
      id: 1,
      title: "Links",
      column: "col-lg-2 col-md-3 col-sm-6 mb-30",
      items: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "#" },
        { label: "Contact", href: "/contact" },
        { label: "Privacy Policy", href: "/privacy-policy" },
      ],
    },
    {
      id: 2,
      title: "Services",
      column: "col-lg-3 col-md-4 col-sm-6 mb-30",
      items: [
        { label: "Software Development", href: "../services/software-development" },
        { label: "Digital Marketing", href: "../services/digital-marketing" },
        { label: "Web Design & Development", href: "../services/web-design-development" },
        { label: "UI/UX Design  ", href: "../services/ui-ux-design" },
        { label: "Consulting and Strategy", href: "../services/consulting-strategy" },
        { label: " ERP Implementation  ", href: "../services/erp-implimentation" },
        { label: "Mobile App Development", href: "../services/mobile-app-developemnt" },
      ],
    },
  ];

  const socialIcons = [
    {
      iconClass: "fab fa-facebook-f",
      link: "#",
    },
    // {
    //   iconClass: "fab fa-twitter",
    //   link: "#",
    // },
    {
      iconClass: "fab fa-linkedin-in",
      link: "#",
    },
  ];

  return (
    <>
      {links.map((link) => (
        <div className={link.column} key={link.id}>
          <h5 className="footer-title text-dark fw-500">{link.title}</h5>
          <ul className="footer-nav-link style-none">
            {link.items.map((item, i) => (
              <li key={i}>
                <a href={item.href}>{item.label}</a>
              
              </li>
            ))}
            {/* <li> <a href="/privacy.pdf" download="privacy policy">Privacy Policy</a></li> */}
          </ul>
        </div>
      ))}

<div className="col-md-3 col-sm-6 mb-30">
                <h5 className="footer-title text-dark fw-500">Address</h5>
                <p className="fs-17">
                  2 Fluture Court, Tarneit, Victoria 3029 Australia
                </p>
                <a
                  href="mailto:januinc@company.com"
                  className="email tran3s fs-17"
                >
                  info@dexterinc.com
                </a>
                <br />
                <a
                  href="tel:+7576994478"
                  className="mobile tran3s fs-20 mt-20 mb-30"
                >
                  1300 864 393
                </a>
               
              </div>
    </>
  );
};

export default Footer;
