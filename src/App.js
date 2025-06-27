"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const framer_motion_1 = require("framer-motion");
const Navbar_1 = __importDefault(require("./components/Navbar"));
const Hero_1 = __importDefault(require("./components/Hero"));
const About_1 = __importDefault(require("./components/About"));
const Skills_1 = __importDefault(require("./components/Skills"));
const Projects = react_1.default.lazy(() => Promise.resolve().then(() => __importStar(require('./components/Projects'))));
const Certifications_1 = __importDefault(require("./components/Certifications"));
const Now_1 = __importDefault(require("./components/Now"));
const Blog = react_1.default.lazy(() => Promise.resolve().then(() => __importStar(require('./components/Blog'))));
const Contact_1 = __importDefault(require("./components/Contact"));
const Footer_1 = __importDefault(require("./components/Footer"));
function App() {
    return (<div className="min-h-screen bg-dark-900">
      <Navbar_1.default />
      
      <main id="main-content">
        <framer_motion_1.motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Hero_1.default />
          <About_1.default />
          <Skills_1.default />
          <react_1.Suspense fallback={<div className="text-center py-10">Loading Projects...</div>}>
          <Projects />
          </react_1.Suspense>
          <Certifications_1.default />
          <Now_1.default />
          <react_1.Suspense fallback={<div className="text-center py-10">Loading Blog...</div>}>
          <Blog />
          </react_1.Suspense>
          <Contact_1.default />
        </framer_motion_1.motion.div>
      </main>
      
      <Footer_1.default />
    </div>);
}
exports.default = App;
