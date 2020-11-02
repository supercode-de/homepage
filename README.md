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

### Funktion width:
`components/functions/windowSize.js`
Ist momentan notwendig, um das Raster und die Punkte auf der Homepage zu generieren.  
Deswegen ist auch der Render der Seiten mit `if (process.browser)` aufgebaut.

_Dass kann auch ohne js passiert wenn wir css calc() benutzt_

### Vorgefertigte kleine Komponenten:
`components/small`
**Arrow:** der animierte Pfeil in der Mitte der Seite.
**Button:** der animierte Button (bewegt sich hoch, box-shadow). Er nutzt die props: _href_ (das Ziel, zu dem der Link führen soll) und _text_ (der Text, der in dem Button stehen soll)
**Telefon:** das kleine Telefon an der Seite. Die Komponente nutzt props: _color_ es kann eine beliebige Farbe (hex, rgba, benannt) übergeben werden. Wenn nichts übergeben wird ist #fff als Fallback hinterlegt.