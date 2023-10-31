SELECT 
    a.title AS artworkTitle,
    ar.name AS artistName,
    e.exhibitionName 
FROM 
    Artwork a
JOIN 
    ExhibitionArtworks ea ON a.artworkID = ea.artworkID
JOIN 
    Exhibition e ON ea.exhibitionID = e.exhibitionID
JOIN 
    Artist ar ON a.artistID = ar.artistID
WHERE 
    e.ExhibitionName = 'Modern Perspectives';

SELECT 
    title,
    price 
FROM 
    Artwork 
WHERE 
    price > (SELECT AVG(price) FROM Artwork);

SELECT 
    artistID,
    COUNT(artworkID) AS NumberOfArtworks 
FROM 
    Artwork 
GROUP BY 
    artistID 
HAVING 
    NumberOfArtworks > 2;

SELECT 
    title,
    medium,
    creationDate,
    price 
FROM 
    Artwork 
WHERE 
    creationDate > '2020-01-01' AND 
    ((medium = 'painting' AND price > 50) OR (medium = 'sculpture' AND Price < 20));

SELECT 
    title,
    price,
    CASE
        WHEN price <= 20 THEN 'Budget'
        WHEN Price > 20 AND Price <= 70 THEN 'Mid-range'
        WHEN Price > 70 THEN 'Premium'
        ELSE 'Unknown'
    END AS priceRange
FROM 
    Artwork;
    