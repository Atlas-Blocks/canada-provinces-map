# Atlas Blocks Canada Provinces Map

A customizable Gutenberg block for displaying an interactive map of Canada inside the WordPress editor.

The Canada Provinces Map block lets users highlight selected provinces and territories, customize map colors, and optionally display a clean selected-region list beneath the map. It is designed for websites that need to show availability, service areas, legal access, regional coverage, expansion plans, travel guides, or location-based content.

---

## Screenshot

<img width="100%" alt="Canada map block main image" src="https://github.com/user-attachments/assets/38e0b4df-964e-46fd-94a7-0b3f60d361cf" />

---

## Frontend Preview

<table width="100%">
  <tr>
    <th width="50%" align="center">Wide Setting</th>
    <th width="50%" align="center">Normal Setting</th>
  </tr>
  <tr>
    <td width="50%" align="center" valign="top">
      <img width="100%" alt="Canada map block wide setting" src="https://github.com/user-attachments/assets/839db5b8-c7cb-4397-b953-ac51a9f22065" />
    </td>
    <td width="50%" align="center" valign="top">
      <img width="100%" alt="Canada map block normal setting" src="https://github.com/user-attachments/assets/38e0b4df-964e-46fd-94a7-0b3f60d361cf" />
    </td>
  </tr>
</table>

---

## Editor Experience

<table width="100%">
  <tr>
    <th width="50%" align="center">Default View</th>
    <th width="50%" align="center">Selections Made View</th>
  </tr>
  <tr>
    <td width="50%" align="center" valign="top">
      <img width="100%" alt="Editor mode no selection" src="https://github.com/user-attachments/assets/00dc4888-4f73-4f1a-978d-7539217d5d45" />
    </td>
    <td width="50%" align="center" valign="top">
      <img width="100% height="1086" alt="Editor Mode selection" src="https://github.com/user-attachments/assets/04c9d0c1-57b1-44aa-87f2-7872cbf0d7cf" />
    </td>
  </tr>
	

  <tr>
    <td width="50%" align="center" valign="top">
     <img width="100%" alt="Editor Mode no selection preview" src="https://github.com/user-attachments/assets/f1334ea0-d48c-4f6d-8c51-3512bed30c34" />
    </td>
    <td width="50%" align="center" valign="top">
      <img width="100%" alt="Editor Mode selection preview" src="https://github.com/user-attachments/assets/bc8f01c4-b749-4bc5-8b9e-df44f677bb47" />
    </td>
  </tr>
</table>

---

## Use Cases

<table width="100%">
  <tr>
    <th width="33%" align="center">Election Example</th>
    <th width="33%" align="center">Product Availability</th>
    <th width="33%" align="center">Legality</th>
  </tr>
  <tr>
    <td width="33%" align="center" valign="top">
      <img width="100%" alt="Canada map block election example" src="PUT SCREENSHOT URL HERE" />
    </td>
    <td width="33%" align="center" valign="top">
      <img width="100%" alt="Canada map block product availability example" src="PUT SCREENSHOT URL HERE" />
    </td>
    <td width="33%" align="center" valign="top">
      <img width="100%" alt="Canada map block legality example" src="PUT SCREENSHOT URL HERE" />
    </td>
  </tr>
</table>

---

## Features

- Interactive SVG-based map of Canada
- Includes all 10 provinces and 3 territories
- Click-to-select provinces and territories inside the editor
- Custom active region color
- Custom default region color
- Optional selected provinces and territories list
- Searchable region selector
- Floating map title/tag
- Responsive frontend layout
- Wide and full-width alignment support
- Lightweight block with no unnecessary dependencies
- Built for the Gutenberg editor

---

## Included Regions

The block includes all Canadian provinces and territories:

- Alberta
- British Columbia
- Manitoba
- New Brunswick
- Newfoundland and Labrador
- Nova Scotia
- Ontario
- Prince Edward Island
- Quebec
- Saskatchewan
- Northwest Territories
- Nunavut
- Yukon

---

## Use Cases

This block can be used for:

- Province-by-province availability maps
- Service area pages
- Canadian legal or regulatory guides
- Regional expansion pages
- Travel and tourism content
- Shipping or delivery coverage maps
- Location-based comparison pages
- Interactive blog or landing page visuals

---

## Block Settings

The Canada Provinces Map block includes editable settings for:

- Map title
- Selected list title
- Selected provinces and territories
- Active region color
- Default region color
- Province/territory list visibility

---

## Installation

1. Download or clone this repository into your WordPress plugins directory:

```bash
wp-content/plugins/canada-provinces-map
```

2. Install dependencies:

```bash
npm install
```

3. Build the block:

```bash
npm run build
```

4. Activate the plugin inside the WordPress admin dashboard.

5. Add the **Canada Provinces Map** block inside the Gutenberg editor.

---

## Development

To start a local development build:

```bash
npm start
```

To create a production build:

```bash
npm run build
```

---

## Project Structure

```bash
canada-provinces-map/
├── build/
├── src/
│   ├── block.json
│   ├── edit.js
│   ├── editor.scss
│   ├── index.js
│   ├── provincePaths.js
│   ├── save.js
│   └── style.scss
├── package.json
├── README.md
└── canada-provinces-map.php
```

---

## Built With

- WordPress
- Gutenberg Block API
- React
- JavaScript
- SCSS
- SVG

---

## Accessibility Notes

The block uses SVG paths to visually represent provinces and territories. Additional accessibility improvements may include keyboard selection support, ARIA labels, improved focus states, and screen-reader-friendly region descriptions.

---

## Roadmap

Possible future improvements:

- Hover color controls
- Tooltip support for each province and territory
- Optional province/territory grouping
- Custom links for each selected region
- Region-specific descriptions
- Preset map styles
- Frontend animation options
- Import/export settings
- Additional accessibility improvements

---

## Author

Created by **Atlas Blocks**.

Atlas Blocks focuses on building unique, visual Gutenberg blocks for WordPress websites.

---

## License

This project is licensed under the MIT License.
