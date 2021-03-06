title: Hello World
---
## Headers

```no-highlight
# H1
## H2
### H3
#### H4
##### H5
###### H6

Alternatively, for H1 and H2, an underline-ish style:

Alt-H1
======

Alt-H2
------
```

# H1
## H2
### H3
#### H4
##### H5
###### H6

Alternatively, for H1 and H2, an underline-ish style:

Alt-H1
======

Alt-H2
------

### Header IDs and links

All Markdown-rendered headers automatically get IDs, except in comments.

On hover a link to those IDs becomes visible to make it easier to copy the link to the header to give it to someone else.

The IDs are generated from the content of the header according to the following rules:

1. All text is converted to lowercase
1. All non-word text (e.g., punctuation, HTML) is removed
1. All spaces are converted to hyphens
1. Two or more hyphens in a row are converted to one
1. If a header with the same ID has already been generated, a unique
   incrementing number is appended.

For example:

```
# This header has spaces in it
## This header has a :thumbsup: in it
# This header has Unicode in it: 한글
## This header has spaces in it
### This header has spaces in it
```

Would generate the following link IDs:

1. `this-header-has-spaces-in-it`
1. `this-header-has-a-in-it`
1. `this-header-has-unicode-in-it-한글`
1. `this-header-has-spaces-in-it-1`
1. `this-header-has-spaces-in-it-2`

Note that the Emoji processing happens before the header IDs are generated, so the Emoji is converted to an image which then gets removed from the ID.

## Emphasis

```no-highlight
Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~
```

Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

## Lists

```no-highlight
1. First ordered list item
2. Another item
  * Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
  1. Ordered sub-list
4. And another item.

* Unordered list can use asterisks
- Or minuses
+ Or pluses
```

1. First ordered list item
2. Another item
  * Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
  1. Ordered sub-list
4. And another item.

* Unordered list can use asterisks
- Or minuses
+ Or pluses

If a list item contains multiple paragraphs,
each subsequent paragraph should be indented with four spaces.

```no-highlight
1.  First ordered list item

    Second paragraph of first item.
2.  Another item
```

1.  First ordered list item

    Second paragraph of first item.
2.  Another item

If the second paragraph isn't indented with four spaces,
the second list item will be incorrectly labeled as `1`.

```no-highlight
1. First ordered list item

   Second paragraph of first item.
2. Another item
```

1. First ordered list item

   Second paragraph of first item.
2. Another item

## Links

