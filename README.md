[![Build Status](https://travis-ci.org/burden/jekyll-business-sense.svg?branch=master)](https://travis-ci.org/burden/jekyll-business-sense)
# Jekyll Business Sense

> A remarkable single page Jekyll theme for your small business, packed full of SERP tidbits.

[Demo](http://jekyll-business-sense.burden.cc)

## Features
- Rich results: [SiteNavigationElement](https://schema.org/SiteNavigationElement), [Service](https://schema.org/Service), [LocalBusiness](https://schema.org/LocalBusiness), [OfferCatalog](https://schema.org/OfferCatalog), [PostalAddress](https://schema.org/PostalAddress)
- Open Graph:  [website](https://developers.facebook.com/docs/reference/opengraph/object-type/website), [business.business](https://developers.facebook.com/docs/reference/opengraph/object-type/business.business/)
- Operating hours
- Contact form: Formspree (redirects back to your "thank you" page)
- Testimonials
- Lightbox Photo Gallery
- Obfuscated email address for spam protection
- [Bulma 0.7.1](https://github.com/jgthms/bulma/tree/0.7.1)
- Dependency management: [bower](https://bower.io)
- Asset pipeline: [jekyll-assets](https://rubygems.org/gems/jekyll-assets)
  - [JS uglifier](https://rubygems.org/gems/uglifier/versions/3.2.0)
- HTML compression: [compress.html](http://jch.penibelst.de/)
- Testing: [html-proofer](https://github.com/gjtorikian/html-proofer)
- Analytics: [Google Analytics](https://www.google.com/analytics/)

## Getting Started
**Install dependencies**
```sh
$ bundle install
$ bower install
```
**Run the jekyll server**
```sh
$ bundle exec jekyll serve --config _config.yml,_config_local.yml
```

## Moving in

### Site Settings

Settings pertaining to the way your site behaves can be found in jekyll's default configuration file.

Open `_config.yml` and find the `# Site Settings` section to make changes.

#### Setup Custom Domain

1. Update the `url:` block found in `_config.yml`
2. Update `src/CNAME`

### Business Settings

Settings pertaining to the operation of your business can be found in YAML files stored in the `src/data` directory.

#### services.yml

The `services` block contains your business's service offers.

Use `industry` to describe a high-level overview of your business (e.g. Pest Control, Windshield Repair, Communication)

`area-served` block expects `type` to be Text, or an [AdministrativeArea](https://schema.org/AdministrativeArea) such as [City](https://schema.org/City), or [State](https://schema.org/State).  
The `caption` pair will be used for display.
```yaml
industry: Hiking gear rental
area-served:
  type: City
  caption: Santa Barbara
```

The `catalog` block is used to display your services to the audience. You can add as many blocks as you need.
```yaml
catalog:
  - name: Windshield Replacement & Repair
    offers:
      - name: Windshield Repair
        description: We can seal a small chip and some cracks in the glass.
      - name: Windshield Replacement
        description: We will replace the windshield.
```

#### contacts.yml

Update your address, contact email, and phone

Add obfuscated email address
```sh
$ bundle exec rake email
Please type in an email address then press ENTER/RETURN
contact@example.com

Installation:
Update src/data/contacts.yml with the following pairs.

email-key: d05fIsWcv61GbThaN3FkOuL9mHXVnYgBQJUR8r2S7DizwKexqtAZMCP4Eoplyj
email-encoded: XhxWUXW@fIUzaNf.Xhz
```
#### commitments.yml

The `commitments` block is used for options such as operating hours, and currency.

Use `summary:` to show a message after opening hours.  
`ld-hours:` Operating hours for a business.  
`caption:` is  displayed on the page.  
`hours:` expects specific values. See [openingHours](https://schema.org/openingHours)

```yaml
...
summary: "After hours: appointments may be available upon request"
ld-hours:
  - caption: "Monday – Friday 9:00a – 5:00p"
    hours: "Mo-Fr 09:00-17:00"
  - caption: "Weekends 12:00p - 8:00p"
    hours: "Sa-Su 12:00-20:00"
```

Omit the `ld-hours:` block for a simplified commitment message.

```yaml
summary: "Always on-time, guaranteed."
```

Set `always-open:` to `true` if your business operates 24/7
```yaml
always-open: true
```

`og-hours:` wraps open graph's [business:hours](https://developers.facebook.com/docs/reference/opengraph/object-type/business.business/) property. Each day requires a new block.
```yaml
og-hours:
  - day: monday
    begin: "09:00:00"
    end: "17:00:00"
```

Finally, don't forget to check out `currencies-accepted:`, `payment-accepted:`, and `price-range:`

#### credentials.yml

The `credentials` block is for listing items such as licenses, or achievements.

```yaml
- Commercially Insured for Liability
- "Business License: 100001234"
```

#### gallery.yml

Update the photo gallery by making changes to the `gallery` block.

`url:` is the full sized image shown in the lightbox  
`thumbnail:` (optional) is a smaller version of the image shown on the page.  
`name` must be unique

```yaml
- url: https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1350&q=60&cs=tinysrgb
  thumb: https://images.unsplash.com/photo-1497215728101-856f4ea42174?dpr=1&auto=format&fit=crop&w=640&q=80&cs=tinysrgb
  name: image1
```

#### testimonials.yml

Add testimonials by updating the `testimonials` block.

`publish:` must be set to `true` to be displayed on the webpage.

```yaml
- name: Satisfied Client 1
  comments: Mi facilisis platea natoque eu, montes tincidunt nostra praesent ornare non sociis dignissim.
  publish: true
```

## Deploy to Github Pages from Travis
1. Point Travis to repository
2. Configure Travis
3. Generate a [Personal Access Token](https://github.com/settings/tokens) from Github
  - The only scope needed is repo:public_repo
4. Set `GITHUB_API=<token>` on Travis
  - Make sure `Display value in build log` toggle is set to `Off`!
