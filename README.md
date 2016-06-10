# Brand Styleguide

Welcome to the Brand Styleguide! This is a collection of CSS classes and JS functions that will hopefully help everyone build faster, more standardized landing pages. We're constantly refining the styleguide to be up to best web standards of practice. If you would like to make a change or addition to the styleguide, please create a new branch, push your changes, and submit a pull request. Brand Comm will evaluate the change and merge the request if the change makes sense in the grand scheme of the styleguide.

The Styleguide is made to be a tool to allow you to quickly customize CSS and JS to add to your project. It's built to be flexible to your needs and light to be highly efficient and performant. It's also built to help others learn about our components and why we make the stylistic decisions we do.

## How to use Atomic Structure

The atomic structure is based off modules (atoms, molecules, containers) that you can put together and build into a page. To directly use the atomic structure, you'll only need the file `atoms.css`. If you would like to make changes to the modules or add modules, see the below subsections on running SCSS to 

### Concepts

Atomic Structure is made to be very composable. Everything in atomic design is made up of atoms. These atoms go on to make up molecules. Molecules can go inside molecules. For layout purposes, we can then put atoms and molecules within containers to constrain them to a certain width. We can then put these containers within containers or within molecules...! The possibilities are endless. See the [Brandbook Docs] (https://github.com/eventbrite/brandbook) for a more thorough explanation.

To build a page with the Atomic Structure, simply copy paste the atoms, molecules, and containers into an HTML file that has the `atoms.css` file linked. That is, add this line into your HTML:

`<link rel="stylesheet" href="https://s3.amazonaws.com/eventbrite-s3/marketing/landingpages/atomic-design/atoms.css" />`

If linking is not an option, or if you have a customized `atoms.scss` file, you can also copy and paste the entire `atoms.css` file into your HTML file between `<style>` tags.

### Module Portfolio

The file `mastermodules.html` includes the modules in aggregate. It's a nice visual where you can pick out modules you'd like to use. Also good example of how simple modules are built. 

### HTML Structure Reference Guide

The structure of all the modules is laid out here. Copy, paste, test, knock yourself out. These are structures of modules used in the Brandbook. Feel free to use these directly or as reference to create your own molecules as well by putting these atoms, molecules, and/or containers together. 

All the modules in the Reference Guide are optimized for scaling. If you create your own, watch out for scaling quirks and edge cases.

Everything is a Module. So where it says, INSERT MODULE or INFINITE MODULES, you can nest literally anything. Remember though that there's no limit to the composability of these modules -- nest away!

#### Atoms

Atoms are simple in that you cannot define modules within atoms. But be weary of using atoms directly, since they don't have padding/margins. 

```html
<h1 class="atom--head">
	AtomHead
</h1>
```
```html
<h1 class="atom--subhead">
	AtomSubhead
</h1>
```
```html
<p class="atom--quote">
	AtomQuote
</p>
```
```html
<p class="atom--body">
	AtomBody
</p>
```
```html
<p class="atom--body atom--body--bold">
	AtomBodyBold
</p>
```
```html
<p class="atom--body atom--body--upper">
	AtomBodyUpper
</p>
```
```html
<p class="atom--body atom--body--bold atom--body--upper">
	AtomBodyBoldUpper
</p>
```
```html
<p class="atom--caption">
	AtomCaption
</p>
```
```html
<hr class="atom--hr">
</hr>
```
```html
<hr class="atom--hr atom--hr--white">
</hr>
```
```html
<hr class="atom--hr atom--hr--dotted">
</hr>
```
```html
<div class="atom--icon">
	<img src="images/example.png" />
</div>
```
```html
<p class="atom--hero">
	AtomHero
</p>
```
```html
<img class="atom--img" />
```
```html
<div class="atom--button">
	AtomButton
</div>
```

#### Molecules

Molecules have padding and prescribed arrangement of atoms.

Note: The `...` indicate you can add an infinite pieces of content in series. So you could list a hundred things and it would generate all of them elegantly.

```html
<div className="molecule--head">
	<h1 class="atom--head">
		MoleculeHead
	</h1>
	...
</div>
```
```html
<div className="molecule--bodies">
	<p class="atom--body">
	</p>
	...
</div>
```
```html
<div className="molecule--quotes">
	<p class="atom--quote">
	</p>
	...
</div>
```
```html
<div className="molecule--duo container--flex">
	<div className="container--45">
		INSERT MODULE
	</div>
	<div className="container--45">
		INSERT MODULE
	</div>
</div>
```
```html
<div className="molecule--duo container--flex">
	<div className="container--60">
		INSERT MODULE
	</div>
	<div className="container--35">
		INSERT MODULE
	</div>
</div>
```
```html
<div className="molecule--duo molecule--duo--skew--reverse container--flex">
	<div className="container--30">
		INSERT MODULE
	</div>
	<div className="container--65">
		INSERT MODULE
	</div>
</div>
```
```html
<div className="molecule--duo molecule--duo--skew--reverse container--flex">
	<div className="container--45">
		INSERT MODULE
	</div>
	<div className="container--50">
		INSERT MODULE
	</div>
</div>
```
```html
<div className="molecule--duo container--flex molecule--terminal">
	<div className="container--30">
		INSERT MODULE
	</div>
	<div className="container--65">
		INSERT MODULE
	</div>
</div>
```
```html
<div className="molecule--duo molecule--duo--constant container--flex">
	<div className="container--45">
		INSERT MODULE
	</div>
	<div className="container--45">
		INSERT MODULE
	</div>
</div>
```
```html
<div className="molecule--duo container--flex molecule--triple ">
	<div className="container container--30">
		INSERT MODULE
	</div>
	<div className="container container--30">
		INSERT MODULE
	</div>
	<div className="container container--30">
		INSERT MODULE
	</div>
</div>
```
```html
<div className="molecule--duo molecule--quad container--flex">
	<div className="container container--24">
		INSERT MODULE
	</div>
	<div className="container container--24">
		INSERT MODULE
	</div>
	<div className="container container--24">
		INSERT MODULE
	</div>
	<div className="container container--24">
		INSERT MODULE
	</div>
</div>
```
```html
<div className="molecule--range-dotted">
	<hr className="atom--hr atom--hr--dotted">
	</hr>
	<div className="container--flex">
		<div className="molecule--addition">
			<p class="atom--body atom--body--bold">
				AtomBody
			</p>
			<p class="atom--body">
				AtomBody
			</p>
		</div>
		<div className="molecule--addition align-right">
			<p class="atom--body atom--body--bold">
				AtomBody
			</p>
			<p class="atom--body">
				AtomBody
			</p>
		</div>
	</div>
</div>
```
```html
<div className="molecule--trait container--flex">
	<div className="container container--50">
		<h1 className="atom--head">
			AtomHead
		</h1>
	</div>
	<div className="container container--40">
		<div className="atom--hr atom--hr--light">
		</div>
		<p className="atom--body">
			AtomBody
		</p>
	</div>
</div>
```
```html
<div className="molecule--term container container--flex">
	<div className="container--65">
		<h1 className="atom--head">
			AtomHead
		</h1>
		<p className="atom--body">
			AtomBody
		</p>
	</div>
	<div className="container--35">
		<div className="atom--hr atom--hr--light">
		</div>
		<p className="atom--body">
			AtomBody
		</p>
		<p className="atom--quote">
			AtomQuote
		</p>
	</div>
</div>
```
```html
<div className="molecule--detail container--flex">
	<div className="container--40">
		<div className="atom--hr atom--hr--light">
		</div>
		<p className="atom--body">
			AtomBody
		</p>
		<p className="atom--body">
			AtomBody
		</p>
	</div>
</div>
```
```html
<div className="molecule--detail--right">
	<div className="atom--hr atom--hr--light">
	</div>
	<p className="atom--caption">
		AtomCaption
	</p>
	<p className="atom--caption">
		AtomCaption
	</p>
</div>
```
```html
<div className="molecule--quote">
	<div className="container--20">
		<div className="atom--hr atom--hr--light">
		</div>
	</div>
	<p className="atom--body atom--body--bold">
		AtomBodyBold
	</p>
	<p className="atom--body color-grey-300">
		AtomBody
	</p>
	<div className="container container--100">
		<p className="atom--body">
			- AtomBody
		</p>
		<p className="atom--body">
			- AtomBody
		</p>
		<p className="atom--body">
			- AtomBody
		</p>
	</div>
</div>
```
```html
<div className="molecule--pull-quote">
	<div className="container container--100">
		<p className="atom--quote">
			AtomQuote
		</p>
	</div>
</div>
```
```html
<div className="molecule--section container container--flex">
	<div className="container--20">
		<div className="atom--hr atom--hr--light">
		</div>
		<p className="atom--body">
			AtomBody
		</p>
	</div>
	<div className="container--75">
		<p className="atom--quote">
			AtomQuote
		</p>
	</div>
</div>
```
```html
<div className="molecule--desc">
	<div className="atom--hr atom--hr--light">
	</div>
	<p className="atom--body">
		AtomBody
	</p>
	...
</div>
```
```html
<div className="molecule--icon container--flex">
	<div className="container--icon">
		<div className="atom--icon">
			<img src="images/example.png"/>
		</div>
	</div>
	<div className="container--wrap">
	<p className="atom--caption">
		AtomCaption
	</p>
	</div>
</div>
```
```html
<div className="molecule--parent">
	<div className="atom--quote color-grey-300">
		AtomQuote
	</div>
	<div className="atom--quote">
		AtomQuote
	</div>
</div>
```
```html
<div className="molecule--bottom">
	<div className="container container--40">
		<div className="container--10">
			<div className="atom--hr atom--hr--light">
			</div>
		</div>
		<p className="atom--body">
			AtomBody
		</p>
	</div>
</div>
```
```html
<div className="molecule--side">
	<div className="container container--100">
		<div className="atom--hr atom--hr--light">
		</div>
		<p className="atom--body">
			AtomBody
		</p>
		...
	</div>
</div>
```
```html
<div className="molecule--footer">
	<div className="container container--80">
		<div className="atom--hr atom--hr--light">
		</div>
		<p className="atom--body">
			AtomBody
		</p>
		...
	</div>
</div>
```
```html
<div className="molecule--addition">
	<p className="atom--body">
		AtomBodyBold
	</p>
	<p className="atom--body">
		AtomBody
	</p>
	...
</div>
```
```html
<div className="molecule--addition align-right">
	<p className="atom--body atom--body--bold">
		AtomBodyBold
	</p>
	<p className="atom--body">
		AtomBody
	</p>
</div>
```
```html
<!-- Adjust container--XX for different sizing -->
<div className="molecule--img align-center container--100" >
	<img className="atom--img" src="images/example.png" />
</div>
```
```html
<div className="molecule--img container--100">
	<img className="atom--img" src="images/example.png" />
</div>
<div className="molecule--img">
	<img className="atom--img" src="images/example.png" />
	<div className="molecule--icon container--flex">
		<div className="container--icon">
			<div className="atom--icon">
				<img src="images/example.png"/>
			</div>
		</div>
		<div className="container--wrap">
		<p className="atom--caption">
			AtomCaption
		</p>
		</div>
	</div>
</div>
```
```html
<div className="molecule--subhead-detail">
	<p className="atom--body">
		AtomBody
	</p>
	<h2 className="atom--subhead">
		AtomSubhead
	</h2>
</div>
```
```html
<div className="molecule--second-head">
	<h2 className="atom--subhead">
		AtomSubhead
	</h2>
</div>
```
```html
<div className="molecule--subheads">
	<h1 className="atom--subhead">
		AtomSubhead
	</h1> 
	<h1 className="atom--subhead">
		AtomSubhead
	</h1> 
</div>
```
```html
<div className="molecule--subhead-quote">
	<img src="images/example.png" />
	<h1 className="atom--subhead">
		AtomSubhead
	</h1> 
</div>
```
```html
<a href="URL-SOURCE" target="__blank">
	<div className="molecule--button">
		<div class="atom--button">
			AtomButton
		</div>
	</div>
</a>
```

#### Containers

Containers enclose these modules. All modules can nest within containers, including containers. They have nice padding/margins. Where you see `{...}` is where you would write in modules.

If you want a container of any particular width, call the class `container--XX` where XX represents width XX% you want for that container.

```html
<div class="container--skin">
	ContainerSkin has no margin/padding. Helpful for packaging
</div>
```
```html
<div class="container--flex">
	ContainerFlex will flex the elements within. Make sure their widths add to 100%
</div>
```
```html
<div class="container--main container--100">
	ContainerMain has default gutters.
</div>
```
```html
<div class="container--narrow container--100">
	ContainerNarrow has narrow gutters.
</div>
```
```html
<div class="container--thin container--100">
	ContainerThin has thin gutters.
</div>
```
```html
<div class="container--squeeze">
	ContainerSqueeze will reduce margin/padding for elements within.
</div>
```
```html
<div class="container--100">
	Container--XX will render you a container with width XX%.
</div>
```
```html
<div class="container--bkgd container--main container--100" style="background-image: url(images/bkgd-example.png)" >
	ContainerBkgd allows you to have content on top of an image.
</div>
```

#### One-off CSS Classes

Of course, the modules don't cover absolutely everything. Here are a few one-off classes that have been helpful. Simply add them to the element's class list and the styles will appear. 

```
color-grey-300 // text color 
```
```
color-grey-600 // text color 
```
```
color-grey-900 // text color 
```
```
color-white // text color 
```
```
gradient-text // text color 
```
```
padding-top // extra padding top
```
```
color-sunrise-500 // text color 
```
```
color-deepsea-500 // text color 
```
```
color-surf-500 // text color 
```
```
bkgd-sunrise-500 // bkgd color
```
```
bkgd-deepsea-500 // bkgd color
```
```
bkgd-aloe-500 // bkgd color
```
```
bkgd-surf-500 // bkgd color
```
```
bkgd-gradient-orange // bkgd color
```
```
bkgd-gradient-green // bkgd color
```
```
bkgd-gradient-blue // bkgd color
```
```
bkgd-gradient-pink // bkgd color
```
```
bkgd-secondary-purple // bkgd color
```
```
bkgd-secondary-pink // bkgd color
```
```
bkgd-secondary-yellow // bkgd color
```
```
font-medium // made font bold
```
```
align-center // align text center
```
```
align-right // align text center
```

### Changing Atomic Variables (_variables.scss)

At times you'll need to change the variables like color, font-size, etc that govern the entire structure. All the variables are found in the `_variables.scss` file. Open this file, make the changes to the variables. Save. Now in Terminal, you'll run Sass to make all your changes flow through into the `atoms.css` file. 

Assuming you have SASS installed (see How to use CSS section for details). In Terminal, navigate into `brand-styleguide/public/css`. Now run:
```
sass atoms.scss atoms.css
```
This command tells SASS to transcribe your `atoms.scss` into `atoms.css`. Since `atoms.scss` calls upon `_variables.scss`, your changes will permeate through.

More on SASS in the How to use CSS section of this guide.

### Updating the Style of Modules (atoms.scss)

To update the CSS classes of modules, open up `atoms.scss` and find the class you want to manipulate. Change it to your liking. 

Note the nested structure of some molecules. This defines nested modules for specific parent modules. For example:
```css
.EXAMPLE-MOLECULE {
	.EXAMPLE-ATOM {
		// some changes
	}
}
```
The changes defined in the nested `EXAMPLE-ATOM` class will only be reflected in the atom when it is in that particular `EXAMPLE-MOLECULE`. This is how we can control specific styling within modules.

Note: Always always always use the variables defined. No magic numbers. If you need to, define variables at the top.

##### Dependencies: `_variables.scss`, `_boilerplate.scss`, `_typography.scss`

Make sure the dependencies are inside your folder before you run 
```
sass atoms.scss atoms.css
```
To have your changes permeate into `atoms.css`.

Tip: If you're making a ton of changes and testing in real-time, run 
```
sass --watch atoms.scss:atoms.css
```
to have SASS live update your `atoms.css` file.

### Adding Modules (atoms.scss)

Similar to updating the style of modules, you'll add a class and update the `mastermolecules.html` and also this `README.md` to include your new module. New one-off styles can be added and also updated in the `README.md`.

### Updating the Master Atomic Structure

1. Push to Github (see brandbook for commands)
2. Update the AWS `atoms.css` file

## How to use CSS Styles

Our Styleguide allows you to easily select standardized CSS classes you would like to include and easily inject them into your project. Styles are built in [SCSS] (http://sass-lang.com/) and may be found in the folder `public/css/`. Once you have SCSS installed, you'll be able to cherry pick from our pre-built SCSS files and generate your own CSS files.

### Setup SCSS

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

##### atoms.scss

This is the SCSS file for the atoms. Refer to the section on How to Use Atomic Structure.

##How to use JS Files

We want to keep our pages lightweight. This means that jQuery is our enemy. So let's write some vanilla JS!

### JS Setup

For the javascript functions, you'll want to selectively choose which functions you'd like to use. Once you find those, determine which script files they live in and make sure to include those scripts.

Some functions may have dependencies, all of which are detailed at the top of each file. Most have dependencies on `_helpers.js` which for the most part will be sufficient. To account for these dependencies, make sure you include the dependency file in your project. Some will have vendor dependencies, so if it's not working, check your dependencies!

After copying the necessary JS files into your project and adding them to your HTML accordingly, create a new script file and add it to your HTML below the dependencies. Now in your script, make sure to call each function you would like to use. That is, for each function you would like to use that looks like: 

```
function myFunction() {
	...
}
```

In your script, make sure add this line to call it:

```
myFunction()
```

Save and don't forget to link the script in your HTML file!

### JS Files

An explanation of the functions you'll find in each of the JS files so you can determine which functions to use. All available functions are listed here. Other functions you see in the scripts may be nested or private and so not callable. 

##### Helper Functions (_helpers.js)

Likely you won't be actually calling many of the helper functions. This file helps abstract many of the basic functions used by other functions. 

* ###### handleAnimation(tl)
Takes paused timeline `tl` and starts animation timeline

* ###### handleHideAnimation(tl)
Takes timeline `tl` and reverts to paused start state

* ###### debounce(func, wait, immediate)
Debounce a function `func` for a given time `wait`. `immediate` takes values `true` or `false` to determine whether function gets called immediately at first or not.

* ###### isMobile() 
Returns `true` if device is Mobile.

##### Utility Functions (_utility.js)

Utility functions like modal handling and widow removal.

* ###### initModal(elm_id, open_id, vid_link)
Initiates modal with id `elm_id` upon click of elm with id `open_id`. Ensure that your HTML has a modal element with class `modal` and child element with class `modal__container`. Optional video within the modal container, which if you'd like to have a link, add vid_link as an argument.

* ###### removeWidows(target_class)
Removes widows in all elements with class `target_class`.

##### Scroll Navigation (_scroll.js)

For a snapping scroll experience, use the scroll script in this file.

###### initScroll(total, start, animationTl)
Navigation snap scrolling for a total X number of slides. Starts navigation at slide number `start`. Slides must have ID `slide_0` to `slide_X`. This script accounts for mobile swiping, keydown, and mouse scroll. Optionally, add `animationTl` Animation Timeline to trigger animations upon scroll. In that case, make sure you build your animation timeline!
Requires Vendor Dependency: smooth-scroll.min.js

##### Animation (gsap.js)

Animations can be created as single instances (single tween) or as a series of animations (timeline) triggered by some event. For further gsap docs, check out [Greensock] (http://greensock.com/gsap).

###### Tween
For an animation, you'll need the element `elm` you want to animate, the duration `duration` and define the attributes you'd like to animate. The syntax looks as below.
```
TweenLite.from(elm, duration, {attribute: value, attribute: value, ...})
```
```
TweenLite.to(elm, duration, {attribute: value, attribute: value, ...})
```
Tween `.from` determines which attributes you'd like the element to animate from. Tween `.to` determines which attributes you'd like the element to animate to.
All CSS attributes may be used (with JS attribute names). Ease may also be defined as an attribute. 

###### Timeline
Similarly to the Tween, you'll want to define your elements and parameters, but this time, instead of one statement, you'll string them together so they happen in sequence one after the other.
```
var timeline = new TimelineMax();

timeline.from(elm, duration, {attribute: value, attribute: value, ...})
.from(elm, duration, {attribute: value, attribute: value, ...})
.to(elm, duration, {attribute: value, attribute: value, ...})
...
```
Add whichever tweens you'd like and you're all set! Importantly, you'll define the timeline as a variable. This gives you control over it, so you can use it with initScroll. Or simply use it with the `handleAnimation()` and `handleHideAnimation()` helper functions.

That's it for now! Ping Jessica Ma if there are bugs, as not everything is perfect yet! gl;hf









