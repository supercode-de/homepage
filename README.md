# SuperCode Homepage

### Unsere Branches
Die Website, die LIVE über super-code.de zu erreichen ist läuft über den Master Branch. Hier bitte immer nur die jeweiligen branches mergen und im besten Fall nicht dort selbst arbeiten.

Für Features, die NICHTS mit dem Blog zutun haben bitte folgenden Branch nutzen: main-dev.

Falls ihr einen Blog Artikel einstellen wollte bitte über den blog-dev Branch.

Aktuell (29.03.22) sind folgende Branches auf dem gleichen Stand von dem Master Branch:
- main-dev
- blog-dev

Der "alte" Dev Branch ist aktuell in einem nicht funktionalen Stand, das bedeutet, dass der Blog in diesem Branch nicht auf netlify funktioniert. Die Artikel werden lokal angezeigt, auf Netlify aber nicht. Bisher habe ich dafür noch keine Lösung finden können.


### Um Daten für die Kursstarte zu ändern:
`./components/data/dates.json`
    
VzTermin1: der **VZ** Kurs, der bereits läuft   
VzTermin2: der nächste **VZ** Kurs (Startdatum)   
TzTermin1: der **TZ** Kurs, der bereits läuft   
TzTermin2: der nächste **TZ** Kurs (Startdatum)   
VzTzMonth: der **Monat** für den CallToAction **Index-Seite + Kurs-Seite**   
WorkshopMont": der **Monat** für den CallToAction **Workshop-Seite**   

### Gendern im Blog
Wenn gegendert wird bitte wie folgt schreiben:
Nutzer\\ * innen 
OHNE Leerzeichen zwischen \\ * und innen. Alles zusammenhängend. Dann brauchen wir im markdown die Leerzeichen nicht mehr zwischen * und den Wortteilen.

### Um weitere Blog-Einträge hinzuzufügen:
`./components/data/blog.json`

das Array erweitern und zusätzliche Dateien in   
`./markdown/`   
erstellen.  
Zusätzlich muss in der `next.config.js` eine neue Route eingefügt werden.  
Den Link aus dem Browser Fenster kopieren!
Falls es Probleme gibt: Es liegt an Sonderzeichen. Die müssen in diversen Dateien (momentan: Bloag_neu, [blogItem], BlogDetails) dann noch in den .replace(/\?|\#|”|“|"|,|:|\./g, "") hinzugefügt werden.

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

### Team
Wenn Leute aus dem Team entfernt oder dem Team hinzugefügt werden sollen, dann nutzt dafür die Datei "team.json". Dort dann ein neues Objekt hinzufügen oder ein bestehendes löschen. Darauf achten, dass die Werte (img, name, job, team) aktualisiert werden. Der Name "team" dient dem selektieren auf den unterschiedlichen Unterseiten. Auf unserer Teamseite sind alle dargestellt. Auf der fullstack Unterseite sind zb nur die Trainer:innen dargestellt, die dort auch tätig sind, das wird mit einer if-Abfrage erzielt, daher brauchen die Leute ein zugeordnetes Team, sonst funktioniert es nicht. Es gibt folgende Teams: backoffice, fullstack, frontend, beratung, coaching und uxui. Trainer:innen im VZ Kurs gehören zum fullstack Team, Trainer:innen im TZ Kurs zum frontend Team und so weiter.
