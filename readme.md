# Personal Web Site for Peter Lyons

## Tech Stack

- zola static site generator (rust)
- tera templates
- content in markdown
- a handful of zola "templates" which are kind of like macros for templating
- netlify.com for automated hosting and deployment, integrated with github

## Misc Notes

- 2019-03-24 search and replace notes for flickr albums

```
# search and replace regex
[^!]\[([^!].+)]\(/app/photos\?gallery=(\w+).*\)

# replacement value
{{ album(dirname="$2", id="", text="$1") }}
```
- 2021-07-24 Test netlify updated build image
