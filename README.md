# SuperCode Homepage

### Um Daten für die Kursstarte zu ändern:
`./components/data/dates.json`
    
VzTermin1: der **VZ** Kurs, der bereits läuft   
VzTermin2: der nächste **VZ** Kurs (Startdatum)   
TzTermin1: der **TZ** Kurs, der bereits läuft   
TzTermin2: der nächste **TZ** Kurs (Startdatum)   
VzTzMonth: der **Monat** für den CallToAction **Index-Seite + Kurs-Seite**   
WorkshopMont": der **Monat** für den CallToAction **Workshop-Seite**   

### Um weitere Blog-Einträge hinzuzufügen:
`./components/data/blog.json`

das Array erweitern und zusätzliche Dateien in   
`./markdown/`   
erstellen.  
Zusätzlich muss in der `next.config.js` eine neue Route eingefügt werden.  
Den Link aus dem Browser Fenster kopieren!
Falls es Probleme gibt: Es liegt an Sonderzeichen. Die müssen in diversen Dateien (momentan: Bloag_neu, [blogItem], BlogDetails) dann noch in den .replace(/\?|\#|”|“|"|,/g, "") hinzugefügt werden.

### Fuer das Absolventen-Carousell:
 `./components/data/absolvente.json`

dort können dem Array zusätzliche Absolventen als Objekt beigefügt werden.


### Funktion width:
`components/functions/windowSize.js`
Ist momentan notwendig, um das Raster und die Punkte auf der Homepage zu generieren.  
Deswegen ist auch der Render der Seiten mit `if (process.browser)` aufgebaut.

### Vorgefertigte kleine Komponenten:
`components/small`
**Arrow:** der animierte Pfeil in der Mitte der Seite.
**Button:** der animierte Button (bewegt sich hoch, box-shadow). Er nutzt die props: _href_ (das Ziel, zu dem der Link führen soll) und _text_ (der Text, der in dem Button stehen soll)
**Telefon:** das kleine Telefon an der Seite. Die Komponente nutzt props: _color_ es kann eine beliebige Farbe (hex, rgba, benannt) übergeben werden. Wenn nichts übergeben wird ist #fff als Fallback hinterlegt.