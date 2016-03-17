# Brand Styleguide

Welcome to the Brand Styleguide! This is a collection of CSS classes and JS functions that will hopefully help everyone build faster, more standardized landing pages. We're constantly refining the styleguide to be up to best web standards of practice. If you would like to make a change or addition to the styleguide, please create a new branch, push your changes, and submit a pull request. Brand Comm will evaluate the change and merge the request if the change makes sense in the grand scheme of the styleguide.

The Styleguide is made to be a tool to allow you to quickly customize CSS and JS to add to your project. It's built to be flexible to your needs and light to be highly efficient and performant. It's also built to help others learn about our components and why we make the stylistic decisions we do.

##How to use CSS Styles

Our Styleguide allows you to easily select standardized CSS classes you would like to include and easily inject them into your project. Styles are built in [SCSS] (http://sass-lang.com/) and may be found in the folder `public/css/`. Once you have SCSS installed, you'll be able to cherry pick from our pre-built SCSS files and generate your own CSS files.

#### Setup SCSS

Download [SCSS] (http://sass-lang.com/install). If you have Ruby, running `sudo gem install sass` should do the trick, else first install [Ruby] (https://www.ruby-lang.org/en/documentation/installation/).

Go into the folder `public/css/`. Here you'll find many SCSS files. Browse through the classes, and when you're ready to start your own, create a file inside this folder called `localstyle.scss`. Now type this import at the beginning of the file:

```
@import './_boilerplate.scss';
```

This import line will include all the variable dependencies as well as resets, typography, and general boilerplate classes. Now, if you would like to include other files, simply add another line of `@import /path/of/file` to add that SCSS file. Otherwise, if you'd like to cherry pick, from here on out, you can copy paste specific classes from the pre-built SCSS classes or write your own.

Importantly, you're now able to use the variables defined in `_variables.scss`. To use a variable, type `$variable-name` where you would typically type the value for the style attribute.

After you're satisfied with your classes, you're ready to convert to CSS! Go to the css folder in your Terminal. Now run:

```
sass localstyle.scss localstyle.css
```

Now you have a `localstyle.css` file! Drag this file into your project, include it as a link in your HTML and you're all set! This is how generally how you'd generate your css files. 

### SCSS Files

Let's explore the SCSS pre-built files and figure out how to use them.

##### _variables.scss

This file defines the variables we have in our brand assets. Colors, greys, font sizes, line-heights, margins, padding, and other abstractions may be found in this file. We have this file so as to make the rest of the SCSS more readable and maintainable.

##### _typography.scss

This file imports all our Benton fonts. Subsequently, it gives some boilerplate code for fonts, like optimizing legibility, defining font size and line heights for header elements, and creating classes for all the colors and greys. Here is where you'll find all the classes for anything typography related!

##### _boilerplate.scss

This is our bare bones boilerplate. It resets to account for browser quirks. Gives you the magical `vertical-align` class to vertically align any element. Importantly, it imports `_variables.scss` and `_typography.scss` so that when you build the boilerplate, all the variables and typography classes are included.

##### _flexboxgrid.scss

If you'd like to use our flexbox grid, include this file. The grid system is similar to [Bootstrap's Grid] (http://getbootstrap.com/css/). The naming is similar, so read up on how to write with their grid. A few extra frills we threw in: offsets and flexbox. Flexbox gives control over vertical alignment. Adding the class `top-xs`, `middle-xs`, or `bottom-xs` to the row will allow you to align the columns to the top, middle, or bottom of the row. If you have less than 12 columns, adding the class `around-xs` will center your columns so there is space around them while adding the class `between-xs` will push your elements to the full width of the row with space in between. Read more about flexbox magic [here] (https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

##### _styles-all.scss

If you open this file, you'll see that there isn't any SCSS! It literally just imports all the SCSS files we have and aggregates them into one. This makes it easy to simply compile this file and get our entire SCSS styleguide in a nice package. `styles-all.css` is simply the built version of _styles-all.scss. Currently used for the styleguide portfolio. If you're lazy, feel free to drag this css file directly into your project to get all the pre-built classes!

##How to use JS Files

We want to keep our pages lightweight. This means that jQuery is our enemy. So let's write some vanilla JS!

### Setup

For the javascript functions, you'll want to selectively choose which which functions you'd like to use. However, do be cautious of copying functions out of their context. A good rule of thumb is to only copy a function where the function declaration is *not* indented. 

Some functions may have dependencies, all of which are detailed at the top of each file. Most have dependencies on `_helpers.js` which for the most part will be sufficient. To account for these dependencies, make sure you include the dependency file in your project or copy the entire dependency file's contents to the top of your working script.

Create a new script file. Copy each of the functions you would like to use into your new script file. At the bottom of your file, make sure to call each function. That is, for each function you would like to use that looks like: 

```
function myFunction() {
	...
}
```

Make sure you copy the *entire function*! At the bottom of your script, make sure add this line to call it:

```
myFunction()
```

Save the script and you can now add it to your project. Don't forget to link the script in your HTML file!

### JS Files

An explanation of the functions you'll find in each of the JS files so you can determine which 
functions to use. 

##### Helper Functions (_helpers.js)

Likely you won't be actually calling many of the helper functions. This file helps abstract many of the basic functions used by other functions. 

###### handleAnimation(tl)
Takes paused timeline `tl` and starts animation timeline

###### handleHideAnimation(tl)
Takes timeline `tl` and reverts to paused start state

###### debounce(func, wait, immediate)
Debounce a function `func` for a given time `wait`. `immediate` takes values `true` or `false` to determine whether function gets called immediately at first or not.

###### isMobile() 
Returns `true` if device is Mobile.

##### _utility.js

Utility functions like modal handling and widow removal.

###### initModal(elm_id, open_id, vid_link)
Initiates modal with id `elm_id` upon click of elm with id `open_id`. Ensure that your HTML has a modal element with class `modal` and child element with class `modal__container`. Optional video within the modal container, which if you'd like to have a link, add vid_link as an argument.

###### removeWidows(target_class)
Removes widows in all elements with class `target_class`.

##### _scroll.js

For a snapping scroll experience, use the scroll script in this file.

###### initScroll(total, start, animationTl) 
Navigation snap scrolling for a total X number of slides. Starts navigation at slide number `start`. Slides must have ID `slide_0` to `slide_X`. This script accounts for mobile swiping, keydown, and mouse scroll. Optionally, add `animationTl` Animation Timeline to trigger animations upon scroll. In that case, make sure you build your animation timeline!









