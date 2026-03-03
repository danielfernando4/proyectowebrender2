import React from "react";
import { TableBlock } from "../components/runtime/TableBlock";

const Author: React.FC = () => {
  return (
    <div id="page-author-2">
    <div id="i74l6" style={{"display": "flex", "height": "100vh", "fontFamily": "Arial, sans-serif", "--chart-color-palette": "default"}}>
      <nav id="ifbg4" style={{"width": "250px", "background": "linear-gradient(135deg, #4b3c82 0%, #5a3d91 100%)", "color": "white", "padding": "20px", "overflowY": "auto", "display": "flex", "flexDirection": "column", "--chart-color-palette": "default"}}>
        <h2 id="iy57d" style={{"marginTop": "0", "fontSize": "24px", "marginBottom": "30px", "fontWeight": "bold", "--chart-color-palette": "default"}}>{"BESSER"}</h2>
        <div id="ilah2" style={{"display": "flex", "flexDirection": "column", "flex": "1", "--chart-color-palette": "default"}}>
          <a id="i8dt5" style={{"color": "white", "textDecoration": "none", "padding": "10px 15px", "display": "block", "background": "transparent", "borderRadius": "4px", "marginBottom": "5px", "--chart-color-palette": "default"}} href="/book">{"Book"}</a>
          <a id="in7ld" style={{"color": "white", "textDecoration": "none", "padding": "10px 15px", "display": "block", "background": "transparent", "borderRadius": "4px", "marginBottom": "5px", "--chart-color-palette": "default"}} href="/library">{"Library"}</a>
          <a id="icp9u" style={{"color": "white", "textDecoration": "none", "padding": "10px 15px", "display": "block", "background": "rgba(255,255,255,0.2)", "borderRadius": "4px", "marginBottom": "5px", "--chart-color-palette": "default"}} href="/author">{"Author"}</a>
        </div>
        <p id="i9iqz" style={{"marginTop": "auto", "paddingTop": "20px", "borderTop": "1px solid rgba(255,255,255,0.2)", "fontSize": "11px", "opacity": "0.8", "textAlign": "center", "--chart-color-palette": "default"}}>{"© 2026 BESSER. All rights reserved."}</p>
      </nav>
      <main id="ifjaf" style={{"flex": "1", "padding": "40px", "overflowY": "auto", "background": "#f5f5f5", "--chart-color-palette": "default"}}>
        <h1 id="i43zx" style={{"marginTop": "0", "color": "#333", "fontSize": "32px", "marginBottom": "10px", "--chart-color-palette": "default"}}>{"Author"}</h1>
        <p id="imdj8" style={{"color": "#666", "marginBottom": "30px", "--chart-color-palette": "default"}}>{"Manage Author data"}</p>
        <TableBlock id="table-author-2" styles={{"width": "100%", "minHeight": "400px", "--chart-color-palette": "default"}} title="Author List" options={{"showHeader": true, "stripedRows": false, "showPagination": true, "rowsPerPage": 5, "actionButtons": true, "columns": [{"label": "Name", "column_type": "field", "field": "name", "type": "str", "required": true}, {"label": "Books", "column_type": "lookup", "path": "books", "entity": "Book", "field": "title", "type": "list", "required": true}], "formColumns": [{"column_type": "field", "field": "name", "label": "name", "type": "str", "required": true, "defaultValue": null}, {"column_type": "lookup", "path": "books", "field": "books", "lookup_field": "pages", "entity": "Book", "type": "list", "required": true}]}} dataBinding={{"entity": "Author", "endpoint": "/author/"}} />
      </main>
    </div>    </div>
  );
};

export default Author;
