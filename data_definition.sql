CREATE TABLE Artist (
    artistID INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    biography TEXT,
    style TEXT,
    totalExhibitions INTEGER
);

CREATE TABLE Artwork (
    artworkID INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    medium TEXT NOT NULL,
    dimensions TEXT,
    creationDate DATE,
    price REAL,
    availabilityStatus TEXT,
    artistID INTEGER NOT NULL,
    FOREIGN KEY (artistID) REFERENCES Artist(artistID)
);

CREATE TABLE Gallery (
    galleryID INTEGER PRIMARY KEY,
    galleryName TEXT NOT NULL,
    location TEXT,
    contactDetails TEXT
);

CREATE TABLE Exhibition (
    exhibitionID INTEGER PRIMARY KEY,
    exhibitionName TEXT NOT NULL,
    startDate DATE,
    endDate DATE,
    venue TEXT,
    galleryID INTEGER NOT NULL,
    FOREIGN KEY (galleryID) REFERENCES Gallery(galleryID)
);

CREATE TABLE ExhibitionArtworks (
    exhibitionArtworkID INTEGER PRIMARY KEY,
    exhibitionID INTEGER NOT NULL,
    artworkID INTEGER NOT NULL,
    FOREIGN KEY (exhibitionID) REFERENCES Exhibition(exhibitionID),
    FOREIGN KEY (artworkID) REFERENCES Artwork(artworkID)
);

CREATE TABLE Collector (
    collectorID INTEGER PRIMARY KEY,
    collectorName TEXT NOT NULL,
    preferences TEXT
);

CREATE TABLE CollectArtworks (
    collectArtworkID INTEGER PRIMARY KEY,
    collectorID INTEGER NOT NULL,
    artworkID INTEGER NOT NULL,
    FOREIGN KEY (collectorID) REFERENCES Collector(collectorID),
    FOREIGN KEY (artworkID) REFERENCES Artwork(artworkID)
);
