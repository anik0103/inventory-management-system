export const OrderDetails = [
  {
    region: "Delhi",
    orders: [
      { "OrderNo": "ORD-2001", "InvoiceNo": "INV-6001", "CustomerName": "Aarav Sharma", "OrderDate": "2025-08-15", "Location": "Delhi", "Status": "Shipped", "Invoiced": true, "items": ["Textbooks", "File Cabinets"] },
      { "OrderNo": "ORD-2011", "InvoiceNo": "INV-6011", "CustomerName": "Arjun Malhotra", "OrderDate": "2025-08-05", "Location": "Delhi", "Status": "Delivered", "Invoiced": true, "items": ["Used Laptops", "Bulk Phone Chargers"] },
      { "OrderNo": "ORD-2021", "InvoiceNo": "INV-6021", "CustomerName": "Rohan Gupta", "OrderDate": "2025-08-23", "Location": "Delhi", "Status": "Confirmed", "Invoiced": false, "items": ["Fiction Novels", "Stationery Kits"] },
      { "OrderNo": "ORD-2028", "InvoiceNo": "INV-6028", "CustomerName": "Rajesh Kumar", "OrderDate": "2025-08-07", "Location": "Delhi", "Status": "Delivered", "Invoiced": true, "items": ["Pickles", "Spices"] }
    ]
  },
  {
    region: "Mumbai",
    orders: [
      { "OrderNo": "ORD-2002", "InvoiceNo": "INV-6002", "CustomerName": "Saanvi Gupta", "OrderDate": "2025-08-14", "Location": "Mumbai", "Status": "Delivered", "Invoiced": true, "items": ["Leather Belts", "Packing Tape", "Brake Pads"] },
      { "OrderNo": "ORD-2012", "InvoiceNo": "INV-6012", "CustomerName": "Zara Begum", "OrderDate": "2025-08-19", "Location": "Mumbai", "Status": "Shipped", "Invoiced": true, "items": ["Vitamins", "Handbags"] },
      { "OrderNo": "ORD-2022", "InvoiceNo": "INV-6022", "CustomerName": "Fatima Qureshi", "OrderDate": "2025-08-24", "Location": "Mumbai", "Status": "Shipped", "Invoiced": true, "items": ["Corrugated Boxes"] }
    ]
  },
  {
    region: "kolkata",
    orders: [
      { "OrderNo": "ORD-2003", "InvoiceNo": "INV-6003", "CustomerName": "Advik Singh", "OrderDate": "2025-08-12", "Location": "Kolkata", "Status": "Confirmed", "Invoiced": true, "items": ["Cotton Shirts", "Turmeric"] },
      { "OrderNo": "ORD-2013", "InvoiceNo": "INV-6013", "CustomerName": "Kabir Das", "OrderDate": "2025-08-21", "Location": "Kolkata", "Status": "Confirmed", "Invoiced": true, "items": ["Sofa", "Table", "Chair"] },
      { "OrderNo": "ORD-2023", "InvoiceNo": "INV-6023", "CustomerName": "Neha Banerjee", "OrderDate": "2025-08-26", "Location": "Kolkata", "Status": "Confirmed", "Invoiced": true, "items": ["Smartphone", "Laptop"] }
    ]
  },
  {
    region: "Ahmedabad",
    orders: [
      { "OrderNo": "ORD-2004", "InvoiceNo": "", "CustomerName": "Diya Patel", "OrderDate": "2025-08-20", "Location": "Ahmedabad", "Status": "Pending", "Invoiced": false, "items": ["Cotton Fabric Rolls", "Molded Containers"] },
      { "OrderNo": "ORD-2014", "InvoiceNo": "INV-6014", "CustomerName": "Priya Shah", "OrderDate": "2025-08-01", "Location": "Ahmedabad", "Status": "Cancelled", "Invoiced": false, "items": ["Printed Linens"] }
    ]
  },
  {
    region: "Hyderabad",
    orders: [
      { "OrderNo": "ORD-2005", "InvoiceNo": "INV-6005", "CustomerName": "Vihaan Reddy", "OrderDate": "2025-07-30", "Location": "Hyderabad", "Status": "Delivered", "Invoiced": true, "items": ["Pearl Necklaces", "Biryani Masala Kits"] },
      { "OrderNo": "ORD-2016", "InvoiceNo": "", "CustomerName": "Sameer Varma", "OrderDate": "2025-08-28", "Location": "Hyderabad", "Status": "Draft", "Invoiced": false, "items": ["Cloud Hosting", "Cybersecurity Audits"] },
      { "OrderNo": "ORD-2025", "InvoiceNo": "INV-6025", "CustomerName": "Pooja Reddy", "OrderDate": "2025-08-03", "Location": "Hyderabad", "Status": "Cancelled", "Invoiced": false, "items": ["Vaccines"] }
    ]
  },
  {
    region: "Bangalore",
    orders: [
      { "OrderNo": "ORD-2006", "InvoiceNo": "INV-6006", "CustomerName": "Myra Kumar", "OrderDate": "2025-08-18", "Location": "Bangalore", "Status": "Shipped", "Invoiced": true, "items": ["Servers", "RAM Modules", "Coffee Beans"] },
      { "OrderNo": "ORD-2015", "InvoiceNo": "INV-6015", "CustomerName": "Rohan Gowda", "OrderDate": "2025-08-10", "Location": "Bangalore", "Status": "Delivered", "Invoiced": true, "items": ["SSDs", "Networking Cables"] },
      { "OrderNo": "ORD-2026", "InvoiceNo": "INV-6026", "CustomerName": "Aditya Rao", "OrderDate": "2025-08-04", "Location": "Bangalore", "Status": "Delivered", "Invoiced": true, "items": ["Wiring Harnesses"] }
    ]
  },
  {
    region: "Pune",
    orders: [
      { "OrderNo": "ORD-2007", "InvoiceNo": "", "CustomerName": "Vivaan Joshi", "OrderDate": "2025-08-22", "Location": "Pune", "Status": "Draft", "Invoiced": false, "items": ["Keyboards", "Monitors"] },
      { "OrderNo": "ORD-2017", "InvoiceNo": "INV-6017", "CustomerName": "Anika Deshpande", "OrderDate": "2025-08-13", "Location": "Pune", "Status": "Shipped", "Invoiced": true, "items": ["Trekking Shoes", "Backpacks"] },
      { "OrderNo": "ORD-2027", "InvoiceNo": "INV-6027", "CustomerName": "Sneha Patil", "OrderDate": "2025-08-06", "Location": "Pune", "Status": "Shipped", "Invoiced": true, "items": ["Crankshafts", "Transmission Systems"] }
    ]
  },
  {
    region: "Chennai",
    orders: [
      { "OrderNo": "ORD-2008", "InvoiceNo": "INV-6008", "CustomerName": "Ananya Iyer", "OrderDate": "2025-08-11", "Location": "Chennai", "Status": "Delivered", "Invoiced": true, "items": ["Engine Pistons", "Silk Sarees"] },
      { "OrderNo": "ORD-2018", "InvoiceNo": "INV-6018", "CustomerName": "Krishnan Nair", "OrderDate": "2025-08-02", "Location": "Chennai", "Status": "Delivered", "Invoiced": true, "items": ["Container Leasing"] },
      { "OrderNo": "ORD-2029", "InvoiceNo": "", "CustomerName": "Meera Krishnan", "OrderDate": "2025-08-30", "Location": "Chennai", "Status": "Draft", "Invoiced": false, "items": ["Car Body Panels"] }
    ]
  },
  {
    region: "Jaipur",
    orders: [
      { "OrderNo": "ORD-2009", "InvoiceNo": "INV-6009", "CustomerName": "Ishaan Mehra", "OrderDate": "2025-08-16", "Location": "Jaipur", "Status": "Confirmed", "Invoiced": true, "items": ["Blue Pottery", "Bandhani Sarees", "Silver Anklets"] },
      { "OrderNo": "ORD-2019", "InvoiceNo": "", "CustomerName": "Aisha Kumari", "OrderDate": "2025-08-29", "Location": "Jaipur", "Status": "Pending", "Invoiced": false, "items": ["Jaipuri Quilts", "Marble Figurines"] },
      { "OrderNo": "ORD-2024", "InvoiceNo": "", "CustomerName": "Vikram Singh", "OrderDate": "2025-08-27", "Location": "Jaipur", "Status": "Pending", "Invoiced": false, "items": ["Cut Emeralds"] }
    ]
  },
  {
    region: "Lucknow",
    orders: [
      { "OrderNo": "ORD-2010", "InvoiceNo": "", "CustomerName": "Kiara Ali", "OrderDate": "2025-08-25", "Location": "Lucknow", "Status": "Pending", "Invoiced": false, "items": ["Chikankari Kurtas"] },
      { "OrderNo": "ORD-2020", "InvoiceNo": "INV-6020", "CustomerName": "Imran Siddiqui", "OrderDate": "2025-07-25", "Location": "Lucknow", "Status": "Delivered", "Invoiced": true, "items": ["Attar Oils", "Frozen Kebabs"] }
    ]
  },
  {
    region: "Noida",
    orders: [
      { "OrderNo": "ORD-2030", "InvoiceNo": "INV-6030", "CustomerName": "Amit Agarwal", "OrderDate": "2025-08-08", "Location": "Noida", "Status": "Delivered", "Invoiced": true, "items": ["Drones", "VR Headsets"] }
    ]
  }
]