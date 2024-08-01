# Neutron SDK: Figma Code Connect

This respository houses the tools for integrating Figma Code Connect into the `@neutron/react` SDK.

## Getting Started

1. Clone this repository to your computer.
2. Open the repository in your preferred IDE.
3. In Terminal run the command `npm i` to install the packages.

### Enabling Code Connect Integration

- In the `src` folder create a file named `.env`
- Within this file place the following code, replacing `<ACCESS_TOKEN>` with your Figma access token:

```
FIGMA_ACCESS_TOKEN="<ACCESS_TOKEN>"
```

> [!note]
> For assistance in generating an access token in Figma, please review the article [Manage personal access tokens](https://help.figma.com/hc/en-us/articles/8085703771159-Manage-personal-access-tokens) on Figma's support site.

## Code Connect Basics

Code Connect will automatically inject the token from your `.env` file so there is no need to manually type your token when creating a new connection or publishing your work.

For modifying a generated connection we recommend referencing Figma's [React Documentation](https://github.com/figma/code-connect/tree/main/cli)

---

### Creating a New Figma Connection

- On Figma, `right-click` the component you wish to create a connection to.
- Select 'Copy link to selection'
- Return to your Terminal
  - Make sure you are in the `src` folder.
	- Type the following, replacing `<URL>` with the link you previously copied.

```
npx figma connect create "<URL>"
```

When this process has completed, you should have a new TypeScript file that follows the pattern `<ComponentName>.figma.tsx`

### Publishing Your Work

- From within the `src` folder, type the following command into your terminal:

```
npx figma connect publish
```

> [!note]
> You may need to go off the HCA VPN to run these commands.  You may also need to modify any global `.npmrc` file to not honor our HTTP and HTTPS proxies.

## Connected Component List

- Avatar
- Button
- Button Selector
  - Multi
  - Single
- Card
  - Standard
  - Hero
- Chip
- Select
  - Multi
  - Single
- Snackbar
- Images
- Feedback
  - BrandSpiner
  - Spinner
  - ProgressBar
- Stepper 
- Pagination 
  - (Pagination) Jump to page
  - Item Count and Progress
- Forms 
  - Radio
  - Checkboxes 
- Text Fields 
  - Password
  - Text Area
  - Text Fields
- Datepicker
  - Date Picker Double 
  - Date Picker Single 
- Search 
- Divider 
- Tooltip 
- Text Link 
- Tabs 
  - Tab Dropdown 
  - Tab 
- Navigation 
  - Flipped Full Nav
  - Full Nav 
- Tables 
  - Data Cell 
  - Header 
- Breadcrumbs
- Accordion 
- Tags 
- Modal
- List Item
- Side Panel 
- Footer 