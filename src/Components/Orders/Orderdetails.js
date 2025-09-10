export const OrderDetails = [
  {
    region: "Delhi",
    orders: [
      { "OrderNo": "ORD-2001", "InvoiceNo": "INV-6001", "CustomerName": "Aarav Sharma", "OrderDate": "2025-08-15", "Location": "42, Khan Market, New Delhi", "Status": "Shipped", "Invoiced": true, "items": [
        { "name": "Textbooks", "model": "Class 12 Physics", "color": "N/A", "quantity": 10, "price": 500 },
        { "name": "File Cabinets", "model": "Steel, 4-Drawer", "color": "Grey", "quantity": 2, "price": 8000 }
      ]},
      { "OrderNo": "ORD-2011", "InvoiceNo": "INV-6011", "CustomerName": "Arjun Malhotra", "OrderDate": "2025-08-05", "Location": "112, Block A, Connaught Place, Delhi", "Status": "Delivered", "Invoiced": true, "items": [
        { "name": "Used Laptops", "model": "ThinkPad T480", "color": "Black", "quantity": 5, "price": 25000 },
        { "name": "Bulk Phone Chargers", "model": "USB-C 20W", "color": "White", "quantity": 50, "price": 400 }
      ]},
      { "OrderNo": "ORD-2021", "InvoiceNo": "INV-6021", "CustomerName": "Rohan Gupta", "OrderDate": "2025-08-23", "Location": "C-78, Hauz Khas Village, New Delhi", "Status": "Confirmed", "Invoiced": false, "items": [
        { "name": "Fiction Novels", "model": "Assorted Bestsellers", "color": "N/A", "quantity": 20, "price": 350 },
        { "name": "Stationery Kits", "model": "Student Basic Kit", "color": "Blue", "quantity": 30, "price": 150 }
      ]},
      { "OrderNo": "ORD-2028", "InvoiceNo": "INV-6028", "CustomerName": "Rajesh Kumar", "OrderDate": "2025-08-07", "Location": "25/3, Chandni Chowk, Delhi", "Status": "Delivered", "Invoiced": true, "items": [
        { "name": "Pickles", "model": "Mixed Vegetable", "color": "N/A", "quantity": 12, "price": 200 },
        { "name": "Spices", "model": "Garam Masala Pack", "color": "N/A", "quantity": 25, "price": 180 }
      ]}
    ]
  },
  {
    region: "Mumbai",
    orders: [
      { "OrderNo": "ORD-2002", "InvoiceNo": "INV-6002", "CustomerName": "Saanvi Gupta", "OrderDate": "2025-08-14", "Location": "15, Sea Face Road, Bandra West, Mumbai", "Status": "Delivered", "Invoiced": true, "items": [
        { "name": "Leather Belts", "model": "Formal Wear", "color": "Brown", "quantity": 50, "price": 600 },
        { "name": "Packing Tape", "model": "48mm x 50m", "color": "Clear", "quantity": 100, "price": 50 },
        { "name": "Brake Pads", "model": "Ceramic Front Set", "color": "Grey", "quantity": 10, "price": 2200 }
      ]},
      { "OrderNo": "ORD-2012", "InvoiceNo": "INV-6012", "CustomerName": "Zara Begum", "OrderDate": "2025-08-19", "Location": "Flat 301, Juhu Tara Road, Mumbai", "Status": "Shipped", "Invoiced": true, "items": [
        { "name": "Vitamins", "model": "Multivitamin Tablets", "color": "N/A", "quantity": 40, "price": 450 },
        { "name": "Handbags", "model": "Tote Bag", "color": "Tan", "quantity": 15, "price": 1500 }
      ]},
      { "OrderNo": "ORD-2022", "InvoiceNo": "INV-6022", "CustomerName": "Fatima Qureshi", "OrderDate": "2025-08-24", "Location": "Unit 8, MIDC Industrial Estate, Andheri East, Mumbai", "Status": "Shipped", "Invoiced": true, "items": [
        { "name": "Corrugated Boxes", "model": "12x12x6 inches", "color": "Brown", "quantity": 200, "price": 30 }
      ]}
    ]
  },
  {
    region: "kolkata",
    orders: [
      { "OrderNo": "ORD-2003", "InvoiceNo": "INV-6003", "CustomerName": "Advik Singh", "OrderDate": "2025-08-12", "Location": "22B, Park Street, Kolkata", "Status": "Confirmed", "Invoiced": true, "items": [
        { "name": "Cotton Shirts", "model": "Full Sleeve", "color": "White", "quantity": 30, "price": 800 },
        { "name": "Turmeric Powder", "model": "1kg Pouch", "color": "Yellow", "quantity": 50, "price": 250 }
      ]},
      { "OrderNo": "ORD-2013", "InvoiceNo": "INV-6013", "CustomerName": "Kabir Das", "OrderDate": "2025-08-21", "Location": "10/1, Gariahat Road, Ballygunge, Kolkata", "Status": "Confirmed", "Invoiced": true, "items": [
        { "name": "Sofa", "model": "3-Seater Fabric", "color": "Beige", "quantity": 1, "price": 25000 },
        { "name": "Table", "model": "Coffee Table, Wood", "color": "Dark Brown", "quantity": 1, "price": 8000 },
        { "name": "Chair", "model": "Dining Chair", "color": "Dark Brown", "quantity": 4, "price": 3000 }
      ]},
      { "OrderNo": "ORD-2023", "InvoiceNo": "INV-6023", "CustomerName": "Neha Banerjee", "OrderDate": "2025-08-26", "Location": "Sector V, Bidhannagar, Salt Lake, Kolkata", "Status": "Confirmed", "Invoiced": true, "items": [
        { "name": "Smartphone", "model": "Model X", "color": "Midnight Blue", "quantity": 5, "price": 18000 },
        { "name": "Laptop", "model": "ProBook 14", "color": "Silver", "quantity": 3, "price": 65000 }
      ]}
    ]
  },
  {
    region: "Ahmedabad",
    orders: [
      { "OrderNo": "ORD-2004", "InvoiceNo": "INV-6616", "CustomerName": "Diya Patel", "OrderDate": "2025-08-20", "Location": "Plot 55, GIDC Naroda, Ahmedabad", "Status": "Pending", "Invoiced": false, "items": [
        { "name": "Cotton Fabric Rolls", "model": "Printed, 50m", "color": "Multicolor", "quantity": 10, "price": 4000 },
        { "name": "Molded Containers", "model": "5L Plastic", "color": "White", "quantity": 150, "price": 80 }
      ]},
      { "OrderNo": "ORD-2014", "InvoiceNo": "INV-6014", "CustomerName": "Priya Shah", "OrderDate": "2025-08-01", "Location": "C.G. Road, Navrangpura, Ahmedabad", "Status": "Cancelled", "Invoiced": false, "items": [
        { "name": "Printed Linens", "model": "Bedsheet Set", "color": "Floral", "quantity": 20, "price": 1200 }
      ]}
    ]
  },
  {
    region: "Hyderabad",
    orders: [
      { "OrderNo": "ORD-2005", "InvoiceNo": "INV-6005", "CustomerName": "Vihaan Reddy", "OrderDate": "2025-07-30", "Location": "H.No. 8-2-293, Road No. 2, Banjara Hills, Hyderabad", "Status": "Delivered", "Invoiced": true, "items": [
        { "name": "Pearl Necklaces", "model": "Single Strand", "color": "White", "quantity": 8, "price": 9000 },
        { "name": "Biryani Masala Kits", "model": "Hyderabadi Special", "color": "N/A", "quantity": 60, "price": 300 }
      ]},
      { "OrderNo": "ORD-2016", "InvoiceNo": "", "CustomerName": "Sameer Varma", "OrderDate": "2025-08-28", "Location": "Level 5, HITECH City, Madhapur, Hyderabad", "Status": "Draft", "Invoiced": false, "items": [
        { "name": "Cloud Hosting", "model": "Standard Tier, Monthly", "color": "N/A", "quantity": 12, "price": 5000 },
        { "name": "Cybersecurity Audits", "model": "Quarterly Service", "color": "N/A", "quantity": 4, "price": 150000 }
      ]},
      { "OrderNo": "ORD-2025", "InvoiceNo": "INV-6025", "CustomerName": "Pooja Reddy", "OrderDate": "2025-08-03", "Location": "Jubilee Hills, Check Post, Hyderabad", "Status": "Cancelled", "Invoiced": false, "items": [
        { "name": "Vaccines", "model": "Flu Shot Vials", "color": "N/A", "quantity": 500, "price": 800 }
      ]}
    ]
  },
    {
    region: "Bangalore",
    orders: [
      { "OrderNo": "ORD-2006", "InvoiceNo": "INV-6006", "CustomerName": "Myra Kumar", "OrderDate": "2025-08-18", "Location": "No. 100, 1st Main, Koramangala 4th Block, Bangalore", "Status": "Shipped", "Invoiced": true, "items": [
        { "name": "Servers", "model": "Dell PowerEdge R740", "color": "Black", "quantity": 2, "price": 250000 },
        { "name": "RAM Modules", "model": "16GB DDR4 ECC", "color": "Green", "quantity": 8, "price": 7000 },
        { "name": "Coffee Beans", "model": "Arabica, Dark Roast", "color": "Brown", "quantity": 5, "price": 1200 }
      ]},
      { "OrderNo": "ORD-2015", "InvoiceNo": "INV-6015", "CustomerName": "Rohan Gowda", "OrderDate": "2025-08-10", "Location": "Brigade Road, Ashok Nagar, Bangalore", "Status": "Delivered", "Invoiced": true, "items": [
        { "name": "SSDs", "model": "1TB NVMe", "color": "Black", "quantity": 10, "price": 8500 },
        { "name": "Networking Cables", "model": "Cat6 Ethernet, 5m", "color": "Blue", "quantity": 100, "price": 250 }
      ]},
      { "OrderNo": "ORD-2026", "InvoiceNo": "INV-6026", "CustomerName": "Aditya Rao", "OrderDate": "2025-08-04", "Location": "Electronic City Phase 1, Hosur Road, Bangalore", "Status": "Delivered", "Invoiced": true, "items": [
        { "name": "Wiring Harnesses", "model": "Automotive Main", "color": "Multicolor", "quantity": 15, "price": 12000 }
      ]}
    ]
  },
  {
    region: "Pune",
    orders: [
      { "OrderNo": "ORD-2007", "InvoiceNo": "", "CustomerName": "Vivaan Joshi", "OrderDate": "2025-08-22", "Location": "Office 404, Hinjewadi Phase 1, Pune", "Status": "Draft", "Invoiced": false, "items": [
        { "name": "Keyboards", "model": "Mechanical RGB", "color": "Black", "quantity": 20, "price": 4500 },
        { "name": "Monitors", "model": "24-inch IPS", "color": "Black", "quantity": 20, "price": 15000 }
      ]},
      { "OrderNo": "ORD-2017", "InvoiceNo": "INV-6017", "CustomerName": "Anika Deshpande", "OrderDate": "2025-08-13", "Location": "Lane 7, Koregaon Park, Pune", "Status": "Shipped", "Invoiced": true, "items": [
        { "name": "Trekking Shoes", "model": "High-Ankle Waterproof", "color": "Olive Green", "quantity": 10, "price": 5500 },
        { "name": "Backpacks", "model": "60L Rucksack", "color": "Red", "quantity": 10, "price": 3500 }
      ]},
      { "OrderNo": "ORD-2027", "InvoiceNo": "INV-6027", "CustomerName": "Sneha Patil", "OrderDate": "2025-08-06", "Location": "Chakan Industrial Area, Phase 2, Pune", "Status": "Shipped", "Invoiced": true, "items": [
        { "name": "Crankshafts", "model": "Forged Steel V8", "color": "Metallic", "quantity": 5, "price": 30000 },
        { "name": "Transmission Systems", "model": "6-Speed Automatic", "color": "Metallic", "quantity": 5, "price": 120000 }
      ]}
    ]
  },
  {
    region: "Chennai",
    orders: [
      { "OrderNo": "ORD-2008", "InvoiceNo": "INV-6008", "CustomerName": "Ananya Iyer", "OrderDate": "2025-08-11", "Location": "No. 12, T. Nagar, Chennai", "Status": "Delivered", "Invoiced": true, "items": [
        { "name": "Engine Pistons", "model": "Aluminium Alloy", "color": "Silver", "quantity": 40, "price": 2000 },
        { "name": "Silk Sarees", "model": "Kanchipuram Silk", "color": "Royal Blue", "quantity": 10, "price": 15000 }
      ]},
      { "OrderNo": "ORD-2018", "InvoiceNo": "INV-6018", "CustomerName": "Krishnan Nair", "OrderDate": "2025-08-02", "Location": "Anna Salai, Guindy, Chennai", "Status": "Delivered", "Invoiced": true, "items": [
        { "name": "Container Leasing", "model": "40-foot High Cube, Monthly", "color": "Blue", "quantity": 5, "price": 20000 }
      ]},
      { "OrderNo": "ORD-2029", "InvoiceNo": "INV-8745", "CustomerName": "Meera Krishnan", "OrderDate": "2025-08-30", "Location": "Ambattur Industrial Estate, Chennai", "Status": "Draft", "Invoiced": false, "items": [
        { "name": "Car Body Panels", "model": "Sedan Door Panel", "color": "Primer Grey", "quantity": 20, "price": 6000 }
      ]}
    ]
  },
  {
    region: "Jaipur",
    orders: [
      { "OrderNo": "ORD-2009", "InvoiceNo": "INV-6009", "CustomerName": "Ishaan Mehra", "OrderDate": "2025-08-16", "Location": "Shop 18, Johari Bazaar, Jaipur", "Status": "Confirmed", "Invoiced": true, "items": [
        { "name": "Blue Pottery", "model": "Decorative Vase", "color": "Blue/White", "quantity": 30, "price": 1200 },
        { "name": "Bandhani Sarees", "model": "Georgette Fabric", "color": "Red/Yellow", "quantity": 15, "price": 4500 },
        { "name": "Silver Anklets", "model": "Traditional Design", "color": "Silver", "quantity": 25, "price": 2500 }
      ]},
      { "OrderNo": "ORD-2019", "InvoiceNo": "", "CustomerName": "Aisha Kumari", "OrderDate": "2025-08-29", "Location": "B-45, C-Scheme, Jaipur", "Status": "Pending", "Invoiced": false, "items": [
        { "name": "Jaipuri Quilts", "model": "Double Bed, Cotton", "color": "Multicolor Print", "quantity": 20, "price": 2200 },
        { "name": "Marble Figurines", "model": "Elephant, 6-inch", "color": "White", "quantity": 40, "price": 900 }
      ]},
      { "OrderNo": "ORD-2024", "InvoiceNo": "", "CustomerName": "Vikram Singh", "OrderDate": "2025-08-27", "Location": "MI Road, Panch Batti, Jaipur", "Status": "Pending", "Invoiced": false, "items": [
        { "name": "Cut Emeralds", "model": "5 Carat, Oval Cut", "color": "Green", "quantity": 10, "price": 50000 }
      ]}
    ]
  },
  {
    region: "Noida",
    orders: [
      { "OrderNo": "ORD-2030", "InvoiceNo": "INV-6030", "CustomerName": "Amit Agarwal", "OrderDate": "2025-08-08", "Location": "A-1, Sector 62, Noida", "Status": "Delivered", "Invoiced": true, "items": [
        { "name": "Drones", "model": "Quad-copter Pro", "color": "White", "quantity": 5, "price": 45000 },
        { "name": "VR Headsets", "model": "Ocular Quest 3", "color": "White", "quantity": 10, "price": 35000 }
      ]}
    ]
  }
]