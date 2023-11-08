const columns = [
  {
    title: "Links",
    links: [
      { label: "Home", url: "/" },
      { label: "About Us", url: "#" },
      { label: "Contact", url: "/contact" },
      { label: "Privacy Policy", url: "/privacy-policy" },
    ],
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
  },
];

const Footer2 = () => {
  return (
    <>
      {columns.map((column, index) => (
        <div className="col-xl-3 col-lg-3 col-sm-4 mb-30" key={index}>
          <h5 className="footer-title tx-dark fw-normal">{column.title}</h5>
          <ul className="footer-nav-link style-none">
            {column.links.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Footer2;
