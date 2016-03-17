# Brand Styleguide

Welcome to the Brand Styleguide!

##How to use CSS Styles

Our Styleguide allows you to easily select standardized CSS classes you would like to include and easily inject them into your project. Styles are built in [SCSS] (http://sass-lang.com/) and may be found in the folder `public/css/`. Once you have SCSS installed, you'll be able to cherry pick from our pre-built SCSS files and generate your own CSS files.

#### Setup SCSS

Download SCSS from [here] (http://sass-lang.com/install). If you have Ruby, running `sudo gem install sass` should do the trick, else first install [Ruby] (https://www.ruby-lang.org/en/documentation/installation/).

Go into the folder `public/css/`. Here you'll find many SCSS files. Browse through the classes, and when you're ready to start your own, create a file inside this folder called `localstyle.scss`. Now type this import at the beginning of the file:

```
@import './_boilerplate.scss';
```

This import line will include all the variable dependencies as well as resets, typography, and general boilerplate classes. Now, if you would like to include other files, simply add another line of `@import /path/of/file` to add that SCSS file. Otherwise, if you'd like to cherry pick, from here on out, you can copy paste specific classes from the pre-built SCSS classes or write your own.

Importantly, you're now able to use the variables defined in `_variables.scss`. To use a variable: `$variable-name`.

After you're satisfied with your classes, you're ready to convert to CSS! Go to the css folder in your Terminal. Now run:

```
sass localstyle.scss localstyle.css
```

Now you have a `localstyle.css` file! Drag this file into your project, include it as a link in your HTML and you're all set!

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

If you open this file, you'll see that there isn't any SCSS! It literally just imports all the SCSS files we have and aggregates them into one. This makes it easy to simply compile this file and get our entire SCSS styleguide in a nice package. `styles-all.css` is simply the built version of _styles-all.scss. Currently used for the styleguide portfolio.

##How to use JS Files

