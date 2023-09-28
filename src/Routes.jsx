import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Accountsettingquestions = React.lazy(() =>
  import("pages/Accountsettingquestions"),
);
const Accountsettingappsandweb = React.lazy(() =>
  import("pages/Accountsettingappsandweb"),
);
const Accountsettingdeveloper = React.lazy(() =>
  import("pages/Accountsettingdeveloper"),
);
const Accountsettingpaymentmethods = React.lazy(() =>
  import("pages/Accountsettingpaymentmethods"),
);
const Accountsettingsecurity = React.lazy(() =>
  import("pages/Accountsettingsecurity"),
);
const Accountsettingmessenger = React.lazy(() =>
  import("pages/Accountsettingmessenger"),
);
const Accountsettinglocalization = React.lazy(() =>
  import("pages/Accountsettinglocalization"),
);
const Accountsettingprofile = React.lazy(() =>
  import("pages/Accountsettingprofile"),
);
const Dashboardshareprofile = React.lazy(() =>
  import("pages/Dashboardshareprofile"),
);
const Dashboardtraderprogrambadges = React.lazy(() =>
  import("pages/Dashboardtraderprogrambadges"),
);
const Dashboardtradestatistics = React.lazy(() =>
  import("pages/Dashboardtradestatistics"),
);
const Dashboardfavoriteoffers = React.lazy(() =>
  import("pages/Dashboardfavoriteoffers"),
);
const Dashboardmyoffers = React.lazy(() => import("pages/Dashboardmyoffers"));
const Dashboardrecenttradepartner = React.lazy(() =>
  import("pages/Dashboardrecenttradepartner"),
);
const DashboardtradehistoryOne = React.lazy(() =>
  import("pages/DashboardtradehistoryOne"),
);
const Dashboardtradehistory = React.lazy(() =>
  import("pages/Dashboardtradehistory"),
);
const Rockitlymarketplace = React.lazy(() =>
  import("pages/Rockitlymarketplace"),
);
const Sellp2ptradingdetails = React.lazy(() =>
  import("pages/Sellp2ptradingdetails"),
);
const Sellp2ptradinglisting = React.lazy(() =>
  import("pages/Sellp2ptradinglisting"),
);
const Buyp2ptradingdetails = React.lazy(() =>
  import("pages/Buyp2ptradingdetails"),
);
const Buyp2ptradinglisting = React.lazy(() =>
  import("pages/Buyp2ptradinglisting"),
);
const Rockitlysignup = React.lazy(() => import("pages/Rockitlysignup"));
const Rockitlylogin = React.lazy(() => import("pages/Rockitlylogin"));
const Rockitlyescrowsystem = React.lazy(() =>
  import("pages/Rockitlyescrowsystem"),
);
const Rockitlytestimonials = React.lazy(() =>
  import("pages/Rockitlytestimonials"),
);
const Termsofuse = React.lazy(() => import("pages/Termsofuse"));
const Contact = React.lazy(() => import("pages/Contact"));
const Rockitlyabout = React.lazy(() => import("pages/Rockitlyabout"));
const P2ptrading = React.lazy(() => import("pages/P2ptrading"));
const RockitlymarketplaceOne = React.lazy(() =>
  import("pages/RockitlymarketplaceOne"),
);
const Rockitlylandingpage = React.lazy(() =>
  import("pages/Rockitlylandingpage"),
);
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/rockitlylandingpage"
            element={<Rockitlylandingpage />}
          />
          <Route
            path="/rockitlymarketplaceone"
            element={<RockitlymarketplaceOne />}
          />
          <Route path="/p2ptrading" element={<P2ptrading />} />
          <Route path="/rockitlyabout" element={<Rockitlyabout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/termsofuse" element={<Termsofuse />} />
          <Route
            path="/rockitlytestimonials"
            element={<Rockitlytestimonials />}
          />
          <Route
            path="/rockitlyescrowsystem"
            element={<Rockitlyescrowsystem />}
          />
          <Route path="/rockitlylogin" element={<Rockitlylogin />} />
          <Route path="/rockitlysignup" element={<Rockitlysignup />} />
          <Route
            path="/buyp2ptradinglisting"
            element={<Buyp2ptradinglisting />}
          />
          <Route
            path="/buyp2ptradingdetails"
            element={<Buyp2ptradingdetails />}
          />
          <Route
            path="/sellp2ptradinglisting"
            element={<Sellp2ptradinglisting />}
          />
          <Route
            path="/sellp2ptradingdetails"
            element={<Sellp2ptradingdetails />}
          />
          <Route
            path="/rockitlymarketplace"
            element={<Rockitlymarketplace />}
          />
          <Route
            path="/dashboardtradehistory"
            element={<Dashboardtradehistory />}
          />
          <Route
            path="/dashboardtradehistoryone"
            element={<DashboardtradehistoryOne />}
          />
          <Route
            path="/dashboardrecenttradepartner"
            element={<Dashboardrecenttradepartner />}
          />
          <Route path="/dashboardmyoffers" element={<Dashboardmyoffers />} />
          <Route
            path="/dashboardfavoriteoffers"
            element={<Dashboardfavoriteoffers />}
          />
          <Route
            path="/dashboardtradestatistics"
            element={<Dashboardtradestatistics />}
          />
          <Route
            path="/dashboardtraderprogrambadges"
            element={<Dashboardtraderprogrambadges />}
          />
          <Route
            path="/dashboardshareprofile"
            element={<Dashboardshareprofile />}
          />
          <Route
            path="/accountsettingprofile"
            element={<Accountsettingprofile />}
          />
          <Route
            path="/accountsettinglocalization"
            element={<Accountsettinglocalization />}
          />
          <Route
            path="/accountsettingmessenger"
            element={<Accountsettingmessenger />}
          />
          <Route
            path="/accountsettingsecurity"
            element={<Accountsettingsecurity />}
          />
          <Route
            path="/accountsettingpaymentmethods"
            element={<Accountsettingpaymentmethods />}
          />
          <Route
            path="/accountsettingdeveloper"
            element={<Accountsettingdeveloper />}
          />
          <Route
            path="/accountsettingappsandweb"
            element={<Accountsettingappsandweb />}
          />
          <Route
            path="/accountsettingquestions"
            element={<Accountsettingquestions />}
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
