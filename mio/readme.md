# Kodtest frontend (React)

Testet går ut på att skapa en förenklad variant av en checkout.
I repot finns två applikationer, ett api skrivet i javascript med hjälp av express och en klientapplikation skriven i javascript och react som körs med hjälp av en statisk filserver.
Följ dessa steg för att bygga och [starta applikationerna](#starta-applikationerna).

## Instruktioner

Koden är medvetet skriven rörigt och det finns buggar i koden. I första hand är det klientapplikationen som ska åtgärdas, men i de fall du anser att en förändring bör göras i api:et för att göra helhetslösningen uppmuntras detta. Nedan instruktioner gäller klientapplikationen.

1. Refaktorera koden.

    * Se till att koden är konsekvent skriven. Det är ett plus att ta hjälp av t.ex. eslint och/eller prettier eller andra liknande verktyg.
    * Skriv om koden till typescript
    * I denna applikation används promises med .then().catch()-syntax, skriv om så async/await används.

2. Rätta buggar och optimera

    * Om man ökar antalet varor på en av produkterna i varukorgen och sedan minskar antalet på samma produkt stämmer inte antalet. Att implementera tester för fånga detta och eventuella andra buggar är ett plus.
    * När man laddar sidan kommer det en varning i consolen "Each child in a list should have a unique "key" prop.", åtgärda detta så varningen försvinner.
    * varje gång komponenten CartProduct renderas skrivs namnet på produkten ut i consolen. Detta görs även när props till komponenten är oförändrade. Gör nödvändiga förändringar så komponenten endast loggar när props till den förändrats.

3. Prop drilling. Nu skickas props från App -> CartProducts -> CartProduct. Gör nödvändiga förändringar så t.ex. setQuantity inte behöver skickas från App till CartProduct. På mio.se används React's out-of-the-box [React Context API](https://react.dev/reference/react/createContext) för detta.

4. Inline styling. Nu sker all styling genom style-attributet. Använd ett lämpligt hjälpmedel för att strukturera detta. På mio.se används t.ex. [styled components](https://styled-components.com/). 

5. Server side rendering. Gör om de två applikationerna till en applikation där sidan laddas med
mio-loggan i toppen även om javascript är avstängt i webbläsaren. Det är ok att kundvagnen hämtas efter att sidan laddats.

### Bonusuppgifter

1. Formattera postnumret i input-fältet enligt "nnn nn" och begränsa antalet tecken till 5.
2. Trigga ändring av postnummer genom att trycka enter.
3. Gör det möjligt att ta bort en produkt utan att behöva sänka antalet till 0.
4. Istället för en plus- och minusknapp för att ändra antalet på en produkt, gör en dropdown likt [denna](https://www.mio.se/varukorg) på mio.se (måste ha nåt i varukorgen för att se)

## Starta applikationerna

Klona projektet

```
git clone <länk till github>
```

Gå till api-applikationen
```
cd <cloned-path>/server
```

Installera dependencies
```
npm install
```

Starta api:et
```
node index.js
```

Gå till klient-applikationen
```
cd ../client
```

Installera dependencies
```
npm install
```

Bygg klientapplikationen
```
npm run build
```

Starta klientapplikationen
```
npm run start
```
