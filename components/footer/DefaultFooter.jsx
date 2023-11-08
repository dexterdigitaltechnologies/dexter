import Link from "next/link";
import Footer2 from "./Footer";
import NewsLetter from "./NewsLetter";
import CopyrightFooter2 from "./CopyrightFooter2";

const DefaultFooter = () => {
  return (
    <div className="footer-style-eleven theme-basic-footer position-relative">
      <div className="bg-wrapper position-relative">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-2 footer-intro mb-40">
              <div className="logo">
                <Link href="/">
                  <img src="/images/dexter/logo.png" alt="brand" />
                </Link>
              </div>
            </div>
            {/* End .col */}

            <Footer2 />

            {/* End .col-xl-4 */}
          </div>
          {/* End .row */}
        </div>
        {/* /.container */}
      </div>
      {/* /.bg-wrapper */}
      <CopyrightFooter2 />
      {/* /.bottom-footer */}
    
    </div>
  );
};

export default DefaultFooter;
