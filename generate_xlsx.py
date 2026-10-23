import zipfile
import os

def create_sample_xlsx(filepath):
    content_types = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
</Types>"""

    rels = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>"""

    workbook_rels = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
</Relationships>"""

    workbook = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="Kanishgar Tracker" sheetId="1" r:id="rId1"/>
  </sheets>
</workbook>"""

    styles = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <fonts count="1">
    <font><name val="Calibri"/><family val="2"/></font>
  </fonts>
  <fills count="2">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
  </fills>
  <borders count="1">
    <border><left/><right/><top/><bottom/></border>
  </borders>
  <cellStyleXfs count="1">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0"/>
  </cellStyleXfs>
  <cellXfs count="1">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
  </cellXfs>
</styleSheet>"""

    # Data rows for Kanishgar M
    rows_data = [
        ["ID", "Category", "Task / Goal Description", "Target Metric", "Current Progress", "Status", "Updated"],
        ["TRK-01", "DSA", "Solve 350+ LeetCode DSA Problems", "350 problems", "310 problems", "In Progress", "2026-10-22"],
        ["TRK-02", "DSA", "Maintain 100-Day Problem Solving Streak on LeetCode", "100 days", "100 days", "Completed", "2026-10-20"],
        ["TRK-03", "DSA", "GeeksforGeeks POTD & Core Interview Preparation", "150 problems", "150 problems", "Completed", "2026-10-18"],
        ["TRK-04", "Projects", "Deploy Personal Blog & Public Progress Hub to GitHub", "1 live site", "Completed", "Completed", "2026-10-23"],
        ["TRK-05", "DSA", "Codeforces Contest Rating Milestone (Pupil Target)", "1400 rating", "Active rounds", "In Progress", "2026-10-21"],
        ["TRK-06", "Career", "Network & Share Technical Insights on LinkedIn", "50+ connections", "Active network", "Completed", "2026-10-23"],
        ["TRK-07", "Learning", "System Design & Distributed Architecture Foundations", "15 chapters", "11 chapters", "In Progress", "2026-10-19"],
        ["TRK-08", "Projects", "Open-Source Full Stack Web App on GitHub", "1 repo", "1 repo deployed", "Completed", "2026-10-15"]
    ]

    cols = ["A", "B", "C", "D", "E", "F", "G"]
    sheet_rows_xml = []
    for r_idx, row in enumerate(rows_data, start=1):
        cells_xml = []
        for c_idx, val in enumerate(row):
            col_letter = cols[c_idx]
            cell_ref = f"{col_letter}{r_idx}"
            clean_val = str(val).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")
            cells_xml.append(f'<c r="{cell_ref}" t="inlineStr"><is><t>{clean_val}</t></is></c>')
        sheet_rows_xml.append(f'<row r="{r_idx}">{"".join(cells_xml)}</row>')

    sheet1 = f"""<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetData>
    {"".join(sheet_rows_xml)}
  </sheetData>
</worksheet>"""

    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    with zipfile.ZipFile(filepath, 'w', zipfile.ZIP_DEFLATED) as z:
        z.writestr('[Content_Types].xml', content_types)
        z.writestr('_rels/.rels', rels)
        z.writestr('xl/_rels/workbook.xml.rels', workbook_rels)
        z.writestr('xl/workbook.xml', workbook)
        z.writestr('xl/styles.xml', styles)
        z.writestr('xl/worksheets/sheet1.xml', sheet1)

    print(f"Created: {filepath}")

if __name__ == '__main__':
    target = r"C:\Users\kanis\.gemini\antigravity\scratch\personal-blog\assets\sample-tracker.xlsx"
    create_sample_xlsx(target)
