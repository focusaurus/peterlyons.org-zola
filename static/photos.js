const galleries = [
  {
    dirName: "burning_man_2011",
    displayName: "Burning Man 2011",
    startDate: "2011-08-24T06:00:00.000Z"
  },
  {
    dirName: "summer_2011",
    displayName: "Summer 2011",
    startDate: "2011-07-01T06:00:00.000Z"
  },
  {
    dirName: "spring_2011",
    displayName: "Spring 2011",
    startDate: "2011-05-01T06:00:00.000Z"
  },
  {
    dirName: "california_january_2011",
    displayName: "California January 2011",
    startDate: "2011-01-17T07:00:00.000Z"
  },
  {
    dirName: "winter_2010",
    displayName: "Winter 2010",
    startDate: "2010-12-20T07:00:00.000Z"
  },
  {
    dirName: "thanksgiving_2010",
    displayName: "Thanksgiving 2010",
    startDate: "2010-11-25T07:00:00.000Z"
  },
  {
    dirName: "margys_hut_trip_sept_2010",
    displayName: "Margy's hut trip September 2010",
    startDate: "2010-09-27T06:00:00.000Z"
  },
  {
    dirName: "fall_2010",
    displayName: "Fall 2010",
    startDate: "2010-09-01T06:00:00.000Z"
  },
  {
    dirName: "romania_august_2010",
    displayName: "Romania August 2010",
    startDate: "2010-08-26T06:00:00.000Z"
  },
  {
    dirName: "vermont_august_2010",
    displayName: "Vermont August 2010",
    startDate: "2010-08-06T06:00:00.000Z"
  },
  {
    dirName: "summer_2010",
    displayName: "Summer 2010",
    startDate: "2010-06-20T06:00:00.000Z"
  },
  {
    dirName: "hilton_head_2010",
    displayName: "Hilton Head 2010",
    startDate: "2010-06-18T06:00:00.000Z"
  },
  {
    dirName: "san_francisco_april_2010",
    displayName: "San Francisco April 2010",
    startDate: "2010-04-25T06:00:00.000Z"
  },
  {
    dirName: "spring_2010",
    displayName: "Spring 2010",
    startDate: "2010-04-15T06:00:00.000Z"
  },
  {
    dirName: "belize_2010",
    displayName: "Belize 2010",
    startDate: "2010-02-17T07:00:00.000Z"
  },
  {
    dirName: "winter_2009",
    displayName: "Winter 2009",
    startDate: "2009-12-20T07:00:00.000Z"
  },
  {
    dirName: "thanksgiving_2009",
    displayName: "Thanksgiving 2009",
    startDate: "2009-11-26T07:00:00.000Z"
  },
  {
    dirName: "halloween_2009",
    displayName: "Halloween 2009",
    startDate: "2009-10-31T06:00:00.000Z"
  },
  {
    dirName: "fall_2009",
    displayName: "Fall 2009",
    startDate: "2009-09-01T06:00:00.000Z"
  },
  {
    dirName: "burning_man_2009",
    displayName: "Burning Man 2009",
    startDate: "2009-08-27T06:00:00.000Z"
  },
  {
    dirName: "san_francisco_aug_2009",
    displayName: "San Francisco August 2009",
    startDate: "2009-08-03T06:00:00.000Z"
  },
  {
    dirName: "summer_2009",
    displayName: "Summer 2009",
    startDate: "2009-06-20T06:00:00.000Z"
  },
  {
    dirName: "hilton_head_2009",
    displayName: "Hilton Head 2009",
    startDate: "2009-06-14T06:00:00.000Z"
  },
  {
    dirName: "spring_2009",
    displayName: "Spring 2009",
    startDate: "2009-04-15T06:00:00.000Z"
  },
  {
    dirName: "vancouver_2009",
    displayName: "Vancouver 2009",
    startDate: "2009-04-10T06:00:00.000Z"
  },
  {
    dirName: "portland_spring_2009",
    displayName: "Portland Spring 2009",
    startDate: "2009-04-07T06:00:00.000Z"
  },
  {
    dirName: "winter_2008",
    displayName: "Winter 2008",
    startDate: "2008-12-20T07:00:00.000Z"
  },
  {
    dirName: "golden_2008",
    displayName: "Golden 2008",
    startDate: "2008-09-01T06:00:00.000Z"
  },
  {
    dirName: "boulder_fall_2008",
    displayName: "Boulder Fall 2008",
    startDate: "2008-09-01T06:00:00.000Z"
  },
  {
    dirName: "burning_man_2008",
    displayName: "Burning Man 2008",
    startDate: "2008-08-27T06:00:00.000Z"
  },
  {
    dirName: "flagstaff_2008_part_2",
    displayName: "Flagstaff 2008 part 2",
    startDate: "2008-08-01T06:00:00.000Z"
  },
  {
    dirName: "flagstaff_2008_part_1",
    displayName: "Flagstaff 2008 part 1",
    startDate: "2008-07-01T06:00:00.000Z"
  },
  {
    dirName: "hilton_head_2008",
    displayName: "Hilton Head 2008",
    startDate: "2008-06-28T06:00:00.000Z"
  },
  {
    dirName: "jacksonville_2008",
    displayName: "Jacksonville 2008",
    startDate: "2008-06-21T06:00:00.000Z"
  },
  {
    dirName: "los_angeles_june_2008",
    displayName: "Los Angeles June 2008",
    startDate: "2008-06-13T06:00:00.000Z"
  },
  {
    dirName: "drive_to_sunnyvale_2008",
    displayName: "Drive to Sunnyvale 2008",
    startDate: "2008-06-04T06:00:00.000Z"
  },
  {
    dirName: "portland_2008_part_2",
    displayName: "Portland 2008 part 2",
    startDate: "2008-06-02T06:00:00.000Z"
  },
  {
    dirName: "nj_visit_may_2008",
    displayName: "Nj visit May 2008",
    startDate: "2008-05-20T06:00:00.000Z"
  },
  {
    dirName: "portland_2008_part_1",
    displayName: "Portland 2008 part 1",
    startDate: "2008-05-11T06:00:00.000Z"
  },
  {
    dirName: "bend_2008_part_2",
    displayName: "Bend 2008 part 2",
    startDate: "2008-05-01T06:00:00.000Z"
  },
  {
    dirName: "bend_2008_part_1",
    displayName: "Bend 2008 part 1",
    startDate: "2008-04-13T06:00:00.000Z"
  },
  {
    dirName: "boise_2008",
    displayName: "Boise 2008",
    startDate: "2008-03-09T07:00:00.000Z"
  },
  {
    dirName: "park_city_2008",
    displayName: "Park City 2008",
    startDate: "2008-02-10T07:00:00.000Z"
  },
  {
    dirName: "boulder_2007",
    displayName: "Boulder 2007",
    startDate: "2007-12-30T07:00:00.000Z"
  },
  {
    dirName: "santa_fe_2007",
    displayName: "Santa Fe 2007",
    startDate: "2007-11-11T07:00:00.000Z"
  },
  {
    dirName: "cross_country_drive_2007",
    displayName: "Cross country drive 2007",
    startDate: "2007-11-01T06:00:00.000Z"
  },
  {
    dirName: "halloween_2007",
    displayName: "Halloween 2007",
    startDate: "2007-10-31T06:00:00.000Z"
  },
  {
    dirName: "romania_2007",
    displayName: "Romania 2007",
    startDate: "2007-10-05T06:00:00.000Z"
  },
  {
    dirName: "puerto_rico_2007",
    displayName: "Puerto Rico 2007",
    startDate: "2007-08-24T06:00:00.000Z"
  },
  {
    dirName: "summer_2007_misc",
    displayName: "Summer 2007 misc",
    startDate: "2007-06-20T06:00:00.000Z"
  },
  {
    dirName: "hawaii_2007",
    displayName: "Hawaii 2007",
    startDate: "2007-06-12T06:00:00.000Z"
  },
  {
    dirName: "metrometro_20070512",
    displayName: "Metrometro May 12, 2007",
    startDate: "2007-05-12T06:00:00.000Z"
  },
  {
    dirName: "jamfest_20070505",
    displayName: "Jamfest May 5, 2007",
    startDate: "2007-05-05T06:00:00.000Z"
  },
  {
    dirName: "climbing_20070331",
    displayName: "Climbing March 31, 2007",
    startDate: "2007-03-31T06:00:00.000Z"
  },
  {
    dirName: "recording_20061205",
    displayName: "Recording December 5, 2006",
    startDate: "2006-12-05T07:00:00.000Z"
  },
  {
    dirName: "birthday_2006",
    displayName: "Birthday 2006",
    startDate: "2006-09-20T06:00:00.000Z"
  },
  {
    dirName: "croatia_20060707",
    displayName: "Croatia July 7, 2006",
    startDate: "2006-07-07T06:00:00.000Z"
  },
  {
    dirName: "memorial_day_2006",
    displayName: "Memorial Day 2006",
    startDate: "2006-05-29T06:00:00.000Z"
  },
  {
    dirName: "metrometro_20060506",
    displayName: "Metrometro May 6, 2006",
    startDate: "2006-05-06T06:00:00.000Z"
  },
  {
    dirName: "jamfest_20060423",
    displayName: "Jamfest April 23, 2006",
    startDate: "2006-04-23T06:00:00.000Z"
  },
  {
    dirName: "knitting_factory_20060420",
    displayName: "Knitting Factory April 20, 2006",
    startDate: "2006-04-20T06:00:00.000Z"
  },
  {
    dirName: "adirondacks_20060217",
    displayName: "Adirondacks February 17, 2006",
    startDate: "2006-02-17T07:00:00.000Z"
  },
  {
    dirName: "halloween_2005",
    displayName: "Halloween 2005",
    startDate: "2005-10-31T07:00:00.000Z"
  },
  {
    dirName: "curacao",
    displayName: "Curacao",
    startDate: "2005-08-17T06:00:00.000Z"
  },
  {
    dirName: "london_summer_2005",
    displayName: "London Summer 2005",
    startDate: "2005-06-14T06:00:00.000Z"
  },
  {
    dirName: "halloween_party_2004",
    displayName: "Halloween party 2004",
    startDate: "2004-10-31T06:00:00.000Z"
  },
  {
    dirName: "halloween_parade_2004",
    displayName: "Halloween parade 2004",
    startDate: "2004-10-31T06:00:00.000Z"
  },
  {
    dirName: "confunktion_junction_20041023",
    displayName: "Confunktion Junction October 23, 2004",
    startDate: "2004-10-23T06:00:00.000Z"
  },
  {
    dirName: "labor_day_2004",
    displayName: "Labor Day 2004",
    startDate: "2004-09-06T06:00:00.000Z"
  },
  {
    dirName: "maine_trip_20040821",
    displayName: "Maine trip August 21, 2004",
    startDate: "2004-08-21T06:00:00.000Z"
  },
  {
    dirName: "paintball_20040814",
    displayName: "Paintball August 14, 2004",
    startDate: "2004-08-14T06:00:00.000Z"
  },
  {
    dirName: "lyons_reunion_20040724",
    displayName: "Lyons reunion July 24, 2004",
    startDate: "2004-07-24T06:00:00.000Z"
  },
  {
    dirName: "confunktion_junction_20040717",
    displayName: "Confunktion Junction July 17, 2004",
    startDate: "2004-07-17T06:00:00.000Z"
  },
  {
    dirName: "wake_forest_graduation",
    displayName: "Wake Forest graduation",
    startDate: "2004-05-15T06:00:00.000Z"
  },
  {
    dirName: "copper_mtn_2004",
    displayName: "Copper Mountain 2004",
    startDate: "2004-01-20T07:00:00.000Z"
  },
  {
    dirName: "halloween_2003",
    displayName: "Halloween 2003",
    startDate: "2003-10-31T07:00:00.000Z"
  },
  {
    dirName: "birthday_2003",
    displayName: "Birthday 2003",
    startDate: "2003-09-20T06:00:00.000Z"
  },
  {
    dirName: "sax_quartet_central_park_20030905",
    displayName: "Sax quartet Central Park September 5, 2003",
    startDate: "2003-09-05T06:00:00.000Z"
  },
  {
    dirName: "sax_quartet_thf_20030810",
    displayName: "Sax quartet at The Hit Factory August 10, 2003",
    startDate: "2003-08-10T06:00:00.000Z"
  },
  {
    dirName: "halloween_2002",
    displayName: "Halloween 2002",
    startDate: "2002-10-31T07:00:00.000Z"
  },
  {
    dirName: "portugal",
    displayName: "Portugal",
    startDate: "2002-04-18T06:00:00.000Z"
  },
  {
    dirName: "winter_2001",
    displayName: "Winter 2001",
    startDate: "2001-12-20T07:00:00.000Z"
  },
  {
    dirName: "fall_2001",
    displayName: "Fall 2001",
    startDate: "2001-09-01T06:00:00.000Z"
  },
  {
    dirName: "summer_2001",
    displayName: "Summer 2001",
    startDate: "2001-06-20T06:00:00.000Z"
  },
  {
    dirName: "spring_2001",
    displayName: "Spring 2001",
    startDate: "2001-04-15T06:00:00.000Z"
  },
  {
    dirName: "summer_2000",
    displayName: "Summer 2000",
    startDate: "2000-06-20T06:00:00.000Z"
  },
  {
    dirName: "henry_mancini",
    displayName: "Henry Mancini",
    startDate: "1999-08-01T06:00:00.000Z"
  }
];
/* global window document */
function escape(input) {
  // https://github.com/sindresorhus/escape-goat/blob/deaa41d2e6a2b6345ec23fa9e5b8ff1706693c9b/index.js#L3
  return input
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function tag(input) {
  // https://github.com/sindresorhus/escape-goat/blob/deaa41d2e6a2b6345ec23fa9e5b8ff1706693c9b/index.js#L17
  let output = input[0];
  for (let i = 1; i < arguments.length; i++) {
    output = output + escape(arguments[i]) + input[i];
  }
  return output;
}

const pageState = {};
const photoBase = "https://peterlyons-org.s3.amazonaws.com";

function dom(selector) {
  return document.querySelector(`.view-gallery ${selector}`);
}

function thumbnail(photo) {
  return tag`<a class="thumbnail" href="${photo.pageURI}">
  <img
    class="thumbnail"
    data-photo-name="${photo.name}"
    src="${photo.thumbnailURI}"
    alt="${photo.caption}" title="${photo.caption}">
  </a>`;
}

function thumbnails(photos) {
  return `<div class="thumbnails">
    ${photos.map(thumbnail).join("")}
    </div>`;
}

function previousNext(previousPhoto, nextPhoto) {
  /* eslint-disable no-ternary */
  return [
    '<div id="nextPrev">',
    previousPhoto
      ? tag`<a href="${previousPhoto.pageURI}" data-photo-name="${
          previousPhoto.name
        }">&larr;previous&nbsp;</a>`
      : "",
    nextPhoto
      ? tag`<a href="${nextPhoto.pageURI}" data-photo-name="${
          nextPhoto.name
        }">next&rarr;</a>`
      : "",
    "</div>"
  ].join("");
  /* eslint-enable no-ternary */
}

function fullSize(state) {
  const { photo, previousPhoto, nextPhoto } = state;
  return [
    '<div class="photo">',
    `<h1 id="photo">${state.gallery.displayName}</h1>`,
    previousNext(previousPhoto, nextPhoto),
    tag`<figure>
      <img src="${photo.fullSizeURI}" alt="${photo.caption}" title="${
      photo.caption
    }">
      <figcaption>${photo.caption}</figcaption>
    </figure>
  </div>`
  ].join("");
}

function galleryLinks(year) {
  return year.galleries
    .map(
      gallery =>
        `<a class="galleryLink" href="?gallery=${encodeURIComponent(
          gallery.dirName
        )}" data-dir-name="${gallery.dirName}">${gallery.displayName}</a>`
    )
    .join("");
}

function getYears(galleries) {
  const byYear = {};
  galleries.forEach(gallery2 => {
    const year = gallery2.startDate.split("-")[0];
    if (!byYear[year]) {
      byYear[year] = [];
    }
    byYear[year].push(gallery2);
  });

  const years = [];
  Object.keys(byYear).forEach(year2 => {
    const galleriesInYear = byYear[year2];
    // Avoid esformatter bug when line ends in []. Do not remove this comment.
    years.push({
      name: year2,
      galleries: galleriesInYear
    });
  });
  years.reverse();
  return years;
}

function galleryList(galleries) {
  const years = getYears(galleries);
  const yearNodes = years
    .map(
      year =>
        `<div>
      <h2 class="year">${year.name}</h2>
    ${galleryLinks(year)}
    </div>`
    )
    .join("");
  return `<nav class="photos">${yearNodes}</nav>`;
}

function hydratePhotos(gallery, photos) {
  photos.forEach(photo => {
    /* eslint-disable no-param-reassign */
    photo.fullSizeURI = `${photoBase}/photos/${gallery.dirName}/${
      photo.name
    }.jpg`;
    photo.thumbnailURI = `${photoBase}/photos/${gallery.dirName}/${
      photo.name
    }-TN.jpg`;
    photo.pageURI = `/photos?gallery=${gallery.dirName}&photo=${photo.name}`;
    /* eslint-enable no-param-reassign */
  });
  return photos;
}

function renderFullSize(state) {
  dom(".photo").innerHTML = fullSize(state);
}

function render(state) {
  document.querySelector(".view-gallery").innerHTML = `
    ${fullSize(state)}
    ${thumbnails(state.gallery.photos)}
    ${galleryList(state.galleries)}`;
  // eslint-disable-next-line no-use-before-define
  document.querySelector("nav.photos").addEventListener("click", viewGallery);
}

function navigate(state) {
  window.document.title = `${state.gallery.displayName} Photo Gallery`;
  const newUrl = `${window.location.pathname}?gallery=${encodeURIComponent(
    state.gallery.dirName
  )}&photo=${encodeURIComponent(state.photo.name)}#photo`;
  window.history.pushState(this.state, window.document.title, newUrl);
  window.document.getElementById("photo").scrollIntoView();
}

async function setState(changes) {
  Object.assign(pageState, changes);
  if (!pageState.gallery) {
    pageState.gallery = pageState.galleries[0];
  }
  if (!pageState.gallery.photos) {
    const url = `${photoBase}/photos/${pageState.gallery.dirName}/photos.json`;
    const photos = await fetch(url).then(res => res.json());
    pageState.gallery.photos = hydratePhotos(pageState.gallery, photos);
  }
  if (!pageState.photo) {
    [pageState.photo] = pageState.gallery.photos;
  }
  const { photos } = pageState.gallery;
  const index = photos.findIndex(photo => photo.name === pageState.photo.name);
  Object.assign(pageState, {
    previousPhoto: photos[index - 1],
    nextPhoto: photos[index + 1]
  });
  if (changes.gallery) {
    render(pageState);
  } else {
    renderFullSize(pageState);
  }
  navigate(pageState);
}

function viewPhoto(event) {
  event.preventDefault();
  const photoName = event.target.getAttribute("data-photo-name");
  if (!photoName) {
    return;
  }
  const { photos } = pageState.gallery;
  setState({ photo: photos.find(photo => photo.name === photoName) });
}

function viewGallery(event) {
  if (event.target.tagName !== "A") {
    return;
  }
  event.preventDefault();
  const dirName = event.target.getAttribute("data-dir-name");
  const gallery = galleries.find(g => g.dirName === dirName);
  setState({ gallery });
}

function arrowKeys(state, event) {
  switch (event.key) {
    case "ArrowRight":
      if (state.nextPhoto) {
        setState({ photo: state.nextPhoto });
      }
      break;
    case "ArrowLeft":
      if (state.previousPhoto) {
        setState({ photo: state.previousPhoto });
      }
      break;
    // no default
  }
}

async function init() {
  document.addEventListener("keydown", arrowKeys.bind(null, pageState));
  document.querySelector(".view-gallery").addEventListener("click", viewPhoto);
  const query = new URLSearchParams(window.location.search);
  const gallery = query.get("gallery");
  const matchGallery = galleries.find(g => g.dirName === gallery);
  setState({ galleries, gallery: matchGallery || galleries[0] });
}

init();
