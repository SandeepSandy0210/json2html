// json2html.js

export default function json2html(data) {
  // Start the HTML table with data-user attribute
  let html = `<table data-user="psaisandeep2002@gmail.com">`;
  
  // Extract column headers from all keys in the data
  const headers = Object.keys(data.reduce((cols, row) => ({ ...cols, ...row }), {}));

  // Add the table headers
  html += "<thead><tr>";
  headers.forEach(header => {
    html += `<th>${header}</th>`;
  });
  html += "</tr></thead>";

  // Add table rows
  html += "<tbody>";
  data.forEach(row => {
    html += "<tr>";
    headers.forEach(header => {
      html += `<td>${row[header] || ""}</td>`;
    });
    html += "</tr>";
  });
  html += "</tbody></table>";

  // Return the generated HTML string
  return html;
}
