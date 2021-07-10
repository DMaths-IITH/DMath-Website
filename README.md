# Website of the Department of Mathematics, IIT Hyderabad
This repo contains the source code for the official website of the [Department of Mathematics](https://math.iith.ac.in), [IIT Hyderabad](https://iith.ac.in). The website is dynamic and fully configurable, without the requirement to code. Pages can be modififed, new pages can be added and existing pages can be removed, all from the browser itself, by enbling the admin edit mode.
## Code overview
- The website is built using the [React](https://reactjs.org/) based static site generator [Gatsby](https://www.gatsbyjs.com/).
- The data content of the website is stored in [Google cloud firestore](https://firebase.google.com/docs/firestore).
- During the build, the gatsby build process will query the firestore to fetch the content and generate static web pages and js bundles for the same.
- Each page has a json representation stored in the cloud firestore and at build time, this representation is converted to a static web page.
- The json representation is based on what components the page is made of, the data for these components and in what order they appear.
- The admin console is located at the path /admin. The edit feature is only avaiable when an admin logs into the site.
- The JSON editor is located at the path /jsoneditor. This editor provides direct access to the json representations of each page and must be used wih caution, only when necessary. 

## Developed by:
This website is developed by, ***Anurag Reddy Karri, MA18BTECH11001***. 
- Github: [AnuragReddy2000](https://github.com/AnuragReddy2000)
- IITH mail: [ma18btech11001@iith.ac.in](mailto:ma18btech11001@iith.ac.in)
- Personal Mail: [anuragreddy1000@gmail.com](anuragreddy1000@gmail.com)


#### ©Department of Mathematics, IIT Hyderabad. All rights reserved. 
