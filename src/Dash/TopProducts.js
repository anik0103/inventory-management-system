const TopProducts = () => {
  return (
    <div className="bg-slate-400 rounded-xl p-4 w-[500px] mx-auto mt-[-550px] ml-[300px] shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Popular Products</h2>

      <div className="space-y-4">
        {/* Product Card */}
        <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
          <img
            src="https://legends.broadleafcloud.com/api/asset/content/RMCFMZ0919_01.jpg?contextRequest=%7B%22forceCatalogForFetch%22:false,%22forceFilterByCatalogIncludeInheritance%22:false,%22forceFilterByCatalogExcludeInheritance%22:false,%22applicationId%22:%2201H4RD9NXMKQBQ1WVKM1181VD8%22,%22tenantId%22:%22REAL_MADRID%22%7D"
            alt="Product"
            className="w-14 h-14 object-cover rounded-md"
          />
          <div className="flex-1 ml-4">
            <h3 className="font-semibold text-sm text-gray-700">Mens Home Authentic Jersey</h3>
            <p className="text-blue-600 text-sm font-medium">$89.99</p>
          </div>
          <span className="text-gray-500 text-xs">96% Sold</span>
        </div>

        {/* Duplicate 5 more cards */}
        <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
          <img
            src="https://legends.broadleafcloud.com/api/asset/content/RMCFMZ0919_01.jpg?contextRequest=%7B%22forceCatalogForFetch%22:false,%22forceFilterByCatalogIncludeInheritance%22:false,%22forceFilterByCatalogExcludeInheritance%22:false,%22applicationId%22:%2201H4RD9NXMKQBQ1WVKM1181VD8%22,%22tenantId%22:%22REAL_MADRID%22%7D"
            alt="Product"
            className="w-14 h-14 object-cover rounded-md"
          />
          <div className="flex-1 ml-4">
            <h3 className="font-semibold text-sm text-gray-700">Mens Home Authentic Jersey</h3>
            <p className="text-blue-600 text-sm font-medium">$89.99</p>
          </div>
          <span className="text-gray-500 text-xs">93% Sold</span>
        </div>

        <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
          <img
            src="https://legends.broadleafcloud.com/api/asset/content/RMCFMZ0919_01.jpg?contextRequest=%7B%22forceCatalogForFetch%22:false,%22forceFilterByCatalogIncludeInheritance%22:false,%22forceFilterByCatalogExcludeInheritance%22:false,%22applicationId%22:%2201H4RD9NXMKQBQ1WVKM1181VD8%22,%22tenantId%22:%22REAL_MADRID%22%7D"
            alt="Product"
            className="w-14 h-14 object-cover rounded-md"
          />
          <div className="flex-1 ml-4">
            <h3 className="font-semibold text-sm text-gray-700">Mens Home Authentic Jersey</h3>
            <p className="text-blue-600 text-sm font-medium">$89.99</p>
          </div>
          <span className="text-gray-500 text-xs">90% Sold</span>
        </div>

        <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
          <img
            src="https://legends.broadleafcloud.com/api/asset/content/RMCFMZ0919_01.jpg?contextRequest=%7B%22forceCatalogForFetch%22:false,%22forceFilterByCatalogIncludeInheritance%22:false,%22forceFilterByCatalogExcludeInheritance%22:false,%22applicationId%22:%2201H4RD9NXMKQBQ1WVKM1181VD8%22,%22tenantId%22:%22REAL_MADRID%22%7D"
            alt="Product"
            className="w-14 h-14 object-cover rounded-md"
          />
          <div className="flex-1 ml-4">
            <h3 className="font-semibold text-sm text-gray-700">Mens Home Authentic Jersey</h3>
            <p className="text-blue-600 text-sm font-medium">$89.99</p>
          </div>
          <span className="text-gray-500 text-xs">88% Sold</span>
        </div>

        <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
          <img
            src="https://legends.broadleafcloud.com/api/asset/content/RMCFMZ0919_01.jpg?contextRequest=%7B%22forceCatalogForFetch%22:false,%22forceFilterByCatalogIncludeInheritance%22:false,%22forceFilterByCatalogExcludeInheritance%22:false,%22applicationId%22:%2201H4RD9NXMKQBQ1WVKM1181VD8%22,%22tenantId%22:%22REAL_MADRID%22%7D"
            alt="Product"
            className="w-14 h-14 object-cover rounded-md"
          />
          <div className="flex-1 ml-4">
            <h3 className="font-semibold text-sm text-gray-700">Mens Home Authentic Jersey</h3>
            <p className="text-blue-600 text-sm font-medium">$89.99</p>
          </div>
          <span className="text-gray-500 text-xs">85% Sold</span>
        </div>

        <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
          <img
            src="https://legends.broadleafcloud.com/api/asset/content/RMCFMZ0919_01.jpg?contextRequest=%7B%22forceCatalogForFetch%22:false,%22forceFilterByCatalogIncludeInheritance%22:false,%22forceFilterByCatalogExcludeInheritance%22:false,%22applicationId%22:%2201H4RD9NXMKQBQ1WVKM1181VD8%22,%22tenantId%22:%22REAL_MADRID%22%7D"
            alt="Product"
            className="w-14 h-14 object-cover rounded-md"
          />
          <div className="flex-1 ml-4">
            <h3 className="font-semibold text-sm text-gray-700">Mens Home Authentic Jersey</h3>
            <p className="text-blue-600 text-sm font-medium">$89.99</p>
          </div>
          <span className="text-gray-500 text-xs">80% Sold</span>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