There are two ways to create links, inline-style and reference-style.

    [I'm an inline-style link](https://www.google.com)

    [I'm a reference-style link][Arbitrary case-insensitive reference text]

    [I'm a relative reference to a repository file](LICENSE)

    [You can use numbers for reference-style link definitions][1]

    Or leave it empty and use the [link text itself][]

    Some text to show that the reference links can follow later.

    [arbitrary case-insensitive reference text]: https://www.mozilla.org
    [1]: http://slashdot.org
    [link text itself]: http://www.reddit.com

[I'm an inline-style link](https://www.google.com)

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself][]

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com

**Note**

Relative links do not allow referencing project files in a wiki page or wiki page in a project file. The reason for this is that, in GitLab, wiki is always a separate git repository. For example:

`[I'm a reference-style link][style]`

will point the link to `wikis/style` when the link is inside of a wiki markdown file.

## Images

    Here's our logo (hover to see the title text):

    Inline-style:
    ![alt text](https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCIe1rqb6o8cCFYL9gAodZzcNpw&url=http%3A%2F%2Flogos.wikia.com%2Fwiki%2FApple&ei=FXPLVcfWIYL7gwTn7rS4Cg&bvm=bv.99804247,d.eXY&psig=AFQjCNEh541PVEVb-eo9U2PSYfHi1vqCqA&ust=1439483027267206)

    Reference-style:
    ![alt text1][logo]

    [logo]: https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCIe1rqb6o8cCFYL9gAodZzcNpw&url=http%3A%2F%2Flogos.wikia.com%2Fwiki%2FApple&ei=FXPLVcfWIYL7gwTn7rS4Cg&bvm=bv.99804247,d.eXY&psig=AFQjCNEh541PVEVb-eo9U2PSYfHi1vqCqA&ust=1439483027267206

Here's our logo:

Inline-style:

![alt text](https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCIe1rqb6o8cCFYL9gAodZzcNpw&url=http%3A%2F%2Flogos.wikia.com%2Fwiki%2FApple&ei=FXPLVcfWIYL7gwTn7rS4Cg&bvm=bv.99804247,d.eXY&psig=AFQjCNEh541PVEVb-eo9U2PSYfHi1vqCqA&ust=1439483027267206)

Reference-style:

![alt text][logo]

[logo]: https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCIe1rqb6o8cCFYL9gAodZzcNpw&url=http%3A%2F%2Flogos.wikia.com%2Fwiki%2FApple&ei=FXPLVcfWIYL7gwTn7rS4Cg&bvm=bv.99804247,d.eXY&psig=AFQjCNEh541PVEVb-eo9U2PSYfHi1vqCqA&ust=1439483027267206

## Blockquotes

```no-highlight
> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.
```

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.

## Inline HTML

You can also use raw HTML in your Markdown, and it'll mostly work pretty well.

See the documentation for HTML::Pipeline's [SanitizationFilter](http://www.rubydoc.info/gems/html-pipeline/HTML/Pipeline/SanitizationFilter#WHITELIST-constant) class for the list of allowed HTML tags and attributes.  In addition to the default `SanitizationFilter` whitelist, GitLab allows `span` elements.

```no-highlight
<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>
```

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

## Horizontal Rule

```
Three or more...

---

Hyphens

***

Asterisks

___

Underscores
```

Three or more...

---

Hyphens

***

Asterisks

___

Underscores

## Line Breaks

My basic recommendation for learning how line breaks work is to experiment and discover -- hit &lt;Enter&gt; once (i.e., insert one newline), then hit it twice (i.e., insert two newlines), see what happens. You'll soon learn to get what you want. "Markdown Toggle" is your friend.

Here are some things to try out:

```
Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

This line is also a separate paragraph, but...
This line is only separated by a single newline, so it's a separate line in the *same paragraph*.

This line is also a separate paragraph, and...  
This line is on its own line, because the previous line ends with two
spaces.
```

Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

This line is also begins a separate paragraph, but...
This line is only separated by a single newline, so it's a separate line in the *same paragraph*.

This line is also a separate paragraph, and...  
This line is on its own line, because the previous line ends with two
spaces.

## Tables

Tables aren't part of the core Markdown spec, but they are part of GFM and Markdown Here supports them.

```
| header 1 | header 2 |
| -------- | -------- |
| cell 1   | cell 2   |
| cell 3   | cell 4   |
```

Code above produces next output:

| header 1 | header 2 |
| -------- | -------- |
| cell 1   | cell 2   |
| cell 3   | cell 4   |

**Note**

The row of dashes between the table header and body must have at least three dashes in each column.

By including colons in the header row, you can align the text within that column:

```
| Left Aligned | Centered | Right Aligned | Left Aligned | Centered | Right Aligned |
| :----------- | :------: | ------------: | :----------- | :------: | ------------: |
| Cell 1       | Cell 2   | Cell 3        | Cell 4       | Cell 5   | Cell 6        |
| Cell 7       | Cell 8   | Cell 9        | Cell 10      | Cell 11  | Cell 12       |
```

| Left Aligned | Centered | Right Aligned | Left Aligned | Centered | Right Aligned |
| :----------- | :------: | ------------: | :----------- | :------: | ------------: |
| Cell 1       | Cell 2   | Cell 3        | Cell 4       | Cell 5   | Cell 6        |
| Cell 7       | Cell 8   | Cell 9        | Cell 10      | Cell 11  | Cell 12       |

## References

- This document leveraged heavily from the [Markdown-Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).
- The [Markdown Syntax Guide](http://daringfireball.net/projects/markdown/syntax) at Daring Fireball is an excellent resource for a detailed explanation of standard markdown.
- [Dillinger.io](http://dillinger.io) is a handy tool for testing standard markdown.
