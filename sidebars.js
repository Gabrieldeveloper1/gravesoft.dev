/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Our Software',
      items: ['cas'],
	  collapsed: false,
    },
    {
      type: 'category',
      label: 'Download Windows / Office',
      items: ['download_windows','office_c2r_links','office_c2r_custom'],
	  collapsed: false,
    },
    {
      type: 'category',
      label: 'Guides',
      items: ['bypass-russian-geoblock','in-place_repair_upgrade','fix-wpa-registry','fix_powershell'],
	  collapsed: false,
    },
	'news',
	'troubleshoot',
	'credits',
  ],
  
};

export default sidebars;
