import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import About from './pages/About'
import Careers from './pages/Careers'
import RequestInformation from './pages/RequestInformation'
import BaghouseFAQ from './pages/BaghouseFAQ'
import WhatIsBaghouse from './pages/WhatIsBaghouse'
import BaghouseFieldServices from './pages/BaghouseFieldServices'
import SheetMetalDucting from './pages/SheetMetalDucting'
import Consulting from './pages/Consulting'
import SpareParts from './pages/SpareParts'
import BaghouseCleaningMethods from './pages/BaghouseCleaningMethods'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/request-information" element={<RequestInformation />} />
          <Route path="/about" element={<About />} />
          <Route path="/sheet-metal" element={<Services />} />
          <Route path="/spare-parts" element={<SpareParts />} />
          <Route path="/baghouse" element={<Services />} />
          <Route path="/baghouse/faq" element={<BaghouseFAQ />} />
          <Route path="/baghouse/what-is-baghouse" element={<WhatIsBaghouse />} />
          <Route path="/baghouse/cleaning-methods" element={<BaghouseCleaningMethods />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/baghouse/field-services" element={<BaghouseFieldServices />} />
          <Route path="/services/sheet-metal-ducting" element={<SheetMetalDucting />} />
          <Route path="/services/consulting" element={<Consulting />} />
          <Route path="/services/spare-parts" element={<SpareParts />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
