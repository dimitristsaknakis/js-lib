# js-lib

- Description: An example library created with TypeScript, compiled both
  to ES6 and ES5. Done while following along a guide, for learning
  purposes only. Please do not install, it has nothing of value.
- Date created: Oct 23, 2022
- Last update: Oct 23, 2022
- Sources:
  - [How to make a JavaScript library - Building with TypeScript and Publish](https://youtu.be/vRmLTZyq57U), YouTube video by Monsterlessons Academy

---

## Notes on creating this lib

- Created index.ts exports the code that we want to be acessible by the outside world (in this case the pluck() function)
- Created tsconfig.json has the configuration on how we want to transpile our 
  TypeScript to JavaScript, and we want both ES6 and ES5 (require) support
- Created tsconfig.es5.json has the ES5 configuration.
- Issued npm init to create package.json.
  - package.json must have "repository" with a link to the GitHub repo.
- Created a GitHub repo (public) named "js-lib" and put its URL in 
  "repository" of package.json. Created a local git repo via `git init`
  and synced its remote with the GitHub repo's.
- In package.json I created a 'compile' script that allows someone to build
  both for commonJS (ES5) or ES6 modules, via respective `tsc` commands.
- Installed TypeScript as a dev dependency (via `npm i -D typescript`, 
  to have access to `tsc`.
- I ran the compile script, `npm run compile`, and created the dist/lib
  directories for both ES5 and ES6.
- I needed to create another package.json, inside the dist/ folder this
  time, because the outer one is for the GitHub repo, not the library
  itself. The one that will be published to npm once we upload the
  library is the one we create inside the dist folder.
  - The dist/package.json has a lot of info in it.
    - In "name" I added a name prefix for me, I chose `@dt` and the 
      name of the library's repository (here it's js-lib)
    - The "main" and "module" are very important. When someone installs
      our library as a Node module he'll have both lines available.  
      CommonJS uses "main" (and require()) and an ES6 modular system 
      uses "module" (import, etc), so it depends on what one uses in 
      his project - both are available to him this way.
    - Check out the 'url' format in "repository"
- Created a \.gitignore file in the top-level folder (not dist).
- Added all files to the Git staging area, issued a commit with a
  message, and pushed to the GitHub repo.
- Publishing to npm:
  - Navigate to dist (we're only interested in publishing that)
  - Issuing an `npm publish` just like that will lead to an error,
    since we're not authorized.
  - Type `npm adduser` and fill your npm username and password to get 
    authorized. Even then though, `npm publish` doesn't work as there's
    a 'payment required' error message, since we tried to publish it
    as a private package.
  - Type `npm publish --access=public` in order to publish the lib as
    a public package, it worked!

---

Currently on minute 14:00 of YouTube video.

