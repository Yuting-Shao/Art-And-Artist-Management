### Relational Schema

1. Artist:

- artistID (PK)
- name
- biography
- style
- totalExhibitions (Derived)

2. Artwork:

- artworkID (PK)
- artistID (FK->Artist)
- title
- medium
- dimensions
- creationDate
- price
- availabilityStatus

3. Exhibition:

- exhibitionID (PK)
- exhibitionName
- startDate
- endDate
- venue
- galleyID (FK->Gallery)

4. ExhibitionArtworks:

- exhibitionArtworkID (PK)
- exhibitionID (FK -> Exhibition)
- artworkID (FK -> Artwork)

5. Gallery:

- galleryID (PK)
- galleryName
- location
- contactDetails

6. Collector:

- collectorID （PK)
- collectorName
- preferences

7. CollectArtworks:

- collectArtworkID (PK)
- collectorID (FK -> Collector)
- artworkID (FK -> Artwork)

### Functional Dependencies

1. `artistID -> name, biography, style, totalExhibitions`
2. `artworkID -> title, medium, dimensions, creationDate, price, availabilityStatus, artistID`
3. `exhibitionID -> exhibitionName, startDate, endDate, venue, galleryID`
4. `galleryID -> galleryName, location, contactDetails`
5. `collectorID -> collectorName, preference`
6. `exhibitionArtworkID -> exhibitionID, artworkID`
7. `collectArtworkID -> collectorID, artworkID`

### Checking for BCNF

For a relation to be in BCNF: for any non-trivial functional dependency `X->Y`, `X` should be a superkey. From the above functional dependencies: 

in Artist: `artistID` is the PK, so it's a superkey

in Artwork: `artworkID` is the PK, so it's a superkey

in Exhibition: `exhibitionID` is the PK, so it's a superkey

in Gallery: `galleryID` is the PK, so it's a superkey

in Collector: `collectorID` is the PK, so it's a superkey

in ExhibitionArtworks: `exhibitionArtworkID` is the PK, so it's a superkey

in CollectorArtworks: `collectArtworkID` is the PK, so it's a superkey

Given the above, we can conclude that all relations are in BCNF.
