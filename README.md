# SRQL

This is my onboarding project for Rollbar.

The goal is to create a Chrome Extension which provides a drag and drop visual query builder for *RQL* - [Rollbar Query Language](https://docs.rollbar.com/docs/rql).

# Installation:

1. Open a new chrome page with **chrome://extenstions** as url.
1. Activate **Developer mode** and click on **Load unpacked**.
1. Load the **SRQL4Chrome** library from the repository and accept all of the permission requests if there are any.
1. Click on the extension icon when you are on an RQL editor page and enjoy!

![A Chrome extensions tab](https://raw.githubusercontent.com/KoraiD/SRQL/main/other/install.png)

# Resources:

* https://docs.rollbar.com/
* https://www.npmjs.com/package/interactjs/v/1.10.1
* https://developer.chrome.com/docs/extensions/reference/

# Tools:

As a development tool, I use [VS Community](https://visualstudio.microsoft.com/vs/community/).

The only other tool you will need to try is [Rollbar](https://rollbar.com/), the Continous Code Improvement Platform - try it for free! :sunglasses:

![Rollbar Logo](https://images.ctfassets.net/cj4mgtttlyx7/4DfiWj9CbuHBi10uWK7JHn/768f47744678d47736f72227f09e6cb8/rollbar-share_1x.png)

# Current ToDo list:

- [x] Remove unused libraries
- [x] Use Rollbar as Error Monitoring and log collector tool
- [ ] Apply URL matching syntax - to allow popup only at the RQL page
- [x] Implement new JS dependencies
- [ ] Add basic query components
- [ ] Build query assembly box and