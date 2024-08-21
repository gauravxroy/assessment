import { Home } from "lucide-react";

function Navigations() {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex ">
          <a
            href="#"
            className="ml-1 inline-flex  items-center text-sm  text-gray-800 hover:underline md:ml-2"
          >
            Home
          </a>
        </li>
        <li>
          <div className="flex items-center">
            <span className="mx-2.5 text-gray-800 "> {">"}</span>
            <a
              href="#"
              className="ml-1 text-sm   text-gray-800 hover:underline md:ml-2"
            >
              CNAPP V2
            </a>
          </div>
        </li>
      </ol>
    </nav>
  );
}

export default Navigations;
